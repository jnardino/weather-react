import React from "react";

export default function WeatherIcon(props) {
	const iconMap = {
        "01d": <i class="fa-solid fa-sun"></i>,
        "01n": <i class="fa-solid fa-moon"></i>,
        "02d": <i class="fa-solid fa-cloud-sun"></i>,
        "02n": <i class="fa-solid fa-cloud-moon"></i>,
        "03d": <i class="fa-solid fa-cloud"></i>,
        "03n": <i class="fa-solid fa-cloud"></i>,
        "04d": <i class="fa-solid fa-cloud"></i>,
        "04n": <i class="fa-solid fa-cloud"></i>,
        "09d": <i class="fa-solid fa-cloud-showers-heavy"></i>,
        "09n": <i class="fa-solid fa-cloud-showers-heavy"></i>,
        "10d": <i class="fa-solid fa-cloud-sun-rain"></i>,
        "10n": <i class="fa-solid fa-cloud-moon-rain"></i>,
        "11d": <i class="fa-solid fa-cloud-bolt"></i>,
        "11n": <i class="fa-solid fa-cloud-bolt"></i>,
        "13d": <i class="fa-solid fa-snowflake"></i>,
        "13n": <i class="fa-solid fa-snowflake"></i>,
        "50d": <i class="fa-solid fa-smog"></i>,
        "50n": <i class="fa-solid fa-smog"></i>,
    };

	if (iconMap[props.image] === undefined) {
		return <i class="fa-solid fa-sun"></i>;
	} else {
		return iconMap[props.image];
	}
}
