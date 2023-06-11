import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./weatherInfo.js";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
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
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="search"
                className="city-input"
                placeholder="City"
                autoComplete="off"
                onChange={updateCity}
              />

              <input type="submit" className="btn-warning" value="Search" />
            </form>

            <div className="current-btn">
              <input type="submit" className="btn-warning" value="Current" />
            </div>
          </div>
        </header>

        <main className="main">
          <WeatherInfo data={weather} />
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
    search();
    return `loading...`;
  }
}
