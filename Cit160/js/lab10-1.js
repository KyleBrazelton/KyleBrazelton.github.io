window.onload = function curDate() {
    let today = new Date();
    let date = (today.getMonth() + 1) + " / " + today.getDate() + " / " + today.getFullYear();
    document.getElementById('currentdate').innerHTML = date;
}




function doInputOutput() {
    /*INPUT get temp and wind speed from user. 2 text fields. 
	/PROCESSING Call the second functiuon/store the value returned by windchill function in variable
	 f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
	/OUTPUT value returned by windchill*/
    let tempF = parseInt(document.getElementById('tempF').value);
    let speed = parseInt(document.getElementById('speed').value);
    let chillFactor = windChill(tempF, speed);
    document.getElementById('output').innerHTML = chillFactor;
}

function windChill(tempF, speed) {
    if (tempF < 50 && speed > 3) {
        let calculate = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
        return calculate.toFixed(0) + "&deg;" + "F";
    } else if (tempF >= 50 || speed <= 3) {
        return "NA";
    }
}