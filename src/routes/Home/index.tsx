import React from 'react';
import './index.scss';
import WeatherData from '../Temperature';

const baseClass="wa-application";

function Home() {
  return (
      <h1>Home</h1>
    // <WeatherData 
    //   cityName="Brisbane"
    //   countryCode="AU"
    //   units="metric" 
    // />
  );
}

export default Home;