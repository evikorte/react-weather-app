import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function getCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "4770548bed49c5d96b7201c497695887";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />
        <div className="row">
          <form className="SearchEngine m-3" onSubmit={handleSubmit}>
            <input
              type="search"
              className="col-8"
              placeholder="Enter a city"
              autoFocus="on"
              onChange={getCity}
            />
            <input
              type="submit"
              className="btn btn-primary col-3 m-2"
              value="Search"
            />
          </form>
        </div>
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
