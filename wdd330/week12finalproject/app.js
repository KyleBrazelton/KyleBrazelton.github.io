const icon = document.querySelector(".weatherImg");
const tempElement = document.querySelector(".temp-value p");
const descElement = document.querySelector(".temp-info p");
const locationElement = document.querySelector(".location p");
const notiElement = document.querySelector(".noti");

// App data
const weather = {};

weather.temp = {
    unit : "celsius"
}

// kelvin
const KELVIN = 273;
// api
const key = "76e8427ee980821ca30ae277072ddad5";

// browser support
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notiElement.style.display = "block";
    notiElement.innerHTML = "<p>Browser does not support location</p>";
}

// location
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// error
function showError(error){
    notiElement.style.display = "block";
    notiElement.innerHTML = `<p> ${error.message} </p>`;
}

// api
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
   
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temp.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// display
function displayWeather(){
    icon.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temp.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// convert
function celtoF(temp){
    return (temp * 9/5) + 32;
}

// on click
tempElement.addEventListener("click", function(){
    if(weather.temp.value === undefined) return;
    
    if(weather.temp.unit == "celsius"){
        let fahr = celtoF(weather.temp.value);
        fahr = Math.floor(fahr);
        
        tempElement.innerHTML = `${fahr}°<span>F</span>`;
        weather.temp.unit = "fahr";
    }else{
        tempElement.innerHTML = `${weather.temp.value}°<span>C</span>`;
        weather.temp.unit = "celsius"
    }
});
