const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput ===  'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console('Error');
  }
}


const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'choose either rock, paper, or scissors'
  }
}

console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    return 'game was a tie';
  }
  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won';
    } else {
      return 'You won';
    }
  }
  
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors' || computerChoice === 'rock'){
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock' || computerChoice === 'paper'){
      return 'You won!';
    } else {
      return 'The computer won!';
    }
  }
  
  if (userChoice === 'bomb'){
      return 'You won!';
  }
}

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();