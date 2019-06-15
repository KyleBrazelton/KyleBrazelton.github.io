// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//INPUT get the number guessed by user, and each time guessed
//PROCESSING check input against number, calculate number of guesses
//OUTPUT display correct answer, and number of guesses.

function numberGuessGame() {
    let message = "I'm thinking of a number between 1 and 100.\n" +
        "Try to guess it!\n" +
        "Please enter an integer between 1 and 100.";
    let answer = 68;
    let guess;
    let attempts = 0;
    do {
        guess = parseInt(prompt(message));
        attempts += 1;
        if (guess < answer) {
            message = guess +
                " is too low. Please enter another integer.";
        } else if (guess > answer) {
            message = guess +
                " is too high. Please enter another integer.";
        }
    } while (guess != answer);
    message = guess + " is correct! Attempts to guess correctly = " + attempts;
    let results = message;
    document.getElementById('results').innerHTML = results;
}