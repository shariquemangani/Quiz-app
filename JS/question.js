const questions = [
  //   Maths start starts here
  {
    id: 1,
    question: "What is the result of 5 + 3?",
    options: [7, 8, 6, 9],
    answer: 8,
    topic: "maths",
    lvl: 1,
  },

  {
    id: 2,
    question: "How many fingers do you have on one hand?",
    options: [10, 5, 8, 6],
    answer: 5,
    topic: "maths",
    lvl: 1,
  },

  {
    id: 3,
    question: "What comes after 4 in the counting sequence?",
    options: [5, 6, 3, 7],
    answer: 5,
    topic: "maths",
    lvl: 1,
  },

  {
    id: 4,
    question:
      "If you have 2 apples and eat 1, how many apples do you have left?",
    options: [1, 0, 2, 3],
    answer: 1,
    topic: "maths",
    lvl: 1,
  },

  {
    id: 5,
    question: "How many sides does a square have?",
    options: [3, 4, 6, 5],
    answer: 4,
    topic: "maths",
    lvl: 1,
  },

  {
    id: 6,
    question: "What is the sum of 2 and 3?",
    options: [4, 5, 6, 3],
    answer: 5,
    topic: "maths",
    lvl: 1,
  },

  {
    id: 7,
    question:
      "If you have 3 fingers on one hand and 2 on the other, how many fingers do you have in total?",
    options: [4, 6, 5, 3],
    answer: 5,
    topic: "maths",
    lvl: 1,
  },

  {
    id: 8,
    question: "Which number is the odd one out: 2, 4, 6, 9?",
    options: [2, 4, 6, 9],
    answer: 9,
    topic: "maths",
    lvl: 1,
  },

  {
    id: 9,
    question: "What is the result of 3 multiplied by 2?",
    options: [5, 6, 7, 8],
    answer: 6,
    topic: "maths",
    lvl: 1,
  },

  {
    id: 10,
    question:
      "If you have 4 candies and share them equally with your friend, how many candies does each of you get?",
    options: [2, 3, 4, 1],
    answer: 2,
    topic: "maths",
    lvl: 1,
  },
  {
    id: 11,
    question:
      "If a rectangle has a length of 7 units and a width of 4 units, what is its perimeter?",
    options: [14, 18, 22, 28],
    answer: 22,
    topic: "maths",
    lvl: 2,
  },

  {
    id: 12,
    question:
      "Sara has 15 apples, and she gives 4 to her friend. How many apples does Sara have now?",
    options: [9, 11, 15, 19],
    answer: 11,
    topic: "maths",
    lvl: 2,
  },

  {
    id: 13,
    question: "What is the product of 6 multiplied by 8?",
    options: [36, 42, 48, 54],
    answer: 48,
    topic: "maths",
    lvl: 2,
  },

  {
    id: 14,
    question:
      "If a toy costs $12 and you have $20, how much money will you have left after buying the toy?",
    options: [4, 6, 8, 10],
    answer: 8,
    topic: "maths",
    lvl: 2,
  },

  {
    id: 15,
    question:
      "Tom has 3 times as many marbles as Jane. If Jane has 5 marbles, how many marbles does Tom have?",
    options: [10, 12, 15, 18],
    answer: 15,
    topic: "maths",
    lvl: 2,
  },

  {
    id: 16,
    question: "What is the value of 9 divided by 3?",
    options: [2, 3, 4, 5],
    answer: 3,
    topic: "maths",
    lvl: 2,
  },

  {
    id: 17,
    question:
      "If the time is 3:45 PM, how many minutes are there until 4:30 PM?",
    options: [15, 30, 45, 60],
    answer: 45,
    topic: "maths",
    lvl: 2,
  },

  {
    id: 18,
    question:
      "The sum of two numbers is 20, and one of the numbers is 8. What is the other number?",
    options: [8, 10, 12, 14],
    answer: 12,
    topic: "maths",
    lvl: 2,
  },

  {
    id: 19,
    question: "If a square has a side length of 6 units, what is its area?",
    options: [18, 24, 30, 36],
    answer: 36,
    topic: "maths",
    lvl: 2,
  },

  {
    id: 20,
    question:
      "A bag contains 9 red apples and 5 green apples. What fraction of the apples are red?",
    options: ["1/2", "2/3", "3/4", "4/5"],
    answer: "3/4",
    topic: "maths",
    lvl: 2,
  },

  {
    id: 21,
    question:
      "If a train travels at a speed of 60 miles per hour, how far will it travel in 3 hours?",
    options: [120, 160, 180, 200],
    answer: 180,
    topic: "maths",
    lvl: 3,
  },

  {
    id: 22,
    question:
      "A garden is in the shape of a right-angled triangle with base 8 units and height 6 units. What is the area of the garden?",
    options: [24, 30, 36, 48],
    answer: 24,
    topic: "maths",
    lvl: 3,
  },

  {
    id: 23,
    question:
      "If a box contains 15 chocolates and 3 are dark chocolate, what percentage of the chocolates are dark chocolate?",
    options: ["15%", "20%", "25%", "30%"],
    answer: "20%",
    topic: "maths",
    lvl: 3,
  },

  {
    id: 24,
    question:
      "The perimeter of a square is 32 units. What is the length of one side of the square?",
    options: [6, 8, 10, 12],
    answer: 8,
    topic: "maths",
    lvl: 3,
  },

  {
    id: 25,
    question:
      "If a toy costs $24 and is on sale for 20% off, what is the sale price of the toy?",
    options: ["$16", "$18", "$20", "$22"],
    answer: "$19.20",
    topic: "maths",
    lvl: 3,
  },

  {
    id: 26,
    question:
      "The sum of three consecutive even numbers is 72. What are the numbers?",
    options: ["22, 24, 26", "24, 26, 28", "26, 28, 30", "28, 30, 32"],
    answer: "24, 26, 28",
    topic: "maths",
    lvl: 3,
  },

  {
    id: 27,
    question:
      "If a pizza is divided into 10 equal slices and you eat 3 slices, what fraction of the pizza did you eat?",
    options: ["1/3", "1/4", "1/5", "2/5"],
    answer: "3/10",
    topic: "maths",
    lvl: 3,
  },

  {
    id: 28,
    question:
      "A bookshelf has 5 shelves, and each shelf can hold 8 books. How many books can the entire bookshelf hold?",
    options: [30, 35, 40, 45],
    answer: 40,
    topic: "maths",
    lvl: 3,
  },

  {
    id: 29,
    question:
      "If the area of a rectangle is 45 square units, and its length is 9 units, what is the width of the rectangle?",
    options: [3, 4, 5, 6],
    answer: 5,
    topic: "maths",
    lvl: 3,
  },

  {
    id: 30,
    question:
      "A clock shows 3:15. How many degrees are between the hour and minute hands?",
    options: [90, 105, 120, 135],
    answer: 97.5,
    topic: "maths",
    lvl: 3,
  },
  //   Maths ends starts here

  //   science question starts here
  {
    id: 31,
    question: "What is the primary source of energy for the Earth?",
    options: ["Wind", "Sun", "Coal", "Water"],
    answer: "Sun",
    topic: "science",
    lvl: 1,
  },

  {
    id: 32,
    question: "Which of the following is a natural source of light?",
    options: ["Candle", "Flashlight", "Moon", "Light Bulb"],
    answer: "Moon",
    topic: "science",
    lvl: 1,
  },

  {
    id: 33,
    question:
      "What is the process by which water turns into vapor due to heat?",
    options: ["Condensation", "Evaporation", "Melting", "Freezing"],
    answer: "Evaporation",
    topic: "science",
    lvl: 1,
  },

  {
    id: 34,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
    topic: "science",
    lvl: 1,
  },

  {
    id: 35,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O",
    topic: "science",
    lvl: 1,
  },

  {
    id: 36,
    question: "Which organ in the human body pumps blood?",
    options: ["Brain", "Liver", "Heart", "Lungs"],
    answer: "Heart",
    topic: "science",
    lvl: 1,
  },

  {
    id: 37,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
    topic: "science",
    lvl: 1,
  },

  {
    id: 38,
    question: "Which force pulls objects towards the center of the Earth?",
    options: ["Magnetism", "Gravity", "Friction", "Tension"],
    answer: "Gravity",
    topic: "science",
    lvl: 1,
  },

  {
    id: 39,
    question:
      "What gas do plants absorb from the air and release oxygen during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
    topic: "science",
    lvl: 1,
  },

  {
    id: 40,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Diamond", "Platinum", "Silver"],
    answer: "Diamond",
    topic: "science",
    lvl: 1,
  },

  {
    id: 41,
    question:
      "What is the process by which plants make their own food using sunlight?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
    answer: "Photosynthesis",
    topic: "science",
    lvl: 2,
  },

  {
    id: 42,
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
    answer: "Nitrogen",
    topic: "science",
    lvl: 2,
  },

  {
    id: 43,
    question:
      "What is the process of converting a solid directly into a gas without passing through the liquid state?",
    options: ["Condensation", "Evaporation", "Sublimation", "Melting"],
    answer: "Sublimation",
    topic: "science",
    lvl: 2,
  },

  {
    id: 44,
    question:
      "Which layer of the Earth's atmosphere is closest to the surface?",
    options: ["Stratosphere", "Mesosphere", "Troposphere", "Exosphere"],
    answer: "Troposphere",
    topic: "science",
    lvl: 2,
  },

  {
    id: 45,
    question: "What is the function of the mitochondria in a cell?",
    options: [
      "Energy production",
      "Cell division",
      "Protein synthesis",
      "Storage of genetic material",
    ],
    answer: "Energy production",
    topic: "science",
    lvl: 2,
  },

  {
    id: 46,
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Venus",
    topic: "science",
    lvl: 2,
  },

  {
    id: 47,
    question:
      "What is the main function of the red blood cells in the human body?",
    options: [
      "Transport oxygen",
      "Fight infections",
      "Clotting",
      "Remove waste",
    ],
    answer: "Transport oxygen",
    topic: "science",
    lvl: 2,
  },

  {
    id: 48,
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "H2O", "CO2", "O2"],
    answer: "NaCl",
    topic: "science",
    lvl: 2,
  },

  {
    id: 49,
    question: "Which force is responsible for the tides on Earth?",
    options: ["Magnetism", "Gravity", "Friction", "Centrifugal force"],
    answer: "Gravity",
    topic: "science",
    lvl: 2,
  },

  {
    id: 50,
    question:
      "What is the smallest unit of an element that retains its chemical properties?",
    options: ["Molecule", "Atom", "Compound", "Cell"],
    answer: "Atom",
    topic: "science",
    lvl: 2,
  },

  {
    id: 51,
    question:
      "What is the process by which a cell divides into two identical daughter cells?",
    options: ["Mitosis", "Meiosis", "Fertilization", "Apoptosis"],
    answer: "Mitosis",
    topic: "science",
    lvl: 3,
  },

  {
    id: 52,
    question: "Which gas is responsible for the greenhouse effect on Earth?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
    answer: "Carbon Dioxide",
    topic: "science",
    lvl: 3,
  },

  {
    id: 53,
    question:
      "What is the function of the ozone layer in the Earth's atmosphere?",
    options: [
      "Absorb ultraviolet radiation",
      "Produce oxygen",
      "Regulate temperature",
      "Trap greenhouse gases",
    ],
    answer: "Absorb ultraviolet radiation",
    topic: "science",
    lvl: 3,
  },

  {
    id: 54,
    question: "Which scientist is known for the theory of general relativity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Stephen Hawking",
    ],
    answer: "Albert Einstein",
    topic: "science",
    lvl: 3,
  },

  {
    id: 55,
    question:
      "What is the process of converting light energy into chemical energy in plants?",
    options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
    answer: "Photosynthesis",
    topic: "science",
    lvl: 3,
  },

  {
    id: 56,
    question:
      "Which layer of the Earth is primarily composed of iron and nickel?",
    options: ["Mantle", "Crust", "Outer core", "Inner core"],
    answer: "Inner core",
    topic: "science",
    lvl: 3,
  },

  {
    id: 57,
    question:
      "What is the process by which plants release water vapor into the atmosphere?",
    options: ["Evaporation", "Condensation", "Transpiration", "Precipitation"],
    answer: "Transpiration",
    topic: "science",
    lvl: 3,
  },

  {
    id: 58,
    question:
      "Which species is commonly known as a 'keystone species' in an ecosystem?",
    options: ["Lion", "Bee", "Elephant", "Wolf"],
    answer: "Bee",
    topic: "science",
    lvl: 3,
  },

  {
    id: 59,
    question: "What is the unit of measurement for electrical resistance?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: "Ohm",
    topic: "science",
    lvl: 3,
  },

  {
    id: 60,
    question: "Which of the following is a renewable source of energy?",
    options: ["Coal", "Natural Gas", "Solar", "Nuclear"],
    answer: "Solar",
    topic: "science",
    lvl: 3,
  },

  //   science ends starts here

  //   history starts starts here

  {
    id: 61,
    question: "Who was the first President of the United States?",
    options: [
      "John Adams",
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln",
    ],
    answer: "George Washington",
    topic: "history",
    lvl: 1,
  },

  {
    id: 62,
    question: "Which ancient civilization built the pyramids?",
    options: ["Roman", "Greek", "Mayan", "Egyptian"],
    answer: "Egyptian",
    topic: "history",
    lvl: 1,
  },

  {
    id: 63,
    question:
      "In which year did Christopher Columbus first reach the Americas?",
    options: ["1492", "1607", "1776", "1848"],
    answer: "1492",
    topic: "history",
    lvl: 1,
  },

  {
    id: 64,
    question:
      "Who wrote the 'Declaration of Independence' for the United States?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Benjamin Franklin",
      "John Adams",
    ],
    answer: "Thomas Jefferson",
    topic: "history",
    lvl: 1,
  },

  {
    id: 65,
    question:
      "What was the name of the ship that brought the Pilgrims to America in 1620?",
    options: ["Mayflower", "Santa Maria", "Nina", "Endeavour"],
    answer: "Mayflower",
    topic: "history",
    lvl: 1,
  },

  {
    id: 66,
    question:
      "Who was the leader of the Civil Rights Movement in the United States?",
    options: [
      "Martin Luther King Jr.",
      "Malcolm X",
      "Rosa Parks",
      "John F. Kennedy",
    ],
    answer: "Martin Luther King Jr.",
    topic: "history",
    lvl: 1,
  },

  {
    id: 67,
    question: "What event marked the start of World War I?",
    options: [
      "Assassination of Archduke Franz Ferdinand",
      "D-Day",
      "Atomic bombings",
      "Treaty of Versailles",
    ],
    answer: "Assassination of Archduke Franz Ferdinand",
    topic: "history",
    lvl: 1,
  },

  {
    id: 68,
    question: "Who was the famous queen of ancient Egypt known for her beauty?",
    options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Ramses II"],
    answer: "Cleopatra",
    topic: "history",
    lvl: 1,
  },

  {
    id: 69,
    question: "What was the main purpose of the Great Wall of China?",
    options: [
      "Trade route",
      "Defense against invaders",
      "Agricultural irrigation",
      "Religious pilgrimage",
    ],
    answer: "Defense against invaders",
    topic: "history",
    lvl: 1,
  },

  {
    id: 70,
    question: "Who is known for his contributions to the theory of gravity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    answer: "Isaac Newton",
    topic: "history",
    lvl: 1,
  },
  {
    id: 71,
    question:
      "Which ancient empire was known for its extensive road network, the Appian Way?",
    options: [
      "Roman Empire",
      "Persian Empire",
      "Mongol Empire",
      "Ottoman Empire",
    ],
    answer: "Roman Empire",
    topic: "history",
    lvl: 2,
  },

  {
    id: 72,
    question:
      "What was the name of the ship that carried the Pilgrims to the New World in 1620?",
    options: ["Mayflower", "Santa Maria", "Nina", "Endeavour"],
    answer: "Mayflower",
    topic: "history",
    lvl: 2,
  },

  {
    id: 73,
    question:
      "Who was the leader of the Bolsheviks during the Russian Revolution of 1917?",
    options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nicholas II"],
    answer: "Vladimir Lenin",
    topic: "history",
    lvl: 2,
  },

  {
    id: 74,
    question:
      "Which famous explorer completed the first circumnavigation of the Earth?",
    options: [
      "Ferdinand Magellan",
      "Christopher Columbus",
      "Marco Polo",
      "James Cook",
    ],
    answer: "Ferdinand Magellan",
    topic: "history",
    lvl: 2,
  },

  {
    id: 75,
    question:
      "The Renaissance period is often associated with the revival of interest in the culture of which ancient civilization?",
    options: ["Greek", "Roman", "Egyptian", "Chinese"],
    answer: "Greek",
    topic: "history",
    lvl: 2,
  },

  {
    id: 76,
    question:
      "Which war was fought between the Northern and Southern states of the United States in the 1860s?",
    options: ["World War I", "Civil War", "Revolutionary War", "Vietnam War"],
    answer: "Civil War",
    topic: "history",
    lvl: 2,
  },

  {
    id: 77,
    question:
      "What event marked the beginning of the Great Depression in the 1930s?",
    options: [
      "Stock Market Crash of 1929",
      "World War I",
      "Prohibition",
      "Emancipation Proclamation",
    ],
    answer: "Stock Market Crash of 1929",
    topic: "history",
    lvl: 2,
  },

  {
    id: 78,
    question:
      "Who was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different scientific fields?",
    options: [
      "Marie Curie",
      "Rosalind Franklin",
      "Jane Goodall",
      "Barbara McClintock",
    ],
    answer: "Marie Curie",
    topic: "history",
    lvl: 2,
  },

  {
    id: 79,
    question:
      "Which ancient civilization is credited with the invention of writing known as cuneiform?",
    options: ["Mesopotamian", "Indus Valley", "Mayan", "Chinese"],
    answer: "Mesopotamian",
    topic: "history",
    lvl: 2,
  },

  {
    id: 80,
    question:
      "Who was the famous nurse during the Crimean War, known as the Lady with the Lamp?",
    options: [
      "Florence Nightingale",
      "Clara Barton",
      "Mary Seacole",
      "Dorothea Dix",
    ],
    answer: "Florence Nightingale",
    topic: "history",
    lvl: 2,
  },

  {
    id: 81,
    question: "Which ancient civilization built the city of Machu Picchu?",
    options: ["Maya", "Inca", "Aztec", "Moche"],
    answer: "Inca",
    topic: "history",
    lvl: 3,
  },

  {
    id: 82,
    question:
      "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
    options: [
      "Joseph Stalin",
      "Vladimir Putin",
      "Nikita Khrushchev",
      "Mikhail Gorbachev",
    ],
    answer: "Nikita Khrushchev",
    topic: "history",
    lvl: 3,
  },

  {
    id: 83,
    question:
      "Which ancient wonder of the world was located in the city of Babylon?",
    options: [
      "Great Pyramid of Giza",
      "Hanging Gardens",
      "Colossus of Rhodes",
      "Temple of Artemis",
    ],
    answer: "Hanging Gardens",
    topic: "history",
    lvl: 3,
  },

  {
    id: 84,
    question:
      "Who was the first Emperor of China, known for the Terracotta Army?",
    options: ["Confucius", "Han Wudi", "Shi Huangdi", "Mao Zedong"],
    answer: "Shi Huangdi",
    topic: "history",
    lvl: 3,
  },

  {
    id: 85,
    question: "What major event in European history occurred in the year 1066?",
    options: [
      "Hundred Years' War",
      "Black Death",
      "The Crusades",
      "Norman Conquest",
    ],
    answer: "Norman Conquest",
    topic: "history",
    lvl: 3,
  },

  {
    id: 86,
    question:
      "Who wrote 'The Prince,' a political treatise on leadership and power?",
    options: [
      "Niccolò Machiavelli",
      "Thomas More",
      "John Locke",
      "Machiavellius",
    ],
    answer: "Niccolò Machiavelli",
    topic: "history",
    lvl: 3,
  },

  {
    id: 87,
    question:
      "Which U.S. president issued the Emancipation Proclamation during the Civil War?",
    options: [
      "Andrew Johnson",
      "Abraham Lincoln",
      "Ulysses S. Grant",
      "Andrew Jackson",
    ],
    answer: "Abraham Lincoln",
    topic: "history",
    lvl: 3,
  },

  {
    id: 88,
    question:
      "What was the significance of the Battle of Stalingrad during World War II?",
    options: [
      "Allied invasion of Europe",
      "Turning point in favor of the Allies",
      "Axis victory",
      "End of the war",
    ],
    answer: "Turning point in favor of the Allies",
    topic: "history",
    lvl: 3,
  },

  {
    id: 89,
    question:
      "Who was the leader of the American civil rights movement and delivered the 'I Have a Dream' speech?",
    options: [
      "Malcolm X",
      "Rosa Parks",
      "Martin Luther King Jr.",
      "John Lewis",
    ],
    answer: "Martin Luther King Jr.",
    topic: "history",
    lvl: 3,
  },

  {
    id: 90,
    question:
      "In what year did the Berlin Wall fall, symbolizing the end of the Cold War?",
    options: ["1985", "1987", "1989", "1991"],
    answer: "1989",
    topic: "history",
    lvl: 3,
  },
  //   history ends starts here
];
