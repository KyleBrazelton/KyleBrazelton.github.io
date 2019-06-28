window.onload = function curDate() {
    let today = new Date();
    let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
    document.getElementById('currentdate').innerHTML = date;
}

//INPUT get weather input - hot rain snow cold
//PROCESSING match the weather to type of footwear appropriate
//OUTPUT show the proper footwear for the weather
function weatherFootFunction() {
    let winput = document.getElementById("winput").value;
    let footWear;

    if (winput == "hot") {
        footWear = "Sandals";
    } else if (winput == "rain") {
        footWear = "Galoshes";
    } else if (winput == "snow") {
        footWear = "Boots";
    } else if (winput == "cool") {
        footWear = "Shoes";
    }

    document.getElementById("foot").innerHTML = footWear;
}