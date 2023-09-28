import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWeatherData, setError } from './weatherSlice';
import axios from 'axios';

const WeatherFetcher = ({ city }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=d3a6c76b1169469aadd124504232309&q=${city}`
        );
        dispatch(setWeatherData(response.data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    fetchWeatherData();
  }, [city, dispatch]);

  return null;
};

export default WeatherFetcher;
