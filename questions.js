const questions = [
  // ─── Pattern Recognition (1-8) ───
  {
    id: 1, type: 'pattern', difficulty: 3,
    question: 'What number completes the sequence?<br><span style="font-size:1.4rem">1, 2, 4, 7, 11, ?</span>',
    options: ['14', '15', '16', '22'],
    answer: 2,
    explanation: 'The gaps increase by 1 each time: +1, +2, +3, +4, then +5. 11+5=16.'
  },
  {
    id: 2, type: 'pattern', difficulty: 4,
    question: 'What letter completes the sequence?<br><span style="font-size:1.4rem">A, C, F, J, O, ?</span>',
    options: ['R', 'S', 'T', 'U'],
    answer: 3,
    explanation: 'Gaps between letters increase by 1: A→C=2, C→F=3, F→J=4, J→O=5, O→U=6. U is the 21st letter.'
  },
  {
    id: 3, type: 'pattern', difficulty: 3,
    question: 'Which number completes the sequence?<br><span style="font-size:1.4rem">2, 5, 10, 17, 26, ?</span>',
    options: ['35', '36', '37', '50'],
    answer: 2,
    explanation: 'n²+1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37.'
  },
  {
    id: 4, type: 'pattern', difficulty: 5,
    question: 'Complete the sequence of binary numbers:<br><span style="font-size:1.2rem">1, 10, 11, 100, 101, ?</span>',
    options: ['110', '111', '1000', '1001'],
    answer: 0,
    explanation: 'These are binary representations of 1, 2, 3, 4, 5. Next is 6, which is 110 in binary.'
  },
  {
    id: 5, type: 'pattern', difficulty: 4,
    question: 'What comes next?<br><span style="font-size:1.4rem">3, 4, 7, 8, 11, 12, ?</span>',
    options: ['13', '14', '15', '16'],
    answer: 2,
    explanation: 'Pattern is +1, +3, +1, +3... 12+3=15.'
  },
  {
    id: 6, type: 'pattern', difficulty: 5,
    question: 'What is the next term?<br><span style="font-size:1.2rem">1, 2, 6, 24, 120, ?</span>',
    options: ['240', '360', '480', '720'],
    answer: 3,
    explanation: 'Each term is multiplied by an increasing integer: ×2, ×3, ×4, ×5, then ×6. 120×6=720 (factorials: 1!, 2!, 3!, 4!, 5!, 6!).'
  },
  {
    id: 7, type: 'pattern', difficulty: 5,
    question: 'Which set does NOT belong with the others?',
    options: ['{2, 3, 5, 7}', '{11, 13, 17, 19}', '{23, 29, 31, 37}', '{41, 43, 47, 52}'],
    answer: 3,
    explanation: 'All numbers in A, B, C are prime numbers. D contains 52, which is not prime (52 = 2×26).'
  },
  {
    id: 8, type: 'pattern', difficulty: 4,
    question: 'What letter completes the sequence?<br><span style="font-size:1.2rem">O, T, T, F, F, S, S, ?</span>',
    options: ['E', 'N', 'S', 'T'],
    answer: 0,
    explanation: 'These are the first letters of numbers: One, Two, Three, Four, Five, Six, Seven, Eight. Next is E for Eight.'
  },

  // ─── Math Logic (9-16) ───
  {
    id: 9, type: 'math', difficulty: 3,
    question: 'If A + B = 12 and A × B = 35, what is |A − B|?',
    options: ['1', '2', '3', '5'],
    answer: 1,
    explanation: 'The two numbers that sum to 12 and multiply to 35 are 7 and 5. |7−5| = 2.'
  },
  {
    id: 10, type: 'math', difficulty: 4,
    question: 'At a party, 12 people each shake hands with everyone else exactly once. How many handshakes occur?',
    options: ['24', '54', '66', '132'],
    answer: 2,
    explanation: 'Each pair shakes hands once. C(12,2) = 12×11/2 = 66.'
  },
  {
    id: 11, type: 'math', difficulty: 5,
    question: 'A car goes 60 miles in 1 hour and returns the same distance at 30 mph. What is the average speed for the entire round trip?',
    options: ['40 mph', '45 mph', '48 mph', '50 mph'],
    answer: 0,
    explanation: 'Going: 60 miles at 60 mph = 1 hour. Return: 60 miles at 30 mph = 2 hours. Total: 120 miles / 3 hours = 40 mph.'
  },
  {
    id: 12, type: 'math', difficulty: 4,
    question: 'In a class, 1/3 of the students are boys. Among the girls, 2/5 have brown hair. If 12 girls do NOT have brown hair, how many students are in the class?',
    options: ['24', '30', '36', '45'],
    answer: 1,
    explanation: 'Let total = x. Boys = x/3. Girls = 2x/3. Brown hair girls = (2/5)(2x/3) = 4x/15. Non-brown girls = 2x/3 − 4x/15 = 6x/15 = 12. So x = 30.'
  },
  {
    id: 13, type: 'math', difficulty: 5,
    question: 'How many 3-digit numbers are divisible by 7?',
    options: ['127', '128', '129', '142'],
    answer: 1,
    explanation: 'Smallest 3-digit multiple: 105 (15×7). Largest: 994 (142×7). Count: 142 − 15 + 1 = 128.'
  },
  {
    id: 14, type: 'math', difficulty: 5,
    question: 'What is the units digit of 3^100?',
    options: ['1', '3', '7', '9'],
    answer: 0,
    explanation: '3^n cycles every 4: 3, 9, 27→7, 81→1. 100 mod 4 = 0, so digit is 1.'
  },
  {
    id: 15, type: 'math', difficulty: 4,
    question: 'What comes next in the sequence?<br><span style="font-size:1.2rem">1, 11, 21, 1211, 111221, ?</span>',
    options: ['11112221', '211221', '312211', '321121'],
    answer: 2,
    explanation: 'The look-and-say sequence: each term describes the previous. 111221 is "three 1s, two 2s, one 1" → 312211.'
  },
  {
    id: 16, type: 'math', difficulty: 3,
    question: 'A clock shows exactly 3:15. What is the angle between the hour and minute hands?',
    options: ['0°', '7.5°', '15°', '30°'],
    answer: 1,
    explanation: 'At 3:15, minute hand at 90°. Hour hand at 97.5° (3×30 + 15×0.5). Difference = 7.5°.'
  },

  // ─── Verbal Reasoning (17-23) ───
  {
    id: 17, type: 'verbal', difficulty: 2,
    question: 'Finger is to hand as toe is to:',
    options: ['Foot', 'Leg', 'Shoe', 'Ankle'],
    answer: 0,
    explanation: 'Fingers are part of a hand. Toes are part of a foot.'
  },
  {
    id: 18, type: 'verbal', difficulty: 4,
    question: 'Which word means the opposite of "ephemeral"?',
    options: ['Temporary', 'Fleeting', 'Permanent', 'Brief'],
    answer: 2,
    explanation: 'Ephemeral means lasting a very short time. Permanent is its opposite.'
  },
  {
    id: 19, type: 'verbal', difficulty: 4,
    question: 'Enigma is to clarity as chaos is to:',
    options: ['Confusion', 'Order', 'Pandemonium', 'Disarray'],
    answer: 1,
    explanation: 'An enigma lacks clarity. Chaos lacks order. Clarity resolves enigma; order resolves chaos.'
  },
  {
    id: 20, type: 'verbal', difficulty: 3,
    question: 'Which word does NOT belong?',
    options: ['Oasis', 'Mirage', 'Desert', 'Canyon'],
    answer: 1,
    explanation: 'Oasis, desert, and canyon are real geographical features. A mirage is an optical illusion.'
  },
  {
    id: 21, type: 'verbal', difficulty: 3,
    question: 'Prologue is to epilogue as sunrise is to:',
    options: ['Morning', 'Noon', 'Afternoon', 'Sunset'],
    answer: 3,
    explanation: 'A prologue comes before a book; an epilogue comes after. Sunrise comes at the start of day; sunset comes at the end.'
  },
  {
    id: 22, type: 'verbal', difficulty: 4,
    question: 'Which word is closest in meaning to "loquacious"?',
    options: ['Talkative', 'Quiet', 'Beautiful', 'Rapid'],
    answer: 0,
    explanation: 'Loquacious means very talkative or chatty.'
  },
  {
    id: 23, type: 'verbal', difficulty: 5,
    question: 'Which word is the odd one out based on its meaning?',
    options: ['Ubiquitous', 'Omnipresent', 'Pervasive', 'Rare'],
    answer: 3,
    explanation: 'Ubiquitous, omnipresent, and pervasive all mean "found everywhere." Rare means the opposite.'
  },

  // ─── Spatial Reasoning (24-30) ───
  {
    id: 24, type: 'spatial', difficulty: 3,
    question: 'A triangle pointing up (▲) is rotated 90° clockwise, then reflected in a vertical mirror. Which shape results?',
    options: ['▲ (up)', '▶ (right)', '▼ (down)', '◀ (left)'],
    answer: 3,
    explanation: '▲ rotated 90° clockwise = ▶ (right). Then reflected vertically = ◀ (left).'
  },
  {
    id: 25, type: 'spatial', difficulty: 4,
    question: 'A 4×4×4 cube is made of 64 small cubes. All 6 outer faces are painted red. How many small cubes have exactly 1 red face?',
    options: ['8', '12', '24', '48'],
    answer: 2,
    explanation: 'Cubes with 1 painted face are face-centers. Each face has a 2×2 center section = 4 per face × 6 faces = 24.'
  },
  {
    id: 26, type: 'spatial', difficulty: 5,
    question: 'How many squares of ALL sizes are there on a standard 8×8 chessboard?',
    options: ['64', '120', '204', '256'],
    answer: 2,
    explanation: 'Count squares of each size: 8² (1×1) + 7² (2×2) + ... + 1² (8×8) = 64+49+36+25+16+9+4+1 = 204.'
  },
  {
    id: 27, type: 'spatial', difficulty: 3,
    question: 'If today is Monday, what day of the week is it 100 days from now?',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    answer: 2,
    explanation: '100 mod 7 = 2. Monday + 2 = Wednesday.'
  },
  {
    id: 28, type: 'spatial', difficulty: 4,
    question: 'Which number is NOT a perfect square?',
    options: ['441', '529', '576', '680'],
    answer: 3,
    explanation: '441 = 21², 529 = 23², 576 = 24². 680 is not a perfect square (26²=676, 27²=729).'
  },
  {
    id: 29, type: 'spatial', difficulty: 4,
    question: 'What number completes the sequence?<br><span style="font-size:1.4rem">3, 7, 15, 31, 63, ?</span>',
    options: ['95', '111', '127', '143'],
    answer: 2,
    explanation: 'Each term is ×2 + 1: 3×2+1=7, 7×2+1=15... 63×2+1=127. (Also 2ⁿ−1: 2²−1, 2³−1, ... 2⁷−1=127.)'
  },
  {
    id: 30, type: 'spatial', difficulty: 5,
    question: 'If you cut a cube with a plane that passes through the midpoints of three edges meeting at a vertex, what shape is the cross-section?',
    options: ['Triangle', 'Square', 'Pentagon', 'Hexagon'],
    answer: 0,
    explanation: 'The plane cuts through three midpoints of edges sharing a vertex, creating a triangular cross-section (equilateral triangle if the cube is regular).'
  },
];
