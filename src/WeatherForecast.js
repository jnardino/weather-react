import React, { useState } from "react";

import WeatherForecastDay from "./WeatherForecastDay"
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded (true);
	}

	if (loaded) {
		return (
			<div className="row week-forecast">
				{forecast.map(function(dailyForecast, index) {
					if (index <6) {
						return (
						<span key={index}>
							<WeatherForecastDay data={dailyForecast}/>
						</span>
						);
					}
				})}
			</div>
		);
	} else {
		const APIKEY = "9e0fb79c2f66d0cd0dcf06710976a873";
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		const APIURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`;
		axios.get(APIURL).then(handleResponse);

		return null;
	}
}
