import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './routes/Home'
import Humidity from './routes/Humidity';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import TemperatureData from './routes/Temperature';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/humidity">Humidity</Link>
        </li>
        <li>
          <Link to="/rainfall">Rainfall</Link>
        </li>
        <li>
          <Link to="/Temperature">Temperature</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/humidity" element={<Humidity cityName={'Brisbane'} countryCode={'AU'} units={'metric'} />} />
        <Route path="/temperature" element={<TemperatureData cityName={'Brisbane'} countryCode={'AU'} units={'metric'} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
