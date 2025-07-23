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

console.log(getComputerChoice());

function getHumanChoice () {
    let choice = prompt("Rock, paper or scissors? :");
    return choice
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function (comp, human) {
    // TODO
}