let ps = require("prompt-sync");
let prompt = ps();

let rightGuess = Math.floor(Math.random() * 10);

let guesses = 10

while (guesses > 0) {
    if (guesses == 1) {
        console.log("You have", guesses, "life remaning,")
    } else {console.log("You have", guesses, "lifes remaning,")
}
    var guess = prompt("Guess: ")
    if (rightGuess == guess) {
        console.log("Congratulations you win!")
        break;
    }
    guesses--
}

if (guesses == 0) {
    console.log("You lose!")
}
