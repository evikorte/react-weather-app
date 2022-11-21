import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div ClassName="Weather">
      <header>
        <h1>Budapest</h1>
        <ul>
          <li>Sunday, 18:28</li>
          <li>Partly Cloudy</li>
        </ul>
      </header>
      <div className="row">
        <div className="col-6">
          <img
            className="img-fluid w-25"
            src="https://cdn.onlinewebfonts.com/svg/img_540017.png"
            alt="weather icon"
          />{" "}
          10°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 5 km/h</li>
          </ul>{" "}
        </div>
      </div>

      <form className="SearchEngine m-3">
        <input type="search" placeholder="Enter a city" />
        <input type="submit" className="btn btn-primary" value="Search" />
      </form>
    </div>
  );
}
