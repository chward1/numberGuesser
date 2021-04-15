let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

let compareGuesses = (humanGuess, computerGuess, target) => {
    if ((Math.abs(target - humanGuess)) > (Math.abs(target - computerGuess))) {
      return false;
    } else if ((Math.abs(target - computerGuess)) > (Math.abs(target - humanGuess))) {
        return true;
    } else if (humanGuess === computerGuess) {
        return true;
    }
};

let updateScore = (winner) => {
  if (winner === 'human') {
      humanScore += 1;
  } else if (winner === 'computer') {
      computerScore += 1;
  }
};

let advanceRound = () => {
    currentRoundNumber += 1;
};
