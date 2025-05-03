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

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const userChoice = document.getElementById('user-choice')
const computerChoice = document.getElementById('computer-choice')
const userScore = document.getElementById('user-score')
const computerScore = document.getElementById('computer-score')

rockBtn.addEventListener('click', () => playGame(rockBtn.value))
paperBtn.addEventListener('click', () => playGame(paperBtn.value))
scissorsBtn.addEventListener('click', () => playGame(scissorsBtn.value))

function playGame(yourChoice) {
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
  userScore.textContent = humanScore
  computerScore.textContent = machineScore

  if (humanScore == 5 || machineScore == 5) {
    showResult(humanScore, machineScore)
  }
}

function showResult(score1, score2) {
  const buttons = document.getElementById('buttons')
  const parentOfButtons = buttons.parentNode
  const winner = document.createElement('div')
  winner.classList.add('winner')
  const userCongratulation = document.createElement('span')
  if (score1 == 5) {
    userCongratulation.classList.add('win')
    userCongratulation.textContent = 'Win!'
  } else if (score2 == 5) {
    userCongratulation.classList.add('fail')
    userCongratulation.textContent = 'Fail'
  }

  winner.appendChild(userCongratulation)
  const breaking = document.createElement('br')
  winner.appendChild(breaking)
  const restartBtn = document.createElement('button')
  restartBtn.classList.add('restart')
  restartBtn.textContent = 'Restart?'
  winner.appendChild(restartBtn)
  parentOfButtons.insertBefore(winner, buttons)
  buttons.style.display = 'none'

  function restartGame() {
    humanScore = 0
    machineScore = 0
    userChoice.textContent = ''
    computerChoice.textContent = ''
    userScore.textContent = ''
    computerScore.textContent = ''
    parentOfButtons.removeChild(winner)
    buttons.style.display = 'block'
  }
  restartBtn.addEventListener('click', restartGame)
}
