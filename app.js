const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const PLAYER_WINS = "You Won. Congrats";
const COMPUTER_WINS = "You Lost. Hold the L!"
let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, "").toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid Pick, We gave you ${DEFAULT_USER_CHOICE}!`);
    return;
  }
  return selection;
}

const getComputerChoice = function() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => cChoice === pChoice ? RESULT_DRAW : (
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK
  ) ? PLAYER_WINS : COMPUTER_WINS;

  // if (cChoice === pChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   cChoice === ROCK && pChoice === PAPER ||
  //   cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK
  // ) {
  //   return PLAYER_WINS;
  // } else {
  //   return COMPUTER_WINS;
  // }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting....");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
     winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice, playerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice},`;
  if (winner === RESULT_DRAW) {
    message = message + " you had a draw." ;
  } else if (winner === PLAYER_WINS) {
    message = message + " you won. Congrats"
  } else {
    message = message = " you lost. Hold the L"
  }
  alert(message);
  gameIsRunning = false;
  });


  //not related to game 

const combine = (resultHandler, operation, ...numbers) => {
  function validateNumber(number) {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum, "The result after adding all the numbers is");
// };

const showResult = (messageText,result) => {
  alert(messageText + " " + result)
};

combine(showResult.bind(this, "The result after adding all numbers is:"), "ADD" ,1, 5, 'oof', -3, 6, 10);
combine(showResult.bind(this, "The result after adding all numbers is:"), "ADD" ,1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, "The result after subtracting all numbers is:"), "SUBTRACT", 1, 10, 15, 20);
