import React from "react";

import Home from '../../routes/Home'
import Humidity from '../../routes/Humidity';

import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import TemperatureData from '../../routes/Temperature';

import './index.scss'
import { NavLink } from "react-router-dom";

const baseClass = 'wa-router-nav'



const RouterCard = () => {

  return(
    <div>
      <ul className={baseClass}>
        <li>
          <NavLink 
           to="/"
           className={({ isActive }) => `${baseClass}__link ` + (isActive ? `${baseClass}__link--active` : '') }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/humidity"
            className={({ isActive }) => `${baseClass}__link ` + (isActive ? `${baseClass}__link--active` : '') }
          >
            Humidity
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rainfall"
            className={({ isActive }) => `${baseClass}__link ` + (isActive ? `${baseClass}__link--active` : '') }
          >
            Rainfall
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/temperature"
            className={({ isActive }) => `${baseClass}__link ` + (isActive ? `${baseClass}__link--active` : '') }
          >
            Temperature
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/humidity" element={<Humidity cityName={'Brisbane'} countryCode={'AU'} units={'metric'} />} />
        <Route path="/temperature" element={<TemperatureData cityName={'Brisbane'} countryCode={'AU'} units={'metric'} />} />
      </Routes>
    </div>
  );
}

export default RouterCard;