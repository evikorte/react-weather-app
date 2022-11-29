import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";

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
        <div className="col-6">
          <div className="clearfix">
            <span className="weatherIcon">
              <WeatherIcon code={props.data.icon} />
            </span>
            <span className="temperature">
              {" "}
              <strong>{Math.round(props.data.temperature)}</strong>{" "}
              <span className="units">°C|°F</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
