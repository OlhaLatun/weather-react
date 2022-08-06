import React from "react";

import { WEEK } from "../../Helpers/Contstants";
import Temperature from "../Temperature";

export default function CurrentWeather({ data, city }) {
  const currentDate = new Date();
  return (
    <div className="weather-container">
      {" "}
      <div className="current-weather">
        <img
          alt="weather-icon"
          src={`http://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`}
        />
        <Temperature
          temp={data[0].main.temp.toFixed(0)}
          weatherDescription={data[0].weather[0].description}
        />
        <div id="location" className="location">
          {city || "Your current location"}
        </div>
      </div>
      <div className="more-info-card">
        <div>
          Humidity: <span className="humidity">{data[0].main.humidity}</span>
        </div>
        <div>
          Wind: <span className="wind">{data[0].wind.speed} km/h</span>
        </div>
      </div>
      <div className="local-time">
        <div className="time">
          {currentDate.getHours()}: {currentDate.getMinutes()}
        </div>
        <div className="day">{WEEK[currentDate.getDay() - 1]}</div>
      </div>
    </div>
  );
}
