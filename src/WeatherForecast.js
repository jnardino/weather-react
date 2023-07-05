import React from "react";

import WeatherIcon from "./WeatherIcon"
import axios from "axios";

export default function WeatherForecast(props) {
	function handleResponse() {
		console.log(props);
	}

	const APIKEY = "9e0fb79c2f66d0cd0dcf06710976a873";
	let lat = props.coordinates.lat;
	let lon = props.coordinates.lon;
	const APIURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`;
	axios.get(APIURL).then(handleResponse);

	return (
		<div className="col-2">
			<div className="week-forecast-day">Mon</div>
			<div className="week-forecast-icon weather-icon-small"><WeatherIcon image="01d"/></div>
			<div className="week-forecast-temp">
				<span className="temperature-cf-week max-temperature">
					<span className="value">20</span><sup className="unit">°</sup>
				</span>
				<span className="temperature-cf-week min-temperature">
					<span className="value">20</span><sup className="unit">°</sup>
				</span>
			</div>
		</div>
	);
}
