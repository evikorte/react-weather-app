import React from "react";
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
        <div className="col-6">
          <img
            className="img-fluid w-25"
            src={props.data.iconUrl}
            alt="weather icon"
          />{" "}
          <strong>{Math.round(props.data.temperature)}</strong>{" "}
          <p className="units">°C|°F</p>
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
