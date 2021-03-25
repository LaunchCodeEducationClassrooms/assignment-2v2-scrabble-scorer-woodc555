// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toLowerCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word:");
};

let simpleScore = function(word){
  word = word.toLowerCase();
  score = 0;
  for (let i = 0; i < word.length; i++){
    score++;
  }
  console.log(`The score for ${word} is: ${score}`);
  return score;
};

let vowelBonusScore = function(word){
  word = word.toLowerCase();
  vowelScore = 0;
  vowels = ["a", "e", "i", "o", "u"];
  wordArray = word.split();
  for (let i = 0; i < word.length; i++){
    let j = 0;
    if(vowels.includes(word[i])) {
      vowelScore = vowelScore + 3;
    } else {
      vowelScore++;
    }
  }
  console.log(`The score for ${word} is: ${vowelScore}`);
  return vowelScore;
};

let scrabbleScore = function(word){
  word = word.toLowerCase();
  let score = 0;
  for (i = 0; i < word.length; i++){
    score += newPointStructure[word[i]];
  };
  console.log(`The score for ${word} is: ${score}`);
  return score;
};

const scoringAlgorithms = [ 
  Object({ name: 'Simple Score', description: 'Each letter is worth 1 point', scorerFunction: simpleScore }),

  Object({ name: 'Bonue Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scorerFunction: vowelBonusScore }),

  Object({ name: 'Scrabble', description: 'The traditional scoring algorithm.', scorerFunction: scrabbleScore }) ];

function scorerPrompt() {
  scoreChoice = input.question("Which scoring Algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system");
  if (scoreChoice == 0){
    console.log(simpleScore(word));
  } else if (scoreChoice == 1){
    console.log(vowelBonusScore(word));
  } else if (scoreChoice == 2){
    console.log(scrabbleScore(word));
  } else{
    scoreChoice = input.question("Please choose a number 0 - 2: ")
  }
}

function transform(pointStructure) {
  let newPointStruct = {};
  for (key in pointStructure) {
    for (let i = 0; i < pointStructure[key].length; i++){
      let letterItem = pointStructure[key][i];
      letterItem = letterItem.toLowerCase();
    };
  };
  return newPointStruct;
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[" "] = 0;

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

