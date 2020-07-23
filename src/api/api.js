import {
  WEATHER_API_KEY,
  WEATHER_API_UNIT,
  WEATHER_API_URL,
} from "../constants/constants";
import axios from "axios";

const api = {
  getWeatherByCityId(cityId) {
    return axios
      .get(`${WEATHER_API_URL}/forecast/`, {
        params: {
          id: cityId,
          appid: WEATHER_API_KEY,
          units: WEATHER_API_UNIT,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  },

  getWeatherByCityName(cityName) {
    return axios
      .get(`${WEATHER_API_URL}/forecast/`, {
        params: {
          q: cityName,
          appid: WEATHER_API_KEY,
          units: WEATHER_API_UNIT,
        },
      })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response.statusText));
  },

};

export default api;
