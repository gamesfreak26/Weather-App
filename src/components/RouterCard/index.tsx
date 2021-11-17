import React from "react";

import Home from '../../routes/Home'
import Humidity from '../../routes/Humidity';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation
} from "react-router-dom";

import TemperatureData from '../../routes/Temperature';

import './index.scss'
import { NavLink } from "react-router-dom";

const baseClass = 'wa-router-nav'



const RouterCard = () => {

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return(
    <div>
      <ul className={baseClass}>
        <li>
          <NavLink 
           to="/"
           className={({ isActive }) => `${baseClass}__link ` + (isActive ? `${baseClass}__link--active` : '') }
          //  className={splitLocation[1] === "" ? `${baseClass}__link ${baseClass}__link--active` : `${baseClass}__link`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/humidity"
            className={({ isActive }) => `${baseClass}__link ` + (isActive ? `${baseClass}__link--active` : '') }
            // className={splitLocation[1] === "humidity" ? `${baseClass}__link ${baseClass}__link--active` : `${baseClass}__link`}
          >
            Humidity
          </NavLink>
        </li>
        {/* <li className={splitLocation[1] === "rainfall" ? `${baseClass}__link--active` : ""}>
          <NavLink to="/rainfall">Rainfall</NavLink>
        </li> */}
        <li>
          <NavLink 
            to="/temperature"
            // className={splitLocation[1] === "temperature" ? `${baseClass}__link ${baseClass}__link--active` : `${baseClass}__link`}
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