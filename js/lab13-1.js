window.onload = function curDate() {
    let today = new Date();
    let date =
        today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
    document.getElementById("currentdate").innerHTML = date;
};

//INPUT get the input from the array 
//PROCESSING calculate the evens from the array
//OUTPUT function returns the sum to user

function doTest() {
    let numbers = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
    ];
    document.getElementById("showArray").innerHTML = numbers;
    document.getElementById("output").innerHTML = countEvens(numbers);;
}

function countEvens(numbers) {
    let even = 0;
    for (let num = 0; num <= numbers.length; num++) {
        if (numbers[num] % 2 == 0) {
            even++;
        }
    }
    return even;
}