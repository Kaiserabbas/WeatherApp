// weatherSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: {}, 
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setWeatherData, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
