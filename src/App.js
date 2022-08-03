import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API_KEY = "943216857682093a1e6ba773a9600c97";

  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
      )
      .then(handleResponce);
  }, [city]);

  function handleResponce(res) {
    setData(res.data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCity(e.target.firstChild.value);
  }

  function renderTemp() {
    return (
      <>
        {data ? (
          <div>
            <h2>
              {" "}
              It's {data.main.temp}°C in {city}
            </h2>
            <ul>
              <li>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="icon"
                />
              </li>
              <li>Description: {data.weather[0].description}</li>
              <li>Humidity: {data.main.humidity}%</li>
              <li>Wind: {data.wind.speed}km/h</li>
            </ul>
          </div>
        ) : (
          <h1>Loading data...</h1>
        )}
      </>
    );
  }

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city name" />
        <button>Search</button>
      </form>
      {city ? renderTemp() : null}
    </div>
  );
}

export default App;
