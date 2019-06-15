// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//INPUT get integer input from user
//PROCESSING calculate odd int from 1 to user input number
//OUTPUT sum of all odd int between for user to see
function userInt() {
    let userInput = parseInt(document.getElementById('userInput').value);
    let sum = 0;
    for (let num = 1; num <= userInput; num++) {
        if (num % 2 != 0) sum += num;
    }

    let message = "1 - " + userInput + " (total sum of all the odd integers) is " + sum;
    let results = message;
    document.getElementById('output').innerHTML = results;
}