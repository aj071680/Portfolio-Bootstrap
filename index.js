const api = {
    key: "8c8785a5e727aa240cbb3fb6c087b5ae",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
// $(document).ready(function() {
//     $("#getWeatherForcast").click(function(){
//         let city = $("#city").val();
//         let key ='8c8785a5e727aa240cbb3fb6c087b5ae';

//         $.ajax({
//             url: 'http://api.openweathermap.org/data/2.5/weather',
//             dataType: 'jason',
//             type: 'GET',
//             data: {q=city, appid: key, units: 'metric'},

//             success: function(data){
//                 let wf = '';
//                 $.each(data.weather, function(index, val){
//                     wf += '<p><b>' + data.name + "</b> src="+ val.icon + ".png></p>"+
//                     data.main.temp + '&deg; C ' + ' | ' + val.main + ", " + val.description
//                 });
//             }
//         });
//     });
// });

// const api = {
//     key:"8c8785a5e727aa240cbb3fb6c087b5ae",
//     baseurl: "https://api.openweathermap.org/data/2.5/"
// }
//  const searchbox = document.querySelector('.search-box');
//  searchbox.addEventListener('keypress', setQuery);
 
//  function setQuery(evt) {
//      if (evt.keyCode == 13) {
//          getResults(searchbox.value);
      
//      }
//  }

//  function getResults (query) {
//      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//      .then(weather => {
//          return weather.jason();
//      }).then(displayResults);
//  }

//  function displayResults (weather) {
    
//      let city = document.querySelector('.location .city');
//      city.innerText = `${weather.name}, ${weather.sys.country}`;

//      let now = new Date();
//      let date = document.querySelector('.location .date');
//      date.innerText = dateBuilder(now);

//      let temp = document.querySelector('.current .temp');
//      temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

//      let weather_el = document.querySelector('.current .weather');
//      weather_el.innerText = weather.weather[0].main;

//      let hilow = document.querySelector('.hi-low');
//      hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;
//  }

//  function dateBuilder (d) {
//     let months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
//     "Friday", "Saturday"];
//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`;
//  }
 
// const url = (location) => 
// `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

// async function getWeatherByLocation(location) {
//     const resp = await fetch(url(location), {
//     origin: "cors" });
//     const respData = await resp.jason();

//     console.log(respData);

// }
// getWeatherByLocation("Singapore");







// const iconElement = document.querySelector(".weater-icon");
// const tempElement = document.querySelector(".temperature-value p");
// const descElement = document.querySelector(".temperature-description p");
// const locationElement = document.querySelector(".location p");
// const notificationElement = document.querySelector(".notification");

// const weather = {};

// weather.temperature = {
//     unit : "celsius"
// }

// const KELVIN = 273;
// const key = "8c8785a5e727aa240cbb3fb6c087b5ae";

// if('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// } else {
//     notificationElement.style.display ="block";
//     notificationElement.innerHTML = "<p> Browser doesn't Support Geolocation </p>";
// }

// function setPosition(position) {
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;

//     getWeather (latitude, longitude);
// }

// function showError(error) {
//     notificationElement.style.display ="block";
//     notificationElement.innerHTML = `<p>${error.message}</p>`;
// }

// function getWeather(latitude, longitude) {
//     let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
//  consol
// }

// fetch(api)
// .then(function(response){
//     let data = response.json();
//     return data;
// })
// .then(function(data){
//     weather.temperature.value = Math.floor(data.main.temp - KELVIN);
//     weather.description = data.weather[0].description;
//     // weather.iconId = data.weather[0].icon;
//     weather.city = data.name;
//     weather.country = data.sys.country;

// })
// .then(function(){
//     displayWeather();
// });


// function displayWeather(){
// // iconElement.innerHTML = `<img src="icons/${weather.iconId}.png" />`;
// tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
// descElement.innerHTML = weater.description;
// locationElement.innerHTML = `${weather.city}, ${weather.country}`;

// }
// function celciusToFahrenheit(temperature) {
// return (temperature * 9/5) + 32;

// }
