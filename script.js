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
