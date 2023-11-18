//                                      **PSEUDOCODE**
// Scissors > paper > rock
//  Computer will choose an option
//  Player will choose an option
// scissors beats paper
// paper beats rock
// rock beats scissors
// print "You WIN/LOSE! Paper beats Rock!"

// Create this as a function that takes two inputs - playerSelection, computerSelection


// function playRPS(playerSelection, computerSelection) {
//     //
// }   
let gameCounter = 1
const maxWins = 5
let playerWins = 0
let compWins = 0

function computerSelection() {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arrRPS.length);
    
        // get random item
        const computerChoice = arrRPS[randomIndex];
    
        return computerChoice.toLowerCase();
    }

const arrRPS = ['Rock','Paper','Scissors'] // define options for computer to choose from
const getComputerSelection = computerSelection(arrRPS) // computer chooses rock paper or scissors

function clickRock() {
    playerSelection = "rock";
    // console.log(playerSelection);
}
function clickPaper() {
    playerSelection = "paper";
    // console.log(playerSelection);
}
function clickScissors() {
    playerSelection = "scissors";
    // console.log(playerSelection);
}

function game() {
    if (getComputerSelection === playerSelection){
        alert(`Draw!`);
    }else if (playerSelection === `rock` & getComputerSelection === `scissors`){
        alert(`Player Wins!`), playerWins++
    }else if (playerSelection === 'paper' & getComputerSelection === `rock`){
        alert(`Player Wins!`), playerWins++
    }else if (playerSelection === 'scissors' & getComputerSelection === `paper`){
        alert(`Player Wins!`), playerWins++
    }else if (playerSelection != `scissors` & getComputerSelection === `rock`){
        alert(`Computer Wins!`), compWins++;
    }else if (playerSelection != 'rock' & getComputerSelection === `paper`){
        alert(`Computer Wins!`), compWins++;
    }else if (playerSelection != 'paper' & getComputerSelection === `scissors`){
        alert(`Computer Wins!`), compWins++;
    }
    computerSelection()
    gameCounter++
    if (playerWins === maxWins){
        alert(`Game Over -- Player Wins!`);
    }else if (compWins === maxWins){
        alert(`Game Over -- Player Loses`)
    }
}

function gameOver() {
    alert(`Game Over -- You've given up!`);
}
computerSelection()

// Prompt user for rock paper or scissors
// function playerSelection() {
//     let getplayerSelection = prompt(`Rock, Paper or Scissors?`) // prompt use for rock paper or scissors & force lowercase on accept
    
//     if (getplayerSelection.includes(`rock`, `paper`, `scissors`) === false) {
//         prompt(`Only choose from Rock, Paper or Scissors!`)
        
//     return getplayerSelection.toLowerCase()
//     }
// }

// playerSelection()
// const playerSelection = prompt(`Choose your weapon`).toLowerCase()
// let getComputerChoice = Math.floor(Math.random() * arrRPS.length)