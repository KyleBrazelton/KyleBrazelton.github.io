const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5600363&units=imperial&APPID=76e8427ee980821ca30ae277072ddad5'
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector('#weatherRiggins');

        currentTemp.textContent = jsObject.main.temp.toFixed(0) + "°F";
    });