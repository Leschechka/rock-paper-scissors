const forms = {
  1: 'scissors',
  2: 'paper',
  3: 'rock',
}

const getNumber = () => Math.floor(Math.random() * (3 - 1 + 1)) + 1

function getComputerChoice() {
  const computerChoice = forms[getNumber()]
  return computerChoice
}
