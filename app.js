const inputBox = document.querySelector(".input-box");
const btn = document.getElementById("btn");
const descriptionBox = document.querySelector(".description-box");
const weatherImg = document.querySelector(".weatherImg");
const mainBody = document.querySelector(".main-body");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const percent = document.querySelector(".percent");
const speed = document.querySelector(".speed"); 
const weatherDetails = document.querySelector(".weather-details");
const tempreture = document.querySelector(".tempreture");
const locationError = document.querySelector(".location-error");


async function weatherReport(city){
    const api_key = "28cc61db4e0cf1584d58fd2ef181b2ab";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weatherInfo =await fetch(`${url}`).then(res => res.json())
    
    if(weatherInfo.cod === "404"){
           locationError.style.display="flex";
           mainBody.style.display="none";
           console.log("error");
           return; 
     }
     mainBody.style.display="flex";
     locationError.style.display="none";
    console.log(weatherInfo)
    tempreture.innerHTML = `${Math.round(weatherInfo.main.temp-273.15)}°C`
    description.innerHTML = weatherInfo.weather[0].description;
    percent.innerHTML = `${weatherInfo.main.humidity}% `;
    speed.innerHTML= `${weatherInfo.wind.speed} Km/hr `;

    switch(weatherInfo.weather[0].main){
        case 'Cloud':
            weatherImg.src = "./assets/cloud.png";
        case 'Clear':
                weatherImg.src = "./assets/clear.png";
        case 'Mist':
            weatherImg.src = "./assets/mist.png";
        case 'Rain':
            weatherImg.src = "./assets/rain.png"; 
         case 'Snow':
            weatherImg.src = "./assets/snow.png";    
    }

    
    

}
btn.addEventListener('click',()=>{
    weatherReport(inputBox.value);
 })