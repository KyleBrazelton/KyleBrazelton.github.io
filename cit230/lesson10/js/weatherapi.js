const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=76e8427ee980821ca30ae277072ddad5'
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector('#current-temp');
        const weatherIcon = document.querySelector('#imagesrc');

        currentTemp.textContent = jsObject.main.temp;

        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);



    });