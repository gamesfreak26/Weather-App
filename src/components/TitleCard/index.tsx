import React from "react";

import './index.scss'

const baseClass = 'wa-title-card'

interface TitleCardProps {
  cityName?: string;
  stateCode?: string;
  countryCode?: string;
}

const TitleCard = ({cityName, stateCode, countryCode}: TitleCardProps) => {
  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}__city-name`}>{cityName}</h1>
      <h2 className={`${baseClass}__state-country-code`}>{stateCode} {countryCode}</h2>
    </div>
  );
}

export default TitleCard;