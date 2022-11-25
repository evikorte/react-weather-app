import React from "react";
import WeatherIcon from "./WeatherIcon";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <header>
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <CurrentDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </header>
      <div className="row text-center">
        <div className="col-4">
          <WeatherIcon data={props.data.icon} className="icon" />
          <strong>{Math.round(props.data.temperature)}</strong>{" "}
          <p className="units">°C|°F</p>
        </div>
        <div className="col-8">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
