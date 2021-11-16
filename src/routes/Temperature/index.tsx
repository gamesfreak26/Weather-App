import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.scss'

import { IResponseData } from '../../interfaces/IReponseData';
import TemperatureCard from '../../components/TemperatureCard';
import TitleCard from '../../components/TitleCard';

const baseClass = 'wa-weater-data'

export interface TemperatureDataProps {
  cityName: string;
  countryCode: string;
  units: string;
}

const TemperatureData  = ({cityName, countryCode, units}: TemperatureDataProps) => {
  if (!process.env.REACT_APP_API_KEY) {
    console.log(`Cannot find REACT_APP_API_KEY key: ${process.env.REACT_APP_API_KEY}`);
  }
      
  const [responseData, setResponseData] = useState<IResponseData>();
  
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
        
    const getFetchUrl = () => {
      return `https://api.openweathermap.org/data/2.5/forecast?q=${
        encodeURIComponent(cityName)
      },${encodeURIComponent(countryCode)}&appid=${
        apiKey
      }&units=${encodeURIComponent(units)}`
    }
          
    async function fetchData() {
      const result = await axios(getFetchUrl());
      setResponseData(result.data);
    }
    
    fetchData();
  }, [cityName, countryCode, units]);

  return (    
    <div>
      <TitleCard cityName={responseData?.city.name} countryCode={responseData?.city.country} />

      {responseData && responseData.list.map(list => {

        let splitDateTimeText = list.dt_txt.split(' ');
        let splitDateText = splitDateTimeText[0].split('-')

        console.log(splitDateText);

        let date = `${splitDateText[2]}-${splitDateText[1]}-${splitDateText[0]}`
        console.log(date);

        return <div className={baseClass}>
          <TemperatureCard 
            dateText={date} 
            timeText={splitDateTimeText[1]}
            weatherDescription={list.weather[0].description} 
            temp={list.main.temp} 
            minTemp={list.main.feels_like} 
            maxTemp={list.main.temp_min} 
            feelsLikeTemp={list.main.temp_max} 
          />
        </div>
      })}
    </div>
  );
}

export default TemperatureData