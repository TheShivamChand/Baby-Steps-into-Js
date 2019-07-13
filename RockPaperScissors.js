const getUserChoice = userInput =>{
  userInput=userInput.toLowerCase();
  if(userInput==='rock' || userInput==='paper' || userInput==='scissors')
    return userInput;
  else
    console.log('Invalid Option!!!')
};

//console.log(getUserChoice('roc'))

function getComputerChoice(){
  const num=Math.floor(Math.random()*3);
  if(num===0)
    return 'rock';
  if(num===1)
    return 'paper';
  if(num===2)
    return 'scissors';
}

//console.log(getComputerChoice())

const determineWinner=(userChoice,computerChoice) => {
  if(userChoice===computerChoice)
    return 'It\'s a Tie!';
  if(userChoice==='rock')
  {
    if(computerChoice==='paper')
      return 'Computer Won!';
    else
      return 'User Won!';
  }
  if(UserChoice==='paper')
  {
    if(computerChoice==='scissors')
      return 'Computer Won!';
    else
      return 'User Won!';
  }
  if(userChoice==='scissors')
  {
    if(computerChoice==='rock')
      return 'Computer Won!';
    else
      return 'User Won!';
  }
}

//console.log(determineWinner('rock','scissors'))
//console.log(determineWinner('rock','paper'))
//console.log(determineWinner('rock','rock'))

const playGame=()=>{
  const userChoice=getUserChoice('rock'); //User to enter his choice here
  const computerChoice=getComputerChoice();
  console.log('You chose: '+userChoice);
  console.log('Computer chose: '+computerChoice)

  console.log(determineWinner(userChoice,computerChoice));

};

playGame();