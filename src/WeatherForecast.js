import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col text-center mb-3">
          <div className="day">Monday</div>
          <div className="icon">
            <WeatherIcon code="01d" size={35} />
          </div>
          <div className="dailyTemp">
            <span className="dailyTempMin opacity-50">12°</span>|
            <span className="dailyTempMax">18°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
