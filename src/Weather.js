import React, { useState } from "react";
import axios from "axios";
import SmartDate from "./smartDate.js";

export default function Weather() {
  const [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (weather.loaded) {
    return (
      <div className="wrap">
        <header className="header">
          <section className="city-suggestions">
            <a href="/">Jos</a>
            <a href="/">Quebec</a>
            <a href="/">Cairo</a>
            <a href="/">Accra</a>
            <a href="/">Lisbon</a>
          </section>
          <div className="search-current-wrap">
            <form className="search-form">
              <input
                type="search"
                className="city-input"
                placeholder="City"
                autoComplete="off"
              />

              <input type="submit" className="btn-warning" value="Search" />
            </form>
            <div className="current-btn">
              <input type="submit" className="btn-warning" value="Current" />
            </div>
          </div>
        </header>
        <main className="main">
          <div className="temp-today-row">
            <div className="temp-today">
              <h1 className="current-city">{weather.city}</h1>
              <h3 className="current-day-time">
                <SmartDate date={weather.date} />
              </h3>
              <h3 className="weather-description">{weather.description}</h3>
              <div className="weather-icon-link-wrap">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="weather-icon"
                />
                <h2>
                  <span className="current-temp-number">
                    {Math.round(weather.temperature)}
                  </span>
                  <span className="units">°C </span>
                </h2>
              </div>
            </div>
            <div className="weathertypes">
              <h3>
                Humidity:{" "}
                <span className="humidity-number">{weather.humidity}</span>%
              </h3>
              <h3>
                Wind:{" "}
                <span className="wind-number">{Math.round(weather.wind)}</span>
                km/h
              </h3>
            </div>
          </div>

          <div className="forecast"></div>
        </main>
        <footer className="footer">
          <p>
            Page was built by
            <a
              href="https://www.linkedin.com/in/uzoma-udeagwu"
              className="footerlink"
              target="_blank"
              rel="noreferrer"
            >
              Uzoma Udeagwu
            </a>
          </p>
          <a
            href="https://github.com/Uzoma2/weather-app-react"
            className="footerlink"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code
          </a>
        </footer>
      </div>
    );
  } else {
    let city = "paris";
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return `loading...`;
  }
}
