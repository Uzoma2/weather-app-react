import React from "react";
import SmartDate from "./smartDate.js";

export default function WeatherInfo(props) {
  return (
    <>
      <div className="temp-today-row">
        <div className="temp-today">
          <h1 className="current-city">{props.data.city}</h1>
          <h3 className="current-day-time">
            <SmartDate date={props.data.date} />
          </h3>
          <h3 className="weather-description">{props.data.description}</h3>
          <div className="weather-icon-link-wrap">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="weather-icon"
            />
            <h2>
              <span className="current-temp-number">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">°C </span>
            </h2>
          </div>
        </div>
        <div className="weathertypes">
          <h3>
            Humidity:{" "}
            <span className="humidity-number">{props.data.humidity}</span>%
          </h3>
          <h3>
            Wind:{" "}
            <span className="wind-number">{Math.round(props.data.wind)}</span>
            km/h
          </h3>
        </div>
      </div>
    </>
  );
}
