import React from "react";

export default function DayForecast({ data }) {
  return (
    <div className="week-forecast">
      {data.map((el) => (
        <Card info={el} key={el.dt} />
      ))}
    </div>
  );
}

function Card({ info }) {
  return (
    <div className="day">
      <div className="title">{info.dt_txt.slice(10, 16)}</div>
      <div className="day-icon">
        <img
          alt="weather-icon"
          src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="day-temp">
        <span className="min"> {Math.ceil(info.main.temp_min)} °C</span>{" "}
        <span className="max">{Math.ceil(info.main.temp_max)} °C</span>
      </div>
    </div>
  );
}
