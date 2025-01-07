# Weather App with Multiple APIs

This project is a weather application that integrates several APIs to provide a comprehensive and user-friendly experience. It fetches real-time weather data, displays relevant news, and presents interesting facts about the city or country.

## Features

- **Weather Information**: Fetches real-time weather data (temperature, humidity, wind speed, etc.) using the [OpenWeatherAPI](https://openweathermap.org/api).
- **Geolocation and Mapping**: Displays the location of cities on a map using coordinates (latitude, longitude).
- **News**: Displays top headlines related to the selected city or country using the [News API](https://newsapi.org/).
- **Trivia/Fact**: Shows facts about country using a trivia or fact API [World Global Country API](https://continentl.com/).

## Requirements

- Node.js
- A browser to run the frontend
- API keys for the services used (OpenWeatherAPI, NewsAPI, Trivia API)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/V0LT0R/assigment2_API
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000).

3. Enter the name of a city, and the application will display:
   - Current weather data (temperature, humidity, wind speed, etc.)
   - A map showing the city's location
   - News related to the city or country
   - Interesting facts about the city or country

## Project Structure

- `index.html`: The main HTML file containing the structure of the application.
- `styles.css`: The CSS file for styling the application.
- `app.js`: The main JavaScript file containing all the logic for fetching and displaying data from APIs.
- `server.js`: The Node.js server running on port 3000, handling API requests and serving the frontend.

## Dependencies

- **express**: A fast and minimalist web framework for Node.js.
- **node-fetch**: A lightweight module to make HTTP requests from the server side.
- **leaflet**: A leading open-source JavaScript library for mobile-friendly interactive maps.

## API Usage

- **OpenWeatherAPI**: Provides real-time weather data based on city names. You can get your API key [here](https://openweathermap.org/api).
- **NewsAPI**: Fetches the top headlines for a particular city or country. You can obtain an API key [here](https://newsapi.org/).
- **Trivia API**: Provides facts about cities or countries. For example, the [here](https://continentl.com/) can be used.

## Made by
Biloshchytskyi Yevhenii, Batyr Nursaya.
