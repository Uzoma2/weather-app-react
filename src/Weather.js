import React from "react";

export default function Weather() {
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
            <h1 className="current-city">Abuja</h1>
            <h3 className="current-day-time">4:30am</h3>
            <h3 className="weather-description">Partially cloudy</h3>
            <div className="weather-icon-link-wrap">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
                className="weather-icon"
              />
              <h2>
                <span className="current-temp-number">30</span>
                <span className="units">°C </span>
              </h2>
            </div>
          </div>
          <div className="weathertypes">
            <h3>
              Humidity: <span className="humidity-number">41</span>%
            </h3>
            <h3>
              Wind: <span className="wind-number">11</span>km/h
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
          href="https://github.com/Uzoma2/Weather-App"
          className="footerlink"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code
        </a>
      </footer>
    </div>
  );
}
