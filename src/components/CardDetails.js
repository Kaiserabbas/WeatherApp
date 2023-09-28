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
    <div>
      <button onClick={handleBackClick}>Back</button> {/* Back button */}
      <h1>{city} Weather Details</h1>
      {weatherData && (
        <div>
          <p>
            <strong>Temperature:</strong> {weatherData.current.temp_c}°C
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
