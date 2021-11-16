import axios from "axios";
import React, { useEffect, useState } from "react";
import HumidityCard from "../../components/HumidityCard";
import { IResponseData } from "../../interfaces/IReponseData";

import './index.scss'

const baseClass = 'wa-humidity-route'

interface HumidityProps {
    cityName: string
    countryCode: string
    units: string
}

const Humidity = ({cityName, countryCode, units}: HumidityProps) => {

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


    console.log(responseData)

    return (
      <div className={baseClass}>
        <h1>Humidity</h1>
        {responseData && responseData.list.map(list => {

          let splitDateTimeText = list.dt_txt.split(' ');
          let time = splitDateTimeText[1];
          let splitDateText = splitDateTimeText[0].split('-');

          let date = `${splitDateText[2]}-${splitDateText[1]}-${splitDateText[0]}`;

          // TODO
          return <HumidityCard 
            dateText={date} 
            timeText={time} 
            humidity={list.main.humidity} 
          />
        })}
      </div>
    );
}

export default Humidity