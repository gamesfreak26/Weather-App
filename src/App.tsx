import React from 'react';
import './App.scss';
import WeatherData from './components/Weather';

function App() {
  return (
      <WeatherData 
        cityName="Brisbane"
        countryCode="AU"
        units="metric" 
      />
  );
}

export default App;
