const questions = [
  // ─── Pattern Recognition (1-8) ───
  {
    id: 1, type: 'pattern', difficulty: 1,
    question: 'Which figure comes next in the sequence?<br><span style="font-size:2rem;letter-spacing:8px">▲ ▼ ▲ ▼ ?</span>',
    options: ['▲', '▼', '◄', '►'],
    answer: 0,
    explanation: 'The arrow alternates between pointing up and down. After ▼ comes ▲.'
  },
  {
    id: 2, type: 'pattern', difficulty: 1,
    question: 'Which comes next?<br><span style="font-size:2rem;letter-spacing:8px">⬤ ◯ ⬤ ◯ ?</span>',
    options: ['⬤', '◯', '⬤◯', '◯⬤'],
    answer: 0,
    explanation: 'The pattern alternates filled circle, empty circle. Next is filled circle (⬤).'
  },
  {
    id: 3, type: 'pattern', difficulty: 2,
    question: 'What comes next?<br><span style="font-size:1.6rem">○ &nbsp; □ &nbsp; ○○ &nbsp; □□ &nbsp; ○○○ &nbsp; ?</span>',
    options: ['□', '□□', '□□□', '○○○○'],
    answer: 2,
    explanation: 'The pattern alternates circles then squares, with the count increasing by one each time. After three circles comes three squares (□□□).'
  },
  {
    id: 4, type: 'pattern', difficulty: 2,
    question: 'Which is the odd one out?<br><span style="font-size:2.5rem;letter-spacing:16px">△ ▲ ◊ ●</span>',
    options: ['Triangle', 'Filled triangle', 'Diamond', 'Filled circle'],
    answer: 2,
    explanation: 'The diamond is the only shape that is not a triangle, a variant of a triangle, or a filled shape.'
  },
  {
    id: 5, type: 'pattern', difficulty: 3,
    question: 'Which number completes the pattern?<br><span style="font-size:1.2rem">A→1, B→2, C→3, D→4, ... Z→?</span>',
    options: ['24', '25', '26', '27'],
    answer: 2,
    explanation: 'Each letter maps to its position in the alphabet: A=1, B=2, C=3... Z=26.'
  },
  {
    id: 6, type: 'pattern', difficulty: 3,
    question: 'What number replaces the question mark?<br><span style="font-size:1.4rem">2 → 6 → 18 → 54 → ?</span>',
    options: ['108', '162', '72', '90'],
    answer: 1,
    explanation: 'Each term is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162.'
  },
  {
    id: 7, type: 'pattern', difficulty: 4,
    question: 'Complete the sequence:<br><span style="font-size:1.2rem">1A, 2B, 3C, 4D, 5E, ?</span>',
    options: ['6F', '6E', 'F6', '7F'],
    answer: 0,
    explanation: 'The number increases by 1 and the letter advances one step in the alphabet: 1A, 2B, 3C... 5E, 6F.'
  },
  {
    id: 8, type: 'pattern', difficulty: 4,
    question: 'Which number completes the pattern?<br><span style="font-size:1.4rem">1, 4, 9, 16, 25, ?</span>',
    options: ['30', '35', '36', '49'],
    answer: 2,
    explanation: 'These are perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36.'
  },

  // ─── Math Logic (9-16) ───
  {
    id: 9, type: 'math', difficulty: 1,
    question: 'If you have 5 apples and take away 2, how many apples do YOU have?',
    options: ['2', '3', '5', '7'],
    answer: 0,
    explanation: '"Take away 2" means those 2 apples are now yours. You have 2 apples.'
  },
  {
    id: 10, type: 'math', difficulty: 1,
    question: 'Complete the sequence:<br><span style="font-size:1.4rem">3, 6, 9, 12, ?</span>',
    options: ['13', '14', '15', '18'],
    answer: 2,
    explanation: 'Each number increases by 3: 3+3=6, 6+3=9, 9+3=12, 12+3=15.'
  },
  {
    id: 11, type: 'math', difficulty: 2,
    question: 'A bat and a ball cost $1.10 total. The bat costs $1.00 more than the ball. How much does the ball cost?',
    options: ['$0.05', '$0.10', '$0.15', '$1.00'],
    answer: 0,
    explanation: 'If ball = x, bat = x + $1.00. Total: x + (x + 1.00) = 1.10 → 2x = 0.10 → x = $0.05.'
  },
  {
    id: 12, type: 'math', difficulty: 2,
    question: 'If 5 machines take 5 minutes to make 5 widgets, how long would 100 machines take to make 100 widgets?',
    options: ['5 minutes', '20 minutes', '100 minutes', '500 minutes'],
    answer: 0,
    explanation: 'Each machine makes 1 widget in 5 minutes. So 100 machines make 100 widgets in 5 minutes.'
  },
  {
    id: 13, type: 'math', difficulty: 3,
    question: 'A lily pad patch doubles in size every day. If it covers the entire lake on day 48, on what day did it cover half the lake?',
    options: ['Day 24', 'Day 36', 'Day 47', 'Day 48'],
    answer: 2,
    explanation: 'Since it doubles each day, the day before covering the full lake it covered half. So day 47.'
  },
  {
    id: 14, type: 'math', difficulty: 3,
    question: 'Rearrange the letters of "NEW DOOR" to form one common phrase.',
    options: ['WONDER', 'ROWDEN', 'ONE WORD', 'DOWNER'],
    answer: 2,
    explanation: 'The letters in "NEW DOOR" rearrange to spell "ONE WORD".'
  },
  {
    id: 15, type: 'math', difficulty: 4,
    question: 'What number replaces the question mark?<br><span style="font-size:1.2rem">2 + 3 = 10<br>7 + 2 = 63<br>6 + 5 = 66<br>8 + 4 = ?</span>',
    options: ['96', '72', '84', '100'],
    answer: 0,
    explanation: 'The pattern is a + b = a × (a + b). So 8 × (8 + 4) = 8 × 12 = 96.'
  },
  {
    id: 16, type: 'math', difficulty: 4,
    question: 'How many times can you subtract 5 from 25?',
    options: ['Only once', '5 times', 'Unlimited times', 'Until it runs out'],
    answer: 0,
    explanation: 'Only once. After subtracting 5 from 25 once, you get 20. Then you are subtracting 5 from 20, not from 25.'
  },

  // ─── Verbal Reasoning (17-23) ───
  {
    id: 17, type: 'verbal', difficulty: 1,
    question: 'Which word does NOT belong with the others?',
    options: ['Apple', 'Banana', 'Carrot', 'Grape'],
    answer: 2,
    explanation: 'Apple, banana, and grape are fruits. Carrot is a vegetable.'
  },
  {
    id: 18, type: 'verbal', difficulty: 1,
    question: 'Cat is to kitten as dog is to:',
    options: ['Puppy', 'Cub', 'Foal', 'Calf'],
    answer: 0,
    explanation: 'A kitten is a baby cat. A puppy is a baby dog.'
  },
  {
    id: 19, type: 'verbal', difficulty: 2,
    question: 'Hot is to cold as light is to:',
    options: ['Bright', 'Dark', 'Warm', 'Heavy'],
    answer: 1,
    explanation: 'Hot and cold are opposites, just as light and dark are opposites.'
  },
  {
    id: 20, type: 'verbal', difficulty: 2,
    question: 'Book is to reader as food is to:',
    options: ['Cook', 'Eater', 'Plate', 'Kitchen'],
    answer: 1,
    explanation: 'A book is consumed by a reader. Food is consumed by an eater.'
  },
  {
    id: 21, type: 'verbal', difficulty: 3,
    question: 'Which word means the opposite of "ephemeral"?',
    options: ['Temporary', 'Fleeting', 'Permanent', 'Brief'],
    answer: 2,
    explanation: '"Ephemeral" means lasting a very short time. Its opposite is "permanent".'
  },
  {
    id: 22, type: 'verbal', difficulty: 3,
    question: 'Tree is to forest as star is to:',
    options: ['Moon', 'Sky', 'Galaxy', 'Sun'],
    answer: 2,
    explanation: 'Many trees form a forest. Many stars form a galaxy.'
  },
  {
    id: 23, type: 'verbal', difficulty: 4,
    question: 'Which word is the odd one out?',
    options: ['Happy', 'Joyful', 'Ecstatic', 'Quiet'],
    answer: 3,
    explanation: 'Happy, joyful, and ecstatic all describe positive emotions. Quiet describes a lack of noise.'
  },

  // ─── Spatial Reasoning (24-30) ───
  {
    id: 24, type: 'spatial', difficulty: 1,
    question: 'A triangle pointing up (▲) is rotated 90° clockwise. Which shape do you get?',
    options: ['▲ (points up)', '▶ (points right)', '▼ (points down)', '◀ (points left)'],
    answer: 1,
    explanation: 'Rotating ▲ 90° clockwise makes it point right: ▶.'
  },
  {
    id: 25, type: 'spatial', difficulty: 2,
    question: 'Which shape is the mirror image of this?<br><span style="font-size:2rem">◢</span>',
    options: ['◢', '◣', '◥', '◤'],
    answer: 1,
    explanation: 'The mirror image of a bottom-left triangle (◢) is a bottom-right triangle (◣).'
  },
  {
    id: 26, type: 'spatial', difficulty: 2,
    question: 'If you fold a square paper in half and then in half again, how many layers does it have?',
    options: ['2', '3', '4', '8'],
    answer: 2,
    explanation: 'Folding once = 2 layers. Folding again = 4 layers total (2 × 2).'
  },
  {
    id: 27, type: 'spatial', difficulty: 3,
    question: 'Which face is opposite the face with one dot on a standard die?',
    options: ['Two dots', 'Four dots', 'Five dots', 'Six dots'],
    answer: 3,
    explanation: 'On a standard die, opposite sides sum to 7. So 1 is opposite 6.'
  },
  {
    id: 28, type: 'spatial', difficulty: 3,
    question: 'How many edges does a cube have?',
    options: ['6', '8', '10', '12'],
    answer: 3,
    explanation: 'A cube has 12 edges: 4 on the top square, 4 on the bottom square, and 4 connecting them vertically.',
  },
  {
    id: 29, type: 'spatial', difficulty: 4,
    question: 'All 6 faces of a 3×3×3 cube are painted red, then it is cut into 27 identical unit cubes. How many of the small cubes have exactly 2 red faces?',
    options: ['4', '8', '12', '24'],
    answer: 2,
    explanation: 'The cubes with exactly 2 painted faces are the edge pieces (not corners). A 3×3 cube has 1 center piece per edge × 12 edges = 12 cubes.',
  },
  {
    id: 30, type: 'spatial', difficulty: 4,
    question: 'A square sheet of paper is folded in half diagonally, then folded in half diagonally again. When unfolded, how many creases intersect at the center?',
    options: ['2', '3', '4', '1'],
    answer: 2,
    explanation: 'Folding a square diagonally creates 1 crease. Folding again diagonally (perpendicular to the first) creates a second crease. Both cross at the center, making 2 crease lines that intersect at the center.',
  },
];
