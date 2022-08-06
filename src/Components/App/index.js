import { React, useState, useEffect } from "react";

import SearchBar from "../SearchBar";
import CurrentWeather from "../CurrentWeater";
import Loader from "../Loader/index.js";
import Footer from "../Footer";
import DayForecast from "../DayForecast";

import APIservice from "../../Helpers/service";
const api = new APIservice();

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (city) {
      api
        .getWeatherByCityName(city)
        .then((res) => setData(res.data.list))
        .catch((err) => console.log(err));
    } else {
      navigator.geolocation.getCurrentPosition(handlePosition);

      function handlePosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        api
          .getWeatherByLocation(lat, lon)
          .then((res) => setData(res.data.list))
          .catch((err) => console.log(err));
      }
    }
  }, [city, setData]);

  return (
    <div className="container">
      <SearchBar getCity={setCity} />
      <div className="wrapper">
        {data ? <CurrentWeather data={data} city={city} /> : <Loader />}
        {data ? <DayForecast data={data} /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
