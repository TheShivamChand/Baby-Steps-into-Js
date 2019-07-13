let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget= () => {
	return Math.floor(Math.random()*10);
}

const compareGuesses = (humanGuess,computerGuess,secretNumber) => {
	const humanDiff=Math.abs(secretNumber-humanGuess);
	const computerDiff=Math.abs(secretNumber-computerGuess);
	return humanDiff<=computerDiff;
}

const updateScore = stringVal => {
	if(stringVal==='human')
		humanScore++;
	else
		computerScore++;
}

const advanceRound = () => currentRoundNumber++;