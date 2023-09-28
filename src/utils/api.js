// src/utils/api.js
import axios from 'axios';

export async function fetchCities() {
  try {
    const response = await axios.get('https://countriesnow.space/api/v0.1/countries/');
    const cities = response.data.data.reduce((acc, country) => {
      return [...acc, ...country.cities];
    }, []);
    return cities;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
}
