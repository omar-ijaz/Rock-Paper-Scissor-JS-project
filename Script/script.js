let choices = ["rock", "paper", "scissors"];

function getUserInput () {
    let userInput = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase();
    if (userInput ==="paper" || userInput ==="rock" || userInput ==="scissors") {
        alert("you chose " + `${userInput}`)
    }
    else {
        alert("error, try again")
        console.log (getUserInput())
    }
    console.log(userInput)
}
console.log (getUserInput())

function getComputerInput () {
    let computerInput = choices[Math.floor(Math.random()*3)]
    alert("The computer chose " + `${computerInput}`)
    
   
}
console.log (getComputerInput())


function declareWinner(userInput, computerInput) {

    if(userInput === "rock" && computerInput === 'paper') {
        alert ('You lose! paper beats rock!');     
    } else if (userInput === 'rock' && computerInput === 'rock') {
        alert ('Its a tie!');     
    } else if (userInput === 'rock' && computerInput === 'scissors') {
        alert ('You win! Rock beats scissors!');     
    } else if(userInput === "paper" && computerInput === 'rock') {
        alert ('You win! paper beats rock!');     
    } else if (userInput === 'paper' && computerInput === 'paper') {
        alert ('Its a tie!');     
    } else if (userInput === 'paper' && computerInput === 'scissors') { 
        alert ('You lose! Scissors beats paper!');  
    } else if(userInput === "scissors" && computerInput === 'rock') {
        alert ('You lose! Rock beats scissors!');     
    } else if (userInput === 'scissors' && computerInput === 'paper') {
        alert ('You win! Scissors beats paper!');     
    } else  { 
        alert ('It is a tie!');  
    }  
}

console.log(declareWinner())
