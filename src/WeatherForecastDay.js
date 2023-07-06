import React from "react";

import WeatherIcon from "./WeatherIcon"

export default function WeatherForecastDay(props) {

	function day() {
		let date = new Date(props.data.dt * 1000);
		let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let day = date.getDay();

		return weekDays[day];
	}

	return (
		<div className="col-2">
			<div className="week-forecast-day">{day()}</div>
			<div className="week-forecast-icon"><WeatherIcon image={props.data.weather[0].icon}/></div>
			<div className="week-forecast-temp">
				<span className="temperature-cf-week max-temperature">
					<span className="value">{Math.round(props.data.temp.max)}</span><sup className="unit">°</sup>
				</span>
				<span className="temperature-cf-week min-temperature">
					<span className="value">{Math.round(props.data.temp.min)}</span><sup className="unit">°</sup>
				</span>
			</div>
		</div>
	);
}
