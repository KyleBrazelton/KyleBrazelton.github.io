//INPUT  Get input from computers clock. Including Holidays.
//PROCESSING  mon-fri not holidays =get up, other sleep in. Holidays fixed only
//OUTPUT display get up or sleep in depending on the day 

let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();

document.getElementById('thisDay').innerHTML = today;

if ((month == 0 && date == 1) || (month = 6 && date == 4) || (month == 11 && date == 25) || day == 6 || day == 0) {
    result = "Sleep In!";
} else {
    result = "Wake Up!";
}


document.getElementById('status').innerHTML = result;