// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CityCard from './components/CityCard';
import './App.css';
import CardDetails from './components/CardDetails';

function App() {
const cities = [...new Set(['Dubai', 'Faisalabad', 'London', 'New York', 'Paris', 'Tokyo', 'Sydney', 'Mumbai', 'Beijing', 'Moscow', 'Berlin', 'Rome', 'Madrid', 'Cairo', 'Bangkok', 'Toronto', 'Los Angeles', 'Chicago', 'Rio de Janeiro', 'Amsterdam', 'Stockholm', 'Athens', 'Istanbul', 'Seoul', 'Jakarta', 'Lima', 'Nairobi', 'Mexico City', 'Hanoi', 'Copenhagen', 'Vienna', 'Brussels', 'Oslo', 'Helsinki', 'Dublin', 'Warsaw', 'Budapest', 'Prague', 'Lisbon', 'Zurich', 'Geneva', 'Barcelona', 'Milan', 'Venice', 'Florence', 'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Auckland', 'Wellington', 'Cape Town', 'Johannesburg', 'Durban', 'Marrakech', 'Casablanca', 'Cairo', 'Alexandria', 'Nairobi', 'Mombasa', 'Lagos', 'Accra', 'Nairobi', 'Dar es Salaam', 'Kigali', 'Kampala', 'Addis Ababa', 'Dakar', 'Abuja', 'Kinshasa', 'Luanda', 'Brazzaville', 'Lusaka', 'Harare', 'Gaborone', 'Windhoek', 'Maputo', 'Antananarivo', 'Port Louis', 'Victoria', 'Porto-Novo', 'Yaounde', 'Bamako', 'Djibouti', 'Asmara', 'Maseru', 'Lilongwe', 'Nouakchott', 'Niamey', 'Kigali', 'Dakar', 'Freetown', 'Mogadishu', 'Mbabane', 'Dodoma', 'Lome', 'Tunis', 'Khartoum', 'Lobamba', 'Pretoria', 'Abidjan', 'Bujumbura', 'Ouagadougou', 'Conakry', 'Monrovia'])];
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Weather App</h1>
          <Routes>
              <Route path="/" element={<CityCard cities={cities} />} />
              <Route path="/details/:city" element={<CardDetails />} />
            </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
