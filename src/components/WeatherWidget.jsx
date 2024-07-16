import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '858cb622a8b44820a71100659240907';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather('Delhi');
  }, []);

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: location,
        }
      });
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div className="weather-widget p-4 bg-blue-500 text-white rounded-lg shadow-lg lg:w-1/3">
      <h2 className="text-2xl font-bold mb-4">Weather</h2>
      <div className="text-center">
        <h3 className="text-xl mb-2">{weather.location.name}</h3>
        <p className="text-lg mb-1">{weather.current.condition.text}</p>
        <p className="text-2xl font-semibold mb-2">{weather.current.temp_c}°C</p>
        <p className="text-md">Humidity: {weather.current.humidity}%</p>
        <p className="text-md">Wind: {weather.current.wind_kph} kph</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
