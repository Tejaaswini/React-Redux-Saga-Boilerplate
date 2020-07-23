import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_START,
  FETCH_WEATHER_FAIL,
} from "../actions/actionTypes";

const initialState = {
  city: "",
  weatherData: null,
  error: "",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        city: action.payload.city,
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload,
      };

    case FETCH_WEATHER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
