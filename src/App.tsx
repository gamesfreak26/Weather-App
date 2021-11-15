import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

interface IWeatherDataProps {
  cnt?: number;
  cod?: string;
  list?: [];
  city: ICityProps;
}

interface ICityProps {
  country?: string
  id?: number
  name: string
  population?: number
  sunrise?: number
  sunset?: number
  timezone?: number
}

function App() {

  if (!process.env.REACT_APP_API_KEY) {
    console.log(`Cannot find REACT_APP_API_KEY key: ${process.env.REACT_APP_API_KEY}`);
  }
  
  const [responseData, setResponseData] = useState<IWeatherDataProps>();

  useEffect(() => {

    const apiKey = process.env.REACT_APP_API_KEY;
    
    const getFetchUrl = () => {
      return 'https://api.openweathermap.org/data/2.5/forecast?q=Brisbane,AU&appid=' + apiKey +'&units=metric'
    }
    
    async function fetchData() {
      const result = await axios(getFetchUrl());
      setResponseData(result.data);
    }
    
    fetchData();
  }, []);

  console.log(responseData)

  return (
    <div className="App">
      {responseData?.city.name}
    </div>
  );
}

export default App;
