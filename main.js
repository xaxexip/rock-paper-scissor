function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.round(Math.random() * (choices.length - 1))]
}

function playerPlay() {
    let userInput = prompt("Choose rock, paper, or scissors").toLowerCase()
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
        return userInput;
    }
    else {
        console.log("Invalid, please refresh and try again");
        playerPlay();
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log("Computer choose paper, you lose");
            return "computer win";
        }
        else if (computerSelection == "scissors") {
            console.log("Computer choose scissors, you win");
            return "player win";
        }
        else if (computerSelection == "rock"){
            console.log("Its a tie");
            return "tie"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            console.log("Computer choose scissors, you lose");
            return "computer win";
        }
        else if (computerSelection == "rock") {
            console.log("Computer choose rock, you win");
            return "player win";
        }
        else if (computerSelection == "paper") {
            console.log("Its a tie");
            return "tie"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log("Computer choose rock, you lose");
            return "computer win";
        }
        else if (computerSelection == "paper") {
            console.log("Computer choose paper, you win");
            return "player win";
        }
        else if (playerSelection == "scissors") {
            console.log("Its a tie");
            return "tie"
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    while(playerScore < 5 && computerScore < 5){
        console.log(`Player: ${playerScore}, Computer: ${computerScore}, Tie: ${tieScore}`)
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == "computer win") {
            computerScore++;
        }
        else if (roundResult == "player win") {
            playerScore++;
        }
        else if (roundResult == "tie") {
            tieScore++;
        }
    }

    if (playerScore > computerScore){
        console.log("Congrats, you win the game!");
    }
    else{
        console.log("I'm sorry, but you lost the game");
    }
}

game();