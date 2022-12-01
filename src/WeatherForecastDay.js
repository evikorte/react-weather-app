import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay text-center mb-3">
      <div className="day">{day()}</div>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} size={35} />
      </div>
      <div className="dailyTemp">
        <span className="dailyTempMin opacity-50">{maxTemp()}</span>|
        <span className="dailyTempMax">{minTemp()}</span>
      </div>
    </div>
  );
}
