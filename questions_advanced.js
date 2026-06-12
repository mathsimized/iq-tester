const advancedQuestions = [
  {
    id: 101, type: 'pattern', difficulty: 5,
    question: 'What number comes next?<br><span style="font-size:1.4rem">2, 3, 5, 9, 17, 33, ?</span>',
    options: ['64', '65', '66', '67'],
    answer: 1,
    explanation: 'Each term is one less than twice the previous: 2×2−1=3, 3×2−1=5, ... 33×2−1=65.'
  },
  {
    id: 102, type: 'pattern', difficulty: 6,
    question: 'These numbers are sorted alphabetically by their English name. What comes next?<br><span style="font-size:1.4rem">8, 5, 4, 9, 1, 7, 6, ?</span>',
    options: ['2', '3', '10', '0'],
    answer: 1,
    explanation: 'In alphabetical order: eight, five, four, nine, one, seven, six, three, two. Next is 3 (three).'
  },
  {
    id: 103, type: 'math', difficulty: 7,
    question: 'What number comes next in this infinite cycle?<br><span style="font-size:1.2rem">4, 16, 37, 58, 89, 145, 42, 20, ?</span>',
    options: ['1', '4', '10', '16'],
    answer: 1,
    explanation: 'Each term is the sum of squares of digits of the previous: 4→4²=16, 16→1²+6²=37, ... 20→2²+0²=4, so it cycles back to 4. This is the unhappy/sad number cycle in number theory.'
  },
  {
    id: 104, type: 'math', difficulty: 6,
    question: 'What is the smallest positive integer that is divisible by every integer from 1 to 10?',
    options: ['1260', '2520', '5040', '3628800'],
    answer: 1,
    explanation: 'The LCM of 1–10 is 2520. 1260 is not divisible by 8. 5040 is divisible but not the smallest.'
  },
  {
    id: 105, type: 'math', difficulty: 5,
    question: 'Three apples and two oranges cost $2.80. Two apples and three oranges cost $2.70. How much does one apple cost?',
    options: ['$0.50', '$0.55', '$0.60', '$0.65'],
    answer: 2,
    explanation: 'Let a = apple, o = orange. 3a+2o=2.80, 2a+3o=2.70. Multiply first by 3: 9a+6o=8.40. Second by 2: 4a+6o=5.40. Subtract: 5a=3.00, a=$0.60.'
  },
  {
    id: 106, type: 'logic', difficulty: 6,
    question: 'All Bloops are Razzies. Some Razzies are Lazzies. Which statement must be true?',
    options: ['All Bloops are Lazzies', 'Some Lazzies are Bloops', 'No definite conclusion is possible', 'All Razzies are Bloops'],
    answer: 2,
    explanation: 'We only know all Bloops are Razzies and some Razzies overlap with Lazzies. These Venn diagrams allow multiple interpretations, so no definite conclusion.'
  },
  {
    id: 107, type: 'verbal', difficulty: 5,
    question: 'Which word does NOT belong?',
    options: ['Ephemeral', 'Evanescent', 'Perennial', 'Fugacious'],
    answer: 2,
    explanation: 'Ephemeral, evanescent, and fugacious all mean "short-lived." Perennial means "lasting for years" — the opposite.'
  },
  {
    id: 108, type: 'spatial', difficulty: 6,
    question: 'All 6 faces of a 10×10×10 cube are painted red, then it is cut into 1000 unit cubes. How many small cubes have exactly 2 red faces?',
    options: ['64', '96', '100', '120'],
    answer: 1,
    explanation: 'Cubes with exactly 2 painted faces are edge pieces excluding corners. Each edge: (10−2) = 8 cubes. 12 edges × 8 = 96.'
  },
  {
    id: 109, type: 'logic', difficulty: 6,
    question: 'Two guards stand before two doors. One always tells the truth, one always lies. One door leads to freedom. You may ask ONE question to ONE guard. What do you ask?',
    options: [
      '"Which door leads to freedom?"',
      '"What would the other guard say leads to freedom?" then pick the opposite',
      '"Are you the truth-teller?"',
      '"Is this the safe door?"'
    ],
    answer: 1,
    explanation: 'Ask "What would the other guard say leads to freedom?" The liar will lie about what the truth-teller would say, and the truth-teller will truthfully report the liar\'s lie. Both point to the wrong door, so you pick the opposite.'
  },
  {
    id: 110, type: 'math', difficulty: 6,
    question: 'What is the 1,000,000th digit of the number formed by concatenating all positive integers:<br><span style="font-size:1.2rem">123456789101112131415...</span>',
    options: ['1', '2', '5', '9'],
    answer: 0,
    explanation: '1-digit: 1-9 = 9 digits. 2-digit: 10-99 = 180 digits. 3-digit: 100-999 = 2700 digits. 4-digit: 1000-9999 = 36000 digits. 5-digit: 10000-99999 = 450000 digits. Total so far: 488889. Need 511111 more. 6-digit numbers: 511111/6 = 85185.16... The 85186th 6-digit number starting from 100000 is 185185. The 1st digit of 185185 is 1.'
  },
  {
    id: 111, type: 'verbal', difficulty: 5,
    question: 'Iconoclast is to tradition as heretic is to:',
    options: ['Religion', 'Science', 'Government', 'Orthodoxy'],
    answer: 3,
    explanation: 'An iconoclast attacks established traditions. A heretic attacks orthodoxy (established religious doctrine).'
  },
  {
    id: 112, type: 'spatial', difficulty: 5,
    question: 'How many squares of ALL sizes are on a standard 8×8 chessboard?',
    options: ['64', '128', '204', '256'],
    answer: 2,
    explanation: '1×1: 64, 2×2: 49, 3×3: 36, 4×4: 25, 5×5: 16, 6×6: 9, 7×7: 4, 8×8: 1. Total = 64+49+36+25+16+9+4+1 = 204.'
  },
  {
    id: 113, type: 'math', difficulty: 7,
    question: 'How many trailing zeros does 100! (100 factorial) have?',
    options: ['12', '20', '24', '49'],
    answer: 2,
    explanation: 'Trailing zeros come from factors of 10 = 2×5. There are always more 2s than 5s, so count factors of 5: ⌊100/5⌋ + ⌊100/25⌋ + ⌊100/125⌋ = 20 + 4 + 0 = 24. The trap is forgetting multiples of 25 contribute an extra 5.'
  },
  {
    id: 114, type: 'pattern', difficulty: 6,
    question: 'What number comes next?<br><span style="font-size:1.4rem">1, 4, 27, 256, 3125, ?</span>',
    options: ['46656', '15625', '6250', '7776'],
    answer: 0,
    explanation: 'n^n: 1¹=1, 2²=4, 3³=27, 4⁴=256, 5⁵=3125, 6⁶=46656.'
  },
  {
    id: 115, type: 'spatial', difficulty: 6,
    question: 'How many distinct ways can 6 people sit around a circular table? (Rotations are considered the same.)',
    options: ['120', '720', '24', '5040'],
    answer: 0,
    explanation: 'Linear arrangements: 6! = 720. For a circle, rotations are identical: 6!/6 = 120. (Fix one person, arrange the remaining 5: 5! = 120.)'
  },
];
