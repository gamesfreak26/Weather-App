import React from 'react';

import './index.scss'

const baseClass="wa-temperature-card";

interface TemperatureCardProps {
  dateText?: string;
  timeText?: string;
  weatherDescription?: string;
  temp?: number;
  minTemp?: number;
  maxTemp?: number;
  feelsLikeTemp?: number;
}

const TemperatureCard = ({dateText, timeText, weatherDescription, temp, minTemp, maxTemp, feelsLikeTemp}: TemperatureCardProps) => {
  return (
    <div className={baseClass}>

      <div className={`${baseClass}__date`}>
        <div className={`${baseClass}__date--bold`}>Date: </div>
        <div>{dateText}</div>
      </div>
      <div className={`${baseClass}__time`}>
        <div className={`${baseClass}__time--bold`}>Time (24 HR): </div>
        <div>{timeText}</div>
      </div>
      <div className={`${baseClass}__weather-description`}>
        <div className={`${baseClass}__weather-description--bold`}>Description: </div> 
        <div>{weatherDescription}</div>
        {/* Add picture of weather description here */}
      </div>
      <div className={`${baseClass}__temp`}>
        <div className={`${baseClass}__temp--bold`}>Temp:</div>
        <div>{temp} {'\u2103'}</div>
      </div>
      <div className={`${baseClass}__feels-like`}>
        <div className={`${baseClass}__feels-like--bold`}>Feels like:</div>
        <div>{feelsLikeTemp} {'\u2103'}</div>
      </div>
      <div className={`${baseClass}__min-temp`}>
        <div className={`${baseClass}__min-temp--bold`}>Min Temp:</div>
        <div>{minTemp} {'\u2103'}</div>
      </div>

      <div className={`${baseClass}__max-temp`}>
        <div className={`${baseClass}__max-temp--bold`}>
          Max Temp:
        </div>
        <div>{maxTemp} {'\u2103'}</div>
      </div>
    </div>
  );
}

export default TemperatureCard;