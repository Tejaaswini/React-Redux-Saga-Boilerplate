import { FETCH_WEATHER_START} from "../actions/actionTypes";

import {
  fetchWeatherSuccess,
  fetchWeatherFailed,
} from "../actions/actionCreators";

import api from "../api/api";

import { takeLatest, all, call, put } from "redux-saga/effects";

function transformWeatherData(data) {
  const weatherData = {
    city: {
      name: data.city.name,
      country: data.city.country,
      timezone: data.city.timezone,
    },
    weather: {
      temperature: data.list[0].main.temp,
      main: data.list[0].weather[0].main,
      description: data.list[0].weather[0].description,
    },
    date: new Date(data.list[0].dt_txt),
  };

  return weatherData;
}

//Generator function would resolve promise

export function* fetchWeatherByCityNameSaga(action) {
  try {
    const response = yield call(api.getWeatherByCityName, action.payload);
    const weatherData = yield call(transformWeatherData, response);
    yield put(fetchWeatherSuccess(weatherData));
  } catch (err) {
    yield put(fetchWeatherFailed(err));
  }
}

export function* watcherSagas() {
  yield all([
    yield takeLatest(FETCH_WEATHER_START, fetchWeatherByCityNameSaga)
  ]);
}
