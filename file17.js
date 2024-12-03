// nested if else
// winning number = 19
// 19 your guess is right
// 17 too low!!!
//23 too high!!!

let winningNumber = 19;
const prompt = require('prompt-sync')();
let userGuess = +prompt("Guess a Number: ");
if(userGuess === winningNumber){
    console.log("your guess is right!");
}else {
    if(userGuess > winningNumber){
        console.log("Too High!!");   
    }else {
        console.log("Too Low!!")
    }
}
