const nightmareQuestions = [
  // Q1 — CRT trick (5 machines, 5 minutes)
  {
    id: 201, type: 'logic', difficulty: 7,
    question: 'If 5 machines take 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
    options: ['1 minute', '5 minutes', '20 minutes', '100 minutes'],
    answer: 1,
    explanation: 'Each machine makes 1 widget in 5 minutes. So 100 machines make 100 widgets in 5 minutes. The intuitive trap is to answer 100 minutes.'
  },
  // Q2 — Clock hands overlap
  {
    id: 202, type: 'logic', difficulty: 7,
    question: 'How many times do the hour and minute hands of a clock overlap in a 24-hour period?',
    options: ['11', '22', '12', '24'],
    answer: 1,
    explanation: 'They overlap once per hour except between 12:00 and 1:00 (they overlap at exactly 12:00). So 11 overlaps in 12 hours × 2 = 22 in 24 hours.'
  },
  // Q3 — Monty Hall problem
  {
    id: 203, type: 'logic', difficulty: 7,
    question: 'You are on a game show with 3 doors. One hides a car, two hide goats. You pick door 1. The host (who knows what is behind each door) opens door 3 to reveal a goat. He then offers you the chance to switch to door 2. What is the probability of winning if you switch?',
    options: ['1/2', '2/3', '1/3', '1'],
    answer: 1,
    explanation: 'Initial pick has 1/3 chance. The host always reveals a goat from the other two doors. Switching gives you the combined probability of the other two doors = 2/3.'
  },
  // Q4 — Birthday paradox
  {
    id: 204, type: 'math', difficulty: 7,
    question: 'What is the minimum number of people needed in a room for there to be a greater than 50% chance that at least two share the same birthday (ignoring Feb 29)?',
    options: ['23', '50', '183', '367'],
    answer: 0,
    explanation: 'The probability of no shared birthday for n people is 365/365 × 364/365 × ... × (365-n+1)/365. For n=23, this drops below 50%, meaning a shared birthday becomes more likely than not. Most people guess much higher.'
  },
  // Q5 — Lily pad doubling
  {
    id: 205, type: 'logic', difficulty: 7,
    question: 'A lily pad doubles in size every day. If it takes 48 days to completely cover a pond, how many days does it take to cover half the pond?',
    options: ['24', '36', '47', '12'],
    answer: 2,
    explanation: 'If it doubles each day and covers the pond on day 48, then half the pond was covered the day before on day 47. The intuitive trap is to answer 24.'
  },
  // Q6 — Snail climbing a wall
  {
    id: 206, type: 'math', difficulty: 7,
    question: 'A snail climbs 3 feet up a wall during the day and slips 2 feet down at night. How many days does it take to reach the top of a 30-foot wall?',
    options: ['28', '29', '30', '15'],
    answer: 0,
    explanation: 'Net gain = 1 ft/day. On day 27 the snail is at 27 ft. On day 28, it climbs from 27 to 30 ft and is out before slipping. The trap is answering 30.'
  },
  // Q7 — Spherical triangle
  {
    id: 207, type: 'spatial', difficulty: 8,
    question: 'What is the sum of the interior angles of a triangle drawn on the surface of a sphere?',
    options: ['180°', '270°', 'Greater than 180°', '360°'],
    answer: 2,
    explanation: 'In spherical (non-Euclidean) geometry, the sum of angles exceeds 180° and can be up to 540°. A triangle formed by three right angles on a sphere sums to 270°.'
  },
  // Q8 — Units digit of 7^7^7
  {
    id: 208, type: 'math', difficulty: 8,
    question: 'What is the units (ones) digit of 7^7^7 (7 raised to the power of 7, which is itself raised to the power of 7)?',
    options: ['3', '7', '9', '1'],
    answer: 0,
    explanation: '7^n cycles every 4: 7, 9, 3, 1. 7^7 = 823543, which ≡ 3 (mod 4). So we need the 3rd in the cycle: 7, 9, 3. The units digit is 3.'
  },
  // Q9 — Sylvester's sequence
  {
    id: 209, type: 'pattern', difficulty: 8,
    question: 'What is the next number?<br><span style="font-size:1.2rem">2, 3, 7, 43, 1807, ?</span>',
    options: ['3263443', '3263442', '3263441', '1807 × 1806'],
    answer: 0,
    explanation: "Sylvester's sequence: each term is the product of all previous terms plus 1. 2, 2+1=3, 2×3+1=7, 2×3×7+1=43, 2×3×7×43+1=1807. Next: (2×3×7×43×1807)+1 = 3263443."
  },
  // Q10 — St. Ives riddle (impossible trick)
  {
    id: 210, type: 'logic', difficulty: 7,
    question: 'As I was going to St. Ives, I met a man with 7 wives. Each wife had 7 sacks, each sack had 7 cats, each cat had 7 kits. Kits, cats, sacks, wives — how many were going to St. Ives?',
    options: ['1', '2801', '7', '2800'],
    answer: 0,
    explanation: 'The speaker met the man coming from St. Ives. Only the speaker (1 person) was going to St. Ives. The man and his entourage were traveling in the opposite direction. The calculation 7+7²+7³+7⁴ is a distractor.'
  }
];
