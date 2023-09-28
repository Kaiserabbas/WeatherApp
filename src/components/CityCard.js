import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWeatherData, setError } from '../redux/weatherSlice';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const CityCard = ({ cities }) => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);
  const error = useSelector((state) => state.weather.error);

  const [searchText, setSearchText] = useState(''); // State for search input text
  const [filteredCities, setFilteredCities] = useState(cities);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    // Filter the cities based on the search input
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCities(filtered);
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
    <>
      <input
        type="text"
        placeholder="Search city"
        value={searchText}
        onChange={handleSearchChange}
        className='search'
      />
        <div className="cards">
      {filteredCities.map((city) => (
        <Card  className='card'
          key={city}
          style={{ width: '18rem', margin: '10px' }}
        >
          <Card.Body>
            <Card.Title className='title'><strong>{city}</strong> </Card.Title>
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
          <Link to={`/details/${city}`}>
             <button className='button'>Details</button>
          </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
      </>
  );
};

export default CityCard;
