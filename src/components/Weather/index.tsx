import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.scss'

interface IWeatherDataProps {
  cityName: string;
  countryCode: string;
  units?: string;
}

interface IResponseDataProps {
  cnt: number;
  cod: string;
  list: [];
  city: ICityProps;
}
  
interface ICityProps {
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

const WeatherData  = ({cityName, countryCode, units}: IWeatherDataProps) => {
  if (!process.env.REACT_APP_API_KEY) {
    console.log(`Cannot find REACT_APP_API_KEY key: ${process.env.REACT_APP_API_KEY}`);
  }
      
  const [responseData, setResponseData] = useState<IResponseDataProps>();
  
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
        
    const getFetchUrl = () => {
      return `https://api.openweathermap.org/data/2.5/forecast?q=${
        encodeURIComponent(cityName)
      },${encodeURIComponent(countryCode)}&appid=${apiKey}'&units=${units}`
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
    </div>
  );
}

export default WeatherData