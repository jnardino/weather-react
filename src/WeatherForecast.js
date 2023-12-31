import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay"
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded (true);
	}

	useEffect (()=> {
		setLoaded(false);
	}, [props.coordinates]);

	if (loaded) {
		return (
			<div className="row week-forecast">
				{forecast.map(function(dailyForecast, index) {
					if (index < 6) {
						return <WeatherForecastDay key={index} data={dailyForecast} activeDelay={index * 30}/>;
					} else {
						return null;
					}
				})}
			</div>
		);
	} else {
		const APIKEY = "9e0fb79c2f66d0cd0dcf06710976a873";
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		const APIURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${props.unit}&appid=${APIKEY}`;
		axios.get(APIURL).then(handleResponse);

		return <div className="week-forecast-placeholder"></div>;
	}
}
