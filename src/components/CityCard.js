import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, setError } from '../redux/weatherSlice';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardDetails from './CardDetails'; // Import the CardDetails component

const CityCard = ({ cities }) => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);
  const error = useSelector((state) => state.weather.error);

  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // State to store the selected city for the modal
  const [selectedCity, setSelectedCity] = useState(null);

  // Function to show the modal for a specific city
  const showCityModal = (city) => {
    setSelectedCity(city);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchWeatherDataForAllCities = async () => {
      try {
        const promises = cities.map((city) =>
          axios.get(
            `http://api.weatherapi.com/v1/current.json?key=d3a6c76b1169469aadd124504232309&q=${city}&lang=ur`
          )
        );

        const responses = await Promise.all(promises);

        const data = {};

        responses.forEach((response, index) => {
          data[cities[index]] = response.data;
        });

        dispatch(setWeatherData(data));
        dispatch(setError(null));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    fetchWeatherDataForAllCities();
  }, [cities, dispatch]);

  return (
    <div className="cards">
      {cities.map((city) => (
        <Card  className='card'
          key={city}
          style={{ width: '18rem', margin: '10px' }}
          onClick={() => showCityModal(city)} 
        >
          <Card.Body>
            <Card.Title><strong>{city}</strong> </Card.Title>
            {error ? (
              <div>Error: {error}</div>
            ) : (
              <div>
                {weatherData[city] && (
                  <div>
                    <div> {weatherData[city].location.country} </div>
                    <div>
                    {weatherData[city].current.temp_c}°C
                    </div>
                    <div className='text'>
                    {weatherData[city].current.condition.text}
                    </div>
                    <img src={weatherData[city].current.condition.icon} alt="Weather icon" />
                  </div>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
      ))}

      <CardDetails
        city={selectedCity}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};

export default CityCard;
