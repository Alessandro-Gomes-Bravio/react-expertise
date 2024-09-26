import React from 'react';

const WeatherInfo = ({ city, temperature, feelsLike, humidity, windSpeed, icon }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">{city}</h2>
      <img
        src={iconUrl}
        alt="Weather icon"
        className="my-4 w-24 h-24 border border-black-300 rounded-lg shadow-lg p-2 bg-white"
      />
      <p className="text-lg text-gray-700">Temperature: <span className="font-semibold">{temperature}°C</span></p>
      <p className="text-lg text-gray-700">Feels Like: <span className="font-semibold">{feelsLike}°C</span></p>
      <p className="text-lg text-gray-700">Humidity: <span className="font-semibold">{humidity}%</span></p>
      <p className="text-lg text-gray-700">Wind Speed: <span className="font-semibold">{windSpeed} m/s</span></p>
    </div>
  );
};

export default WeatherInfo;
