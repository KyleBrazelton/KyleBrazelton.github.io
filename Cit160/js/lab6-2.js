window.onload = function curDate() {
    let today = new Date();
    let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
    document.getElementById('currentdate').innerHTML = date;
}



// fast way to calculate a random number and display it for the child to work out the problem

var random1;
var random2;

function generateProblem() {
    var random1 = Math.floor(Math.random() * (100 - 1)) + 1;
    var random2 = Math.floor(Math.random() * (100 - 1)) + 1;
    document.getElementById('equation').innerHTML = random1 + "+" + random2;
}

function checkSolution() {
    //INPUT get two positive integers max 100/addition/
    //PROCESSING get integers, check if true compare integers	
    //OUTPUT answer, of the two integers

    let answer = document.getElementById('solution').value;

    if (answer == (random1 + random2)) {
        document.getElementById('output').innerHTML = "Correct! Good job."
        document.getElementById('solution').value = "";

    } else {
        document.getElementById('output').innerHTML = "Sorry. That is incorrect."
        document.getElementById('solution').value = "";

    }

}