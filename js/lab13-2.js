window.onload = function curDate() {
    let today = new Date();
    let date =
        today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
    document.getElementById("currentdate").innerHTML = date;
};

//INPUT get the input from the array 
//PROCESSING calculate the muliplier to the array
//OUTPUT function returns the sum to user

function doTest() {
    let numbers = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
    ];
    let multiplier = Math.floor(Math.random() * 11);
    document.getElementById('showArray').innerHTML = numbers;
    document.getElementById('showMult').innerHTML = "Multiplier = " + multiplier;
    document.getElementById('output').innerHTML = multiply(numbers, multiplier);
}

function multiply(numbers, multiplier) {
    let answer = "";
    for (num = 0; num < numbers.length; num++) {
        let total = numbers[num] * multiplier;
        answer += total + ", ";
    }
    return answer;
}