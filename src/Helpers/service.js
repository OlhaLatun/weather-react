import axios from "axios";
import { API_KEY } from "../Helpers/Contstants";

export default class APIservice {
  getWeatherByCityName(name) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`
    );
  }

  getWeatherByLocation(lat, lon) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=6&appid=${API_KEY}&units=metric`
    );
  }
}
