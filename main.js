const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	return options[(Math.floor(Math.random() * options.length))];
}

function getPlayerChoice() {
    let playerSelection = prompt("Choose your weapon: Rock, paper, or scissors").toLowerCase();
    while (!options.includes(playerSelection)) {
        playerSelection = prompt("Invalid choice. Please choose Rock, paper, or scissors").toLowerCase();
    }
    return playerSelection;
}

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        alert("It's a draw");
    } else if (
        (playerSelection === "scissors" && computerSelection != "rock") ||
        (playerSelection === "rock" && computerSelection != "paper") ||
        (playerSelection === "paper" && computerSelection != "scissors")
    ) {
        alert("You won");
        playerScore++;
    } else {
        alert("You lost");
        computerScore++;
    }
    alert(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);
}

function game() {
    for(i=0; i<=5; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        alert("Congratulations! You win!");
    } else if (playerScore < computerScore) {
        alert("Sorry, you lose. Better luck next time!");
    } else {
        alert("It's a tie!");
    }
}

game();