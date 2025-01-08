const weatherDataContainer = document.getElementById("weather-data");
const mapContainer = document.getElementById("map-container");
const additionalInfoContainer = document.getElementById("additional-info");
const trivialInfoContainer = document.getElementById("trivia-info");
const headerText = document.getElementById("header_text") 

const openWeatherApiKey = "0bdeff48e29ba2ed32dfff8d7fb59db9";
const continentlTriviaApiKey = "sk-ou3O677da5dac035d494";
const newsapiApiKey = "841bbf6d69a24cb6a7fdbb01d5c6b081";

async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`
        );
        const data = await response.json();
        displayWeather(data);
        
        displayMap(data.coord.lat, data.coord.lon);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayWeather(data) {

    console.log(data); 
    const weatherHTML = `
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
        <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        <p><strong>Country:</strong> ${data.sys.country}</p>
        <p><strong>Longtitude:</strong> ${data.coord.lon} m/s</p>
        <p><strong>Latitude:</strong> ${data.coord.lat}</p>
        <p><strong>Rain Volume:</strong> ${data.rain["1h"]}</p>

    `;
    weatherDataContainer.innerHTML = weatherHTML;
}

function displayMap(lat, lon) {
    // if (!L) {
    //     console.error("Leaflet is not loaded. Please include the library.");
    //     return;
    // }
    const map = L.map(mapContainer).setView([lat, lon], 13);
    L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`).addTo(map);
    L.marker([lat, lon]).addTo(map).bindPopup("City Location").openPopup();
}


async function fetchAdditionalData(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`
    );
    const data_weather = await response.json();
    try {
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?q=${data_weather.sys.country}&apiKey=${newsapiApiKey}`
            );
            // console.log(data_weather.sys.country);
            const data = await response.json();
            displayAdditionalInfo(data);
    } catch (error) {
        console.error("Error fetching additional API data:", error);
    }
}


function displayAdditionalInfo(data) {
    // console.log(data)
    if (!data.articles || data.articles.length === 0) {
        additionalInfoContainer.innerHTML = "<p>No news available.</p>";
        return;
    }
    const newsHTML = data.articles.slice(0, 5).map(article => `
        <div>
            <h4>${article.title}</h4>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </div>
    `).join("");
    additionalInfoContainer.innerHTML = newsHTML;
}
async function fetchTriviaData(city) {
    try {
        const response = await fetch(
            `https://continentl.com/api/country-list?key=${continentlTriviaApiKey}`
        );
        const data = await response.json();
        const response_weather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`
        );
        const data_weather = await response_weather.json();
        displayTriviaInfo(data, data_weather);
    } catch (error) {
        console.error("Error fetching trivia data:", error);
    }
}

function displayTriviaInfo(data, data_weather) {
    for (let cntr in data){

        if (data[cntr].code == data_weather.sys.country) {
            console.log(data[cntr]); 
            const triviaHTML = `
                <p><strong>Official language:</strong> ${data[cntr].official_language}</p>
                <p><strong>Capital:</strong> ${data[cntr].capital}</p>
                <p><strong>Region:</strong> ${data[cntr].region}</p>
            `;
            trivialInfoContainer.innerHTML += triviaHTML;   
            
            
        }
    }
}



// Initialize application
function init() {
    const defaultCity = "Paris"; // Replace with user input if needed
    fetchWeather(defaultCity);
    fetchAdditionalData(defaultCity);
    fetchTriviaData(defaultCity);
    headerText.innerHTML += `Weather And Information Of The City Of ${defaultCity}`
}

init();
