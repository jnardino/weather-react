import React, { useState } from "react";

import axios from "axios";
import WeatherInfo from "./WeatherInfo"
import Signature from "./Signature";

export default function AppBox(props) {
	const [weatherData, setweatherData] = useState({ready: false});

	function handleResponse(response){
		setweatherData({
			ready: true,
			city: response.data.name,
			temperature: response.data.main.temp,
			temperatureMax: response.data.main.temp_max,
			temperatureMin: response.data.main.temp_min,
			description: response.data.weather[0].description,
			iconUrl: "https://icons-for-free.com/iconfiles/png/64/summer+sun+icon-1320186917540922857.png",
			realFeel: response.data.main.feels_like,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity});
	}

	if (weatherData.ready){
		return (
			<div className="app-box">
				<header>
					<div className="row">
						<div className="col-10 search">
							<form className="input-group">
								<button className="btn btn-outline-secondary location-icon" type="button">
									<i className="fa-solid fa-location-dot"></i>
								</button>
								<input type="text" className="form-control search-bar" placeholder="Enter a city..."/>
								<button	className="btn btn-outline-secondary search-icon" type="submit">
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
							</form>
						</div>
						<div className="col-2 temperature-unit">
							<button	className="btn btn-outline-secondary temperature-unit-icon"	type="button">
								°F
							</button>
						</div>
					</div>
				</header>
				<WeatherInfo apiInfo={weatherData}/>
				<Signature />
			</div>
		);
	} else {
		const APIKEY = "9e0fb79c2f66d0cd0dcf06710976a873";
		const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${APIKEY}&units=metric`
		axios.get(APIURL).then(handleResponse);

		return "Loading...";
	}
}
