window.onload = function curDate() {
    let today = new Date();
    let date =
        today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
    document.getElementById("currentdate").innerHTML = date;
};

//INPUT get the input from the array first and last
//PROCESSING add the first and last values in array to get a sum
//OUTPUT function returns the sum to user


function addEnds(list) {
    list = [5, 10, 15, 20, 25];
    let firstItem = list[0];
    let lastItem = list[list.length - 1];
    let addThem = firstItem + lastItem;
    document.getElementById("output").innerHTML = addThem;
    document.getElementById("showArray").innerHTML = list;
    return addThem;
}