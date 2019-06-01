// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;



// fast way to calculate a random number and display it for the child to work out the problem

let random1;
let random2;

function generateProblem() {
    let random1 = Math.floor(Math.random() * (100 - 1)) + 1;
    let random2 = Math.floor(Math.random() * (100 - 1)) + 1;
    document.getElementById('equation').innerHTML = random1 + "+" + random2;
}

function checkSolution() {

    //INPUT get two positive integers max 100/addition/
    let solution = document.getElementById('solution').value;
    let feedBack;
    //PROCESSING get integers, check if true compare integers
    let answer = random1 + random2;
    if (solution == answer) {
        feedBack = "Correct! Good job!"
    } else {
        feedBack = "Sorry. That is incorrect."
    }
    //OUTPUT answer, of the two integers
    document.getElementById('output').innerHTML = feedBack;
}