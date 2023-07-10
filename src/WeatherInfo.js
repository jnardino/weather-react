import React from "react";

import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"

export default function WeatherInfo(props) {
	const unitText = () => {
		return props.unitInfo === "metric" ? "°C" : "°F";
	}

	return (
		<div>
			<h1><FormattedDate/></h1>
			<div className="city-name">{props.apiInfo.city} - {props.apiInfo.country}</div>
			<div className="row gy-3 weather-now">
				<div className="col-6 col-md-4 city">
					<div className="temperature-cf main-temperature">
						<span className="value">{Math.round(props.apiInfo.temperature)}</span>
						<sup className="unit">{" "}{unitText()}</sup>
					</div>
					<span className="weather-description">{props.apiInfo.description}</span>
					<div className="max-min">
						<span className="temperature-cf main-max-temperature">
							<span className="value">{Math.round(props.apiInfo.temperatureMax)}</span>
							<sup className="unit">{" "}{unitText()}</sup>
						</span>
						<span>{" "}</span>
						<span className="temperature-cf main-min-temperature">
							<span className="value">{Math.round(props.apiInfo.temperatureMin)}</span>
							<sup className="unit">{" "}{unitText()}</sup>
						</span>
					</div>
				</div>
				<div className="col-6 col-md-4 weather-icon-big">
					<WeatherIcon image={props.apiInfo.icon}/>
				</div>
				<div className="col-12 col-md-4 details">
					<span>
						<i className="fa-solid fa-temperature-three-quarters"></i>
						{" "}Feels like:
						<span className="temperature-cf feels-like">
							<span className="value">{" "}{Math.round(props.apiInfo.realFeel)}</span>
							<sup className="unit">{" "}{unitText()}</sup>
						</span>
					</span>
					<span>
						<i className="fa-solid fa-wind"></i>
						{" "}Wind:
						<span className="wind">
							<span className="value">{" "}{Math.round(props.apiInfo.wind)}</span>
							<span className="unit">{" "}m/s</span>
						</span>
					</span>
					<span>
						<i className="fa-solid fa-droplet"></i>
						{" "}Humidity:
						<span className="humidity">
							<span className="value">{" "}{Math.round(props.apiInfo.humidity)}</span>
							<span className="unit">{" "}%</span>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}
