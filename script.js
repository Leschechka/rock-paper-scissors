const forms = {
  1: 'scissors',
  2: 'paper',
  3: 'rock',
}

const getNumber = () => Math.floor(Math.random() * (3 - 1 + 1)) + 1

function getComputerChoice() {
  const choice = forms[getNumber()]
  return choice
}

function getHumanChoice() {
  const choice = prompt('Which form?', 'scissors')
  return choice
}

let humanScore = 0
let computerScore = 0

function showScore() {
  console.log(`your score: ${humanScore}
computer score: ${computerScore}`)
}

function playRound() {
  const humanSelection = getHumanChoice().toLowerCase()
  const computerSelection = getComputerChoice()

  console.log(`your selection: ${humanSelection}
computer selection: ${computerSelection}`)

  if (humanSelection == computerSelection) {
    console.log(`Draw`)
  } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
    console.log('Win')
    humanScore++
  } else if (humanSelection == 'paper' && computerSelection == 'rock') {
    console.log('Win')
    humanScore++
  } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
    console.log('Win')
    humanScore++
  } else {
    computerScore++
  }

  showScore()
}

function playGame() {
  if (prompt('Woud you like to play?', 'yes') == 'yes') {
    for (let i = 0; i < 5; i++) {
      playRound()
    }

    if (humanScore > computerScore) {
      console.log('You won')
    } else if (humanScore < computerScore) {
      console.log('You failed')
    } else {
      console.log('Draw')
    }
  }

  humanScore = 0
  computerScore = 0
}
