const forms = {
  1: 'scissors',
  2: 'paper',
  3: 'rock',
}

function getComputerChoice() {
  const choice = forms[getNumber()]
  return choice
}

const getNumber = () => Math.floor(Math.random() * (3 - 1 + 1)) + 1

let humanScore = 0
let machineScore = 0

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const userChoice = document.getElementById('user-choice');
const computerChoice = document.getElementById('computer-choice');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score')

rockBtn.addEventListener('click', () => playRound(rockBtn.value))
paperBtn.addEventListener('click', () => playRound(paperBtn.value))
scissorsBtn.addEventListener('click', () => playRound(scissorsBtn.value))


function playRound(yourChoice) {
  const humanSelection = yourChoice
  const computerSelection = getComputerChoice()

  if (humanSelection == computerSelection) {
    // draw
  } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
    humanScore++
  } else if (humanSelection == 'paper' && computerSelection == 'rock') {
    humanScore++
  } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
    humanScore++
  } else {
    machineScore++
  }
  
  userChoice.textContent = yourChoice
  computerChoice.textContent = computerSelection
  
  userScore.textContent = humanScore;
  computerScore.textContent = machineScore; 

  if (humanScore == 5 || machineScore == 5) {
    
  }
}
