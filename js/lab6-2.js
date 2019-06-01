// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;



// fast way to calculate a random number and display it for the child to work out the problem

var random1 = Math.floor(Math.random() * (100 - 1)) + 1;
var random2 = Math.floor(Math.random() * (100 - 1)) + 1;

function generateProblem() {
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
        generateProblem();
    } else {
        document.getElementById('output').innerHTML = "Sorry. That is incorrect."
        document.getElementById('solution').value = "";
        generateProblem();
    }

}

/*    let solution = document.getElementById('solution').value;
    let feedBack;
  
    let answer = random1 + random2;
    if (solution == answer) {
        feedBack = "Correct! Good job!"
    } else {
        feedBack = "Sorry. That is incorrect."
    }
  
    document.getElementById('output').innerHTML = feedBack;
}
	
 */