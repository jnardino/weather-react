import React from "react";

import WeatherIcon from "./WeatherIcon"

export default function WeatherForecast() {
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
