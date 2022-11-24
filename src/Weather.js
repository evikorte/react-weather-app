import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      precipitation: 13,
      humidity: response.data.main.humidity,
      iconUrl: `https://cdn.onlinewebfonts.com/svg/img_540017.png`,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <header>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <CurrentDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </header>
        <div className="row text-center">
          <div className="col-6">
            <img
              className="img-fluid w-25"
              src={weatherData.iconUrl}
              alt="weather icon"
            />{" "}
            <strong>{Math.round(weatherData.temperature)}</strong>{" "}
            <p className="units">°C|°F</p>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>{" "}
          </div>
        </div>

        <form className="SearchEngine m-3">
          <input
            type="search"
            className="form-control col-6"
            placeholder="Enter a city"
            autoFocus="on"
          />
          <input
            type="submit"
            className="btn btn-primary col-3 m-2"
            value="Search"
          />
        </form>
      </div>
    );
  } else {
    const apiKey = "4770548bed49c5d96b7201c497695887";
    let units = "metric";
    let city = "Budapest";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
