function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function determineWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "r" && computerSelection === "s") ||
      (playerSelection === "p" && computerSelection === "r") ||
      (playerSelection === "s" && computerSelection === "p")
    ) {
      return "You win!";
    } else if (
      (playerSelection === "s" && computerSelection === "r") ||
      (playerSelection === "r" && computerSelection === "p") ||
      (playerSelection === "p" && computerSelection === "s")
    ) {
      return "Computer wins!";
    }
  }
  
  
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):").toLowerCase();
      const computerSelection = getComputerChoice();
      const result = determineWinner(playerSelection, computerSelection);
  
      console.log(`Round ${round}: ${result}`);
      console.log(`Computer's choice: ${computerSelection}`);
  
      if (result === "You win!") {
        playerScore++;
      } else if (result === "Computer wins!") {
        computerScore++;
      }
    }
  
    console.log(`Final Score - Player: ${playerScore} | Computer: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Oops! You lose the game!");
    } else {
      console.log("It's a tie! The game ends in a draw.");
    }
  }
  
  game();
  