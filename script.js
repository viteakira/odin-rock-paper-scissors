function getComputerChoice () {
    let value = Math.floor(Math.random() * 3);
    if (value == 0) {
        return "rock"
    }
    else if (value == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice () {
    let choice = prompt("Rock, paper or scissors? :");
    return choice
}


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Draw!");
    }

    else if (humanChoice === "rock" & computerChoice === "scissors") {
        console.log("Human wins!");
        return "human"
    }

    else if (humanChoice === "paper" & computerChoice === "rock") {
        console.log("Human wins!");
        return "human"
    }

    else if (humanChoice === "scissors" & computerChoice === "paper") {
        console.log("Human wins!");
        return "human"
    }

    else {
        console.log("Computer wins!");
        return "computer"
    }
}

function playGame () {
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        console.log("Human chose " + humanSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer chose " + computerSelection);

        let result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
        }

        else if (result === "computer") {
            computerScore++;
        }

        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore === computerScore) {
        console.log("Draw!");
    }
    else {
        console.log("Computer wins!");
    }
}

playGame();
