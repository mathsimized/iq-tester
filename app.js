const state = {
  current: 0,
  answers: new Array(questions.length).fill(null),
  startTime: null,
  endTime: null,
  finished: false
};

function getScreen(id) {
  return document.getElementById(id);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  getScreen(id).classList.add('active');
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let shuffledOrder = [];

function initTest() {
  shuffledOrder = shuffleArray([...Array(questions.length).keys()]);
  state.current = 0;
  state.answers = new Array(questions.length).fill(null);
  state.startTime = Date.now();
  state.endTime = null;
  state.finished = false;
  getScreen('testScreen').querySelector('.question-grid').scrollTop = 0;
  showScreen('testScreen');
  renderQuestion();
}

function renderQuestion() {
  const idx = shuffledOrder[state.current];
  const q = questions[idx];

  document.getElementById('progressBar').style.width = ((state.current) / questions.length * 100) + '%';
  document.getElementById('progressText').textContent = `Question ${state.current + 1} of ${questions.length}`;

  const typeLabels = { pattern: 'Pattern Recognition', math: 'Math Logic', verbal: 'Verbal Reasoning', spatial: 'Spatial Reasoning' };
  document.getElementById('qBadge').textContent = typeLabels[q.type] || q.type;
  document.getElementById('qNumber').textContent = `Question ${state.current + 1}`;
  document.getElementById('qText').innerHTML = q.question;

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (state.answers[state.current] === i) btn.classList.add('selected');
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>`;
    btn.onclick = () => selectOption(i);
    container.appendChild(btn);
  });

  document.getElementById('prevBtn').style.display = state.current === 0 ? 'none' : 'inline-block';
  const isLast = state.current === questions.length - 1;
  document.getElementById('nextBtn').textContent = isLast ? 'Complete' : 'Next →';
  document.getElementById('nextBtn').disabled = state.answers[state.current] === null;
}

function selectOption(idx) {
  state.answers[state.current] = idx;
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });
  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  if (state.answers[state.current] === null) return;
  if (state.current === questions.length - 1) {
    finishTest();
    return;
  }
  state.current++;
  renderQuestion();
}

function prevQuestion() {
  if (state.current === 0) return;
  state.current--;
  renderQuestion();
}

function finishTest() {
  state.endTime = Date.now();
  state.finished = true;
  showResults();
}

function calculateIQ() {
  let correct = 0;
  const categories = { pattern: { correct: 0, total: 0 }, math: { correct: 0, total: 0 }, verbal: { correct: 0, total: 0 }, spatial: { correct: 0, total: 0 } };

  shuffledOrder.forEach((qIdx, i) => {
    const q = questions[qIdx];
    const ans = state.answers[i];
    const isCorrect = ans === q.answer;
    if (isCorrect) correct++;
    categories[q.type].total++;
    if (isCorrect) categories[q.type].correct++;
  });

  const rawScore = correct;
  const mean = 18;
  const sd = 5;
  let z = (rawScore - mean) / sd;
  let iq = Math.round(100 + z * 15);
  iq = Math.max(60, Math.min(160, iq));

  const percentileRanks = [0,1,2,5,9,16,25,37,50,63,75,84,91,96,98,99,100];
  const scoreBins = [0,4,6,8,10,12,14,16,18,20,22,24,26,28,29,30,30];
  let percentile = 50;
  for (let i = 0; i < scoreBins.length; i++) {
    if (rawScore <= scoreBins[i]) { percentile = percentileRanks[i]; break; }
  }

  const timeSeconds = Math.round((state.endTime - state.startTime) / 1000);
  const timeMinutes = Math.floor(timeSeconds / 60);
  const timeRemainder = timeSeconds % 60;

  return {
    rawScore,
    total: questions.length,
    iq,
    percentile,
    categories,
    timeMinutes,
    timeRemainder,
    timeSeconds
  };
}

function showResults() {
  const result = calculateIQ();
  showScreen('resultScreen');

  document.getElementById('iqScore').textContent = result.iq;

  const labels = ['Below Average', 'Average', 'Above Average', 'Gifted', 'Genius'];
  const thresholds = [70, 90, 110, 130, 145];
  let label = labels[0];
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (result.iq >= thresholds[i]) { label = labels[i]; break; }
  }
  document.getElementById('iqLabel').textContent = label;
  document.getElementById('percentile').textContent = `${result.percentile}th`;
  document.getElementById('rawScore').textContent = `${result.rawScore} / ${result.total}`;

  const catLabels = { pattern: 'Pattern', math: 'Math', verbal: 'Verbal', spatial: 'Spatial' };
  const catContainer = document.getElementById('categoryBreakdown');
  catContainer.innerHTML = '';
  Object.entries(result.categories).forEach(([key, val]) => {
    const pct = val.total > 0 ? Math.round(val.correct / val.total * 100) : 0;
    const div = document.createElement('div');
    div.className = 'cat-bar';
    div.innerHTML = `
      <div class="cat-label">
        <span>${catLabels[key] || key}</span>
        <span>${val.correct}/${val.total} (${pct}%)</span>
      </div>
      <div class="cat-track"><div class="cat-fill" style="width:${pct}%"></div></div>
    `;
    catContainer.appendChild(div);
  });

  document.getElementById('timeTaken').textContent = `${result.timeMinutes}m ${result.timeRemainder}s`;
  document.getElementById('totalQuestionsResult').textContent = result.total;

  saveToHistory(result);
  renderHistory();
}

function saveToHistory(result) {
  const history = JSON.parse(localStorage.getItem('iq_history') || '[]');
  history.unshift({
    date: new Date().toISOString(),
    iq: result.iq,
    rawScore: result.rawScore,
    total: result.total,
    percentile: result.percentile,
    timeMinutes: result.timeMinutes,
    timeRemainder: result.timeRemainder,
    categories: result.categories
  });
  if (history.length > 20) history.length = 20;
  localStorage.setItem('iq_history', JSON.stringify(history));
}

function renderHistory() {
  const container = document.getElementById('historyList');
  const history = JSON.parse(localStorage.getItem('iq_history') || '[]');
  if (history.length === 0) {
    container.innerHTML = '<p style="color:var(--muted);text-align:center;padding:24px;">No past results yet.</p>';
    return;
  }
  container.innerHTML = history.map((h, i) => {
    const d = new Date(h.date);
    const dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    return `
      <div class="history-item" onclick="showHistoryDetail(${i})">
        <div>
          <strong style="font-size:1.1rem;">IQ ${h.iq}</strong>
          <span style="color:var(--muted);font-size:0.85rem;margin-left:8px;">${h.rawScore}/${h.total} · ${h.percentile}th</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="color:var(--muted2);font-size:0.8rem;">${dateStr}</span>
          <span style="color:var(--accent);">→</span>
        </div>
      </div>
    `;
  }).join('');
}

function showHistoryDetail(idx) {
  const history = JSON.parse(localStorage.getItem('iq_history') || '[]');
  const h = history[idx];
  const d = new Date(h.date);
  alert(`IQ: ${h.iq}\nScore: ${h.rawScore}/${h.total}\nPercentile: ${h.percentile}th\nDate: ${d.toLocaleDateString()}\nTime: ${h.timeMinutes}m ${h.timeRemainder}s`);
}

function clearHistory() {
  if (!confirm('Clear all past results?')) return;
  localStorage.removeItem('iq_history');
  renderHistory();
}

document.addEventListener('DOMContentLoaded', () => {
  showScreen('landingScreen');
  renderHistory();
});
