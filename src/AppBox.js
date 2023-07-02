import React from "react";

import axios from "axios";
import Signature from "./Signature";

export default function App() {
	const APIKEY = "9e0fb79c2f66d0cd0dcf06710976a873";
	const APIURL = "https://api.openweathermap.org/data/2.5/"



  return (
    <div className="app-box">
      	<header>
			<div className="row">
				<div className="col-10 search">
				<form className="input-group">
					<button
					className="btn btn-outline-secondary location-icon"
					type="button"
					>
					<i className="fa-solid fa-location-dot"></i>
					</button>
					<input
					type="text"
					className="form-control search-bar"
					placeholder="Enter a city..."
					/>
					<button
					className="btn btn-outline-secondary search-icon"
					type="submit"
					>
					<i className="fa-solid fa-magnifying-glass"></i>
					</button>
				</form>
				</div>
				<div className="col-2 temperature-unit">
				<button
					className="btn btn-outline-secondary temperature-unit-icon"
					type="button"
				>
					°F
				</button>
				</div>
			</div>
			<h1>Vancouver - Canada</h1>
    	</header>
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
            <span>{" "}/{" "}</span>
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
              <span className="value">{" "}22</span>
              <sup className="unit">{" "}°C</sup>
            </span>
          </span>
          <span>
            <i className="fa-solid fa-wind"></i>
            {" "}Wind:
            <span className="wind">
              <span className="value">{" "}18</span>
              <span className="unit">{" "}m/s</span>
            </span>
          </span>
          <span>
            <i className="fa-solid fa-droplet"></i>
            {" "}Humidity:
            <span className="humidity">
              <span className="value">{" "}88</span>
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
