import React, { useState } from 'react';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '6cc193ae0db27e2a9e9f12486695316a';

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-600">
      <h1 className="text-4xl text-white font-bold mb-5">Weather App</h1>
      <form onSubmit={fetchWeather} className="mb-5">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="p-2 rounded-l-md border border-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button type="submit" className="bg-white text-blue-500 font-bold p-2 rounded-r-md hover:bg-gray-300">
          Search
        </button>
      </form>

      {weatherData && (
        <div className="bg-white rounded-lg shadow-lg p-5 text-center">
          <WeatherInfo
            city={weatherData.name}
            temperature={weatherData.main.temp}
            feelsLike={weatherData.main.feels_like}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            icon={weatherData.weather[0].icon}
          />
        </div>
      )}
    </div>
  );
};

export default App;
