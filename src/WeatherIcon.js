import React from "react";

export default function WeatherIcon(props) {
	const iconMap = {
        "01d": <i className="weather-icon-small fa-solid fa-sun"></i>,
        "01n": <i className="weather-icon-small fa-solid fa-moon"></i>,
        "02d": <i className="weather-icon-small fa-solid fa-cloud-sun"></i>,
        "02n": <i className="weather-icon-small fa-solid fa-cloud-moon"></i>,
        "03d": <i className="weather-icon-small fa-solid fa-cloud"></i>,
        "03n": <i className="weather-icon-small fa-solid fa-cloud"></i>,
        "04d": <i className="weather-icon-small fa-solid fa-cloud"></i>,
        "04n": <i className="weather-icon-small fa-solid fa-cloud"></i>,
        "09d": <i className="weather-icon-small fa-solid fa-cloud-showers-heavy"></i>,
        "09n": <i className="weather-icon-small fa-solid fa-cloud-showers-heavy"></i>,
        "10d": <i className="weather-icon-small fa-solid fa-cloud-sun-rain"></i>,
        "10n": <i className="weather-icon-small fa-solid fa-cloud-moon-rain"></i>,
        "11d": <i className="weather-icon-small fa-solid fa-cloud-bolt"></i>,
        "11n": <i className="weather-icon-small fa-solid fa-cloud-bolt"></i>,
        "13d": <i className="weather-icon-small fa-solid fa-snowflake"></i>,
        "13n": <i className="weather-icon-small fa-solid fa-snowflake"></i>,
        "50d": <i className="weather-icon-small fa-solid fa-smog"></i>,
        "50n": <i className="weather-icon-small fa-solid fa-smog"></i>,
    };

	if (iconMap[props.image] === undefined) {
		return <i className="weather-icon-small fa-solid fa-sun"></i>;
	} else {
		return iconMap[props.image];
	}
}
