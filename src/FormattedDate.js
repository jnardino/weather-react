import React, { useState, useEffect } from "react";

export default function FormattedDate(){
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	let dayNumber = date.getDate();
    let year = date.getFullYear();

	let months = ["Jan", "Fev", "Mar", "Abr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthName = months[date.getMonth()];

    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekName = weekDays[date.getDay()];

    let hour = date.getHours();
    let minutes = date.getMinutes();

	const militaryTo12HClock = (hour, minute) => {
		if (hour >= 0 && hour <= 11) {
			return `${hour}:${adjustMinutes(minute)} am`;
		} else if (hour === 12) {
			return `${hour}:${adjustMinutes(minute)} pm`;
		} else {
			return `${hour - 12}:${adjustMinutes(minute)} pm`;
		}
	}

	const adjustMinutes = (minute) => {
		if (minute < 10) {
		return "0" + minute;
		} else {
			return minute;
		}
	}

	return <div>Today is {weekName}, {monthName} {dayNumber} {year} - {militaryTo12HClock(hour, minutes)}</div>;
}
