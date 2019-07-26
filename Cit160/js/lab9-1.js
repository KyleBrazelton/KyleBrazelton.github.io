window.onload = function curDate() {
    let today = new Date();
    let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
    document.getElementById('currentdate').innerHTML = date;
}

//INPUT get user input from any integers 1-10 inclusive
//PROCESSING take number and apply it to a times table for that number
//OUTPUT times table for user input for user to see

function getTable() {
    let userPick = parseInt(document.getElementById("userPick").value);
    if (userPick > 10 || userPick < 1) {
        alert("Please choose a number between 1-10");
        return;
    }

    let table = "";
    for (let i = 1; i <= 12; i++) {
        let result = i * userPick;
        table += userPick + " x " + i + " = " + result + "<br>";
    }
    document.getElementById("output").innerHTML = table;
}