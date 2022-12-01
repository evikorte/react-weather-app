import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  //my apiKey is not working! I use Matt´s

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

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
