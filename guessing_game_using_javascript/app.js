let maximum = parseInt(prompt("Enter the maximum positive number:"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid positive number:"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first positive number guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    while (!parseInt(guess) && guess !== 'q') guess = prompt("Invalid guess. Please enter a valid positive number or 'q' to quit");
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) guess = prompt("Too High! Enter a new positive number guess:");
    else guess = prompt("Too Low! Enter a new positive number guess:");
    attempts++;
}

if (guess !== 'q') {
    console.log(`You win in ${attempts} number of attempts`);
}
else {
    console.log(`You Quit after ${attempts - 1} number of attempts! The correct answer is ${targetNum}`);
}
