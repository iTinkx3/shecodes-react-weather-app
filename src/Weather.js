import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready:false });
  function handleResponse(response) {
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        city: response.data.city,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        iconUrl: response.data.condition.icon_url,
        date: new Date(response.data.time * 1000)
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li><FormattedDate date={weatherData.date} /></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6 d-flex align-items-center">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="me-3"
            /> 
            <div>
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <section>
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d0aco39t3849ba243228ee2c40ff978b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
