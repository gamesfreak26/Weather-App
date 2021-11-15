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
    // TODO: Wrap in if responseData
    <div>
      <h1>{responseData?.city.name}</h1>
      <h2>{responseData?.city.country}</h2>

      <div>
        {responseData?.list[0].dt_txt}
      </div>

      <p>Description: {responseData?.list[0].weather[0].description}</p>

      <p>Temp: {responseData?.list[0].main.temp}</p>

      <p>Feels like: {responseData?.list[0].main.feels_like}</p>

      <p>Min Temp: {responseData?.list[0].main.temp_min}</p>

      <p>Max Temp: {responseData?.list[0].main.temp_max}</p>
    </div>
  );
}

export default WeatherData