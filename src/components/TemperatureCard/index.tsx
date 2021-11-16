import React from 'react';

import './index.scss'

interface TemperatureCardProps {
  dateTimeText?: string;
  weatherDescription?: string;
  temp?: number;
  minTemp?: number;
  maxTemp?: number;
  feelsLikeTemp?: number;
}

const TemperatureCard = ({dateTimeText, weatherDescription, temp, minTemp, maxTemp, feelsLikeTemp}: TemperatureCardProps) => {
  return (
    <div>
      <h3>{dateTimeText}</h3>
      <p>Description: {weatherDescription}</p>
      <p>Temp: {temp}</p>
      <p>Feels like: {minTemp}</p>
      <p>Min Temp: {maxTemp}</p>
      <p>Max Temp: {feelsLikeTemp}</p>
    </div>
  );
}

export default TemperatureCard;