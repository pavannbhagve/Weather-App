const apikey = "3b6d646bac08cdb1e28f9855d3c4a2ba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=delhi";

async function checkWeather() {

    const response = await fetch(apiUrl + `&appid=${apikey}`);
var data = await response.json();
    
}