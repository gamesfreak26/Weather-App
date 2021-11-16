import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.scss'

import { IResponseData } from './interfaces/IReponseData';
import TemperatureCard from '../TemperatureCard';

export interface IWeatherDataProps {
  cityName: string;
  countryCode: string;
  units?: string;
}

const WeatherData  = ({cityName, countryCode, units}: IWeatherDataProps) => {
  if (!process.env.REACT_APP_API_KEY) {
    console.log(`Cannot find REACT_APP_API_KEY key: ${process.env.REACT_APP_API_KEY}`);
  }
      
  const [responseData, setResponseData] = useState<IResponseData>();
  
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

      {responseData?.list.map(list => {
        return <TemperatureCard 
          dateTimeText={list.dt_txt} 
          weatherDescription={list.weather[0].description} 
          temp={list.main.temp} 
          minTemp={list.main.feels_like} 
          maxTemp={list.main.temp_min} 
          feelsLikeTemp={list.main.temp_max} 
        />
      })}


      
    </div>
  );
}

export default WeatherData