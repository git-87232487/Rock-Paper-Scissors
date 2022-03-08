var optionsArray = ["rock", "paper", "scissors"];

function computerPlay() {
    var randomIndex = Math.floor(Math.random()*optionsArray.length);
    return optionsArray[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper";
    }
  } 
  
  const playerSelection = prompt("Do you choose rock, paper or scissors?").toLowerCase();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

