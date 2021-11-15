import React from 'react';
import './App.css';
import WeatherData from './components/Weather';

function App() {

  return (
    <div className="App">
      <WeatherData cityName="Brisbane" countryCode="AU" />
    </div>
  );
}

export default App;
