import React from "react";

import Signature from "./Signature";
import Header from "./Header";

export default function App() {
  return (
    <div className="app-box">
      <Header />
      <div className="city-name"></div>
      <div className="row gy-3 weather-now">
        <div className="col-6 col-md-4 city">
          <div className="temperature-cf main-temperature">
            <span className="value">30</span>
            <sup className="unit">{" "}°C</sup>
          </div>
          <span className="weather-description"></span>
          <div className="max-min">
            <span className="temperature-cf main-max-temperature">
              <span className="value">28</span>
              <sup className="unit">{" "}°C</sup>
            </span>
            <span>/</span>
            <span className="temperature-cf main-min-temperature">
              <span className="value">15</span>
              <sup className="unit">{" "}°C</sup>
            </span>
          </div>
        </div>
        <div className="col-6 col-md-4 weather-icon-big"></div>
        <div className="col-12 col-md-4 details">
          <span>
            <i className="fa-solid fa-temperature-three-quarters"></i>
            {" "}Feels like:
            <span className="temperature-cf feels-like">
              <span className="value">22</span>
              <sup className="unit">{" "}°C</sup>
            </span>
          </span>
          <span>
            <i className="fa-solid fa-wind"></i>
            {" "}Wind:
            <span className="wind">
              <span className="value">18</span>
              <span className="unit">{" "}m/s</span>
            </span>
          </span>
          <span>
            <i className="fa-solid fa-droplet"></i>
            {" "}Humidity:
            <span className="humidity">
              <span className="value">88</span>
              <span className="unit">{" "}%</span>
            </span>
          </span>
        </div>
      </div>
      <div className="six-day-forecast"></div>
      <Signature />
    </div>
  );
}
