window.onload = function getDate() {
    let date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var curMonth = month[date.getMonth()];

    var curDay = weekday[date.getDay()];
    let strDate = curDay + ", " + date.getDate() + " " + curMonth + " " + date.getFullYear();
    document.getElementById("currentDate").innerHTML = strDate;
}

function announce() {
    let day = new Date();
    let today = day.getDay();
    if (today == 5) {
        document.getElementById("satPancake").style.display = "block";
    }
}