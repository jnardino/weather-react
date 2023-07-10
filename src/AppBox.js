import React, { useState, useEffect } from "react";

import axios from "axios";
import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast"
import Signature from "./Signature";

export default function AppBox(props) {
	const [weatherData, setweatherData] = useState({ready: false});
	const [city, setCity] = useState(props.defaultCity);
	const [unit, setUnit] = useState("metric");
	// const [geoPosition, setGeoPosition] = useState(null);

	// function setGeoLocation() {
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		setGeoPosition({lat: position.coords.latitude, lon: position.coords.longitude});
	// 	});
	// }

	function search() {
		const APIKEY = "9e0fb79c2f66d0cd0dcf06710976a873";
		// const APIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${geoPosition.lat}&lon=${geoPosition.lon}&units=${unit}&appid=${APIKEY}`
		const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${unit}`
		axios.get(APIURL).then((response) => {
			setweatherData({
				ready: true,
				city: response.data.name,
				country: response.data.sys.country,
				temperature: response.data.main.temp,
				temperatureMax: response.data.main.temp_max,
				temperatureMin: response.data.main.temp_min,
				description: response.data.weather[0].description,
				icon: response.data.weather[0].icon,
				realFeel: response.data.main.feels_like,
				wind: response.data.wind.speed,
				humidity: response.data.main.humidity,
				coordinates: response.data.coord
			});
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	function convertUnit(event) {
		event.preventDefault();
		setUnit(unit === "metric" ? "imperial" : "metric");
	}

	useEffect (()=> {
		search();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [unit /*, geoPosition */]);

	if (weatherData.ready) {
		return (
			<div className="app-box">
				<header>
					<div className="row">
						<div className="col-10 search">
							<form className="input-group" onSubmit={handleSubmit}>
								<button className="btn btn-outline-secondary location-icon" type="button" /*onClick={setGeoLocation}*/>
									<i className="fa-solid fa-location-dot"></i>
								</button>
								<input type="text" className="form-control search-bar" placeholder="Enter a city..." onChange={handleCityChange}/>
								<button	className="btn btn-outline-secondary search-icon" type="submit">
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
							</form>
						</div>
						<div className="col-2 temperature-unit">
							<button	className="btn btn-outline-secondary temperature-unit-icon"	type="button" onClick={convertUnit}>
								°F
							</button>
						</div>
					</div>
				</header>
				<WeatherInfo apiInfo={weatherData} unitInfo={unit}/>
			<div className="six-day-forecast">
				<WeatherForecast coordinates={weatherData.coordinates} unit={unit}/>
			</div>
				<Signature />
			</div>
		);
	} else {
		search();
	}
}
