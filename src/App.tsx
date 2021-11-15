import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  if (!process.env.REACT_APP_API_KEY) {
    console.log(`Cannot find REACT_APP_API_KEY key: ${process.env.REACT_APP_API_KEY}`);
  }
  
  const [data, setData] = useState('');

  useEffect(() => {

    const apiKey = process.env.REACT_APP_API_KEY;
    
    const getFetchUrl = () => {
      return 'https://api.openweathermap.org/data/2.5/forecast?q=Brisbane,AU&appid=' + apiKey +'&units=metric'
    }
    
    async function fetchData() {
      const result = await axios(getFetchUrl());
      console.log(result)
      setData(result.data);
    }
    
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
