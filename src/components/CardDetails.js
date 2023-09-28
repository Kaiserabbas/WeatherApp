// src/components/CardDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

const CardDetails = () => {
  const { city } = useParams();
  const weatherData = useSelector((state) => state.weather.weatherData[city]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle back button click
  const handleBackClick = () => {
    navigate('/'); // Navigate back to the main page
  };

  return (
    <div className='details'>
      <div onClick={handleBackClick} className='back'>  {"<"} </div> {/* Back button */}
      <h1>{city} Weather Details</h1>
      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <h3>{weatherData.location.country}</h3>
          <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
          <p>{weatherData.current.condition.text}</p>
          <h3 className='time'>{weatherData.location.localtime}</h3>
          <p>
            <strong>Temperature:</strong> {weatherData.current.temp_c}°C
          </p>
          <p>
            <strong>Feels like:</strong> {weatherData.current.feelslike_c}°C
          </p>
          <p>
            <strong>Rain:</strong> {weatherData.current.precip_mm} mm
          </p>
          <p>
            <strong> UV radiation:</strong> {weatherData.current.uv} mW/cm2
          </p>
          <p>
            <strong>Clouds:</strong> {weatherData.current.cloud} %
          </p>
          <p>
            <strong>Wind:</strong> {weatherData.current.wind_kph} km/h
          </p>
          <p>
            <strong>Humidity:</strong> {weatherData.current.humidity}%
          </p>
          <p>
            <strong>Visibility:</strong> {weatherData.current.vis_km} km
          </p>
          <p>
            <strong>Pressure:</strong> {weatherData.current.pressure_mb} mb
          </p>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
