import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

const CardDetails = ({ city, show, onHide }) => {
  const weatherData = useSelector((state) => state.weather.weatherData[city]);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{city} Weather Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  );
};

export default CardDetails;
