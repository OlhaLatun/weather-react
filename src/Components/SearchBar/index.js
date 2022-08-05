import React, { useState, useEffect } from "react";

import APIservice from "../../Helpers/service";
const api = new APIservice();

export default function SearchBar({ getData }) {
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (city) {
      api
        .getWeatherByCityName(city)
        .then((res) => getData(res.data))
        .catch((err) => console.log(err));
    } else {
      navigator.geolocation.getCurrentPosition(handlePosition);

      function handlePosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        api
          .getWeatherByLocation(lat, lon)
          .then((res) => getData(res.data.list[0]))
          .catch((err) => console.log(err));
      }
    }
  }, [city, getData]);

  function handleSubmit(e) {
    e.preventDefault();
    setCity(e.target.firstChild.value);
  }

  return <SearchBarContainer onSubmit={handleSubmit} />;
}

function SearchBarContainer({ onSubmit }) {
  return (
    <div className="search-bar">
      <div className="logo">
        Olha<span>Weather</span>
      </div>
      <div className="search">
        <form id="form" onSubmit={onSubmit}>
          <input id="search" type="text" placeholder="Enter city name" />
          <button>search</button>
        </form>
      </div>
    </div>
  );
}
