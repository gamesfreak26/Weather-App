import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.scss'

import { IWeatherDataProps } from './interfaces/IWeatherDataProps';
import { IResponseDataProps } from './interfaces/IReponseDataProps';

const WeatherData  = ({cityName, countryCode, units}: IWeatherDataProps) => {
  if (!process.env.REACT_APP_API_KEY) {
    console.log(`Cannot find REACT_APP_API_KEY key: ${process.env.REACT_APP_API_KEY}`);
  }
      
  const [responseData, setResponseData] = useState<IResponseDataProps>();
  
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
        
    const getFetchUrl = () => {
      return `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${apiKey}&units=${units}`
    }
          
    async function fetchData() {
      const result = await axios(getFetchUrl());
      setResponseData(result.data);
    }
    
    fetchData();
  }, [cityName, countryCode, units]);
    
  console.log(responseData)

  return (
    <div>
      <h1>{responseData?.city.name}</h1>
      <h2>{responseData?.city.country}</h2>

      <div>
        {responseData?.list[1].dt_txt}
      </div>

    </div>
  );
}

export default WeatherData