const townshipP = document.getElementById('township').textContent;
let townIDP = '0';
switch (townshipP) {
    case `Preston, Idaho`:
        townIDP = "5604473";
        break;
    case `Soda Springs, Idaho`:
        townIDP = "5607916";
        break;
    case `Fish Haven, Idaho`:
        townIDP = "5585000";
        break;
}

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=' + townIDP + '&units=imperial&APPID=76e8427ee980821ca30ae277072ddad5'
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const condition = document.querySelector('#condition');
        const currentTemp = document.querySelector('#current-temp');
        const highTemp = document.querySelector('#windT');
        const windSpeed = document.querySelector('#windS');
        const humidity = document.querySelector('#humidity');

        condition.textContent = jsObject.weather[0].main;
        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        highTemp.textContent = jsObject.main.temp_max.toFixed(0);
        windSpeed.textContent = jsObject.wind.speed.toFixed(0);
        humidity.textContent = jsObject.main.humidity.toFixed(0);

        let wChill = 0;
        const t = jsObject.main.temp;
        const s = jsObject.wind.speed;
        if (t < 50 && s > 3) {
            wChill = (35.74 + (0.6215 * t) - 35.75 * Math.pow(s, .16) + (.4275 * t * Math.pow(s, .16))).toFixed(0) + "°F";
        } else {
            wChill = " N/A"
        }
        document.getElementById(`windChill`).textContent = wChill;
    });