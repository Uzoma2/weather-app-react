import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleForecast() {}

  if (loaded) {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
  } else {
    return (
      <div className="forecast">
        <div className="day">
          <h3>Mon</h3>
          <div className="forecast-icon">
            {" "}
            <WeatherIcon code="01d" />
          </div>
          <h5 className="temp">
            <span className="temp-max">11°</span>
            <span className="temp-min">34°</span>
          </h5>
        </div>
      </div>
    );
  }
}
