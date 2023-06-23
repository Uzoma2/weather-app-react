import React from "react";

export default function WeatherTemperature(props) {
  return (
    <>
      <h2>
        <span className="current-temp-number">{Math.round(props.celsius)}</span>
        <span className="units">°C</span>
      </h2>
    </>
  );
}
