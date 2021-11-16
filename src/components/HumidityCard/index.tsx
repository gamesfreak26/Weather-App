import React from "react";

import './index.scss'

const baseClass = 'wa-humidity-card'

interface HumidityCardProps {
  dateText: string;
  timeText: string;
  humidity: number;
}

const HumidityCard = ({dateText, timeText, humidity}: HumidityCardProps) => {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}__date`}>
        {dateText}
      </div>
      <div className={`${baseClass}__time`}>
        {timeText}
      </div>
      <div className={`${baseClass}__humidity`}>
        <div className={`${baseClass}__humidity--bold`}>Humidity: </div>
        <div>{humidity}%</div>
      </div>
    </div>
  );
}

export default HumidityCard;