const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=76e8427ee980821ca30ae277072ddad5'
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x =>
            x.dt_txt.includes('18:00:00'));

        for (let i = 0; i < fivedayforecast.length; i++) {
            document.getElementById(`foreTemp${i+1}`).textContent = fivedayforecast[i].main.temp.toFixed(0) + 'F' + '\260';
            '';
            const imagesrc = `https://openweathermap.org/img/wn/` + fivedayforecast[i].weather[0].icon + `.png`;
            const iconW = fivedayforecast[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute(`alt`, iconW);

            const dayOfWeek = new Date(fivedayforecast[i].dt_txt);
            const daysOfTheWeek = new Array("SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT");
            document.getElementById(`day${i+1}`).textContent = daysOfTheWeek[dayOfWeek.getDay()];
        }
    });