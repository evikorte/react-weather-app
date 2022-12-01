import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "4770548bed49c5d96b7201c497695887";
  let latitude = 40.4;
  let longitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

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
