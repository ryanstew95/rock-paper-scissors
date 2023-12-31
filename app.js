const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const userChoiceImg = document.getElementById('user-choice-img');
const computerChoiceImg = document.getElementById('computer-choice-img');
const possibleChoices = document.querySelectorAll('button');
const resetButton = document.getElementById('reset');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  userChoiceImg.src = `img/user/${userChoice}.png`;
  generateComputerChoice();
  getResult();
}));

resetButton.addEventListener('click', () => {
  userChoiceDisplay.innerHTML = '';
  computerChoiceDisplay.innerHTML = '';
  resultDisplay.innerHTML = '';
  userChoiceImg.src = '';
  computerChoiceImg.src = '';
  userChoice = null;
  computerChoice = null;
  result = null;
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }

  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
  computerChoiceImg.src = `img/computer/${computerChoice}.png`;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'you lose!'
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}