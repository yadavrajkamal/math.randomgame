const max = prompt("Enter The Max Number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess The Number");

const outputDiv = document.getElementById("output");

while (true) {
    if (guess == "quit") {
        outputDiv.textContent = "Looser!!";
        break;
    }
    if (parseInt(guess) === random) {
        outputDiv.textContent = `Congrats! You are right!! Your guess was ${random}`;
        break;
    } else if (parseInt(guess) < random) {
        guess = prompt("Your guess is too small");
    } else if (parseInt(guess) > random) {
        guess = prompt("Your guess is too large");
    }
}
