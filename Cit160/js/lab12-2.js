window.onload = function curDate() {
        let today = new Date();
        let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
        document.getElementById('currentdate').innerHTML = date;
    }
    //INPUT get the input from the array first and last
    //PROCESSING add the first and last values in array to get a sum
    //OUTPUT function returns the sum to user



function getMiddle(list) {
    list = [5, 10, 15, 20, 25, 30];
    let answer = 0;
    numLength = list.length;
    if (numLength % 2 === 0) { //even length array (two middle elements)
        answer = (list[numLength / 2 - 1] + list[numLength / 2]) / 2;
    } else { // odd length array (middle elements)
        answer = list[(numLength - 1) / 2];
    }
    document.getElementById("output").innerHTML = list;
    document.getElementById("showArray").innerHTML = answer;
    return answer;
}

function getMiddleOdd(list) {
    list = [5, 10, 15, 20, 25];
    let answer = 0;
    numLength = list.length;
    if (numLength % 2 === 0) { //even length array (two middle elements)
        answer = (list[numLength / 2 - 1] + list[numLength / 2]) / 2;
    } else { // odd length array (middle elements)
        answer = list[(numLength - 1) / 2];
    }
    document.getElementById("output").innerHTML = list;
    document.getElementById("showArray").innerHTML = answer;
    return answer;
}