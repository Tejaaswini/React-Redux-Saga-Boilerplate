import { combineReducers } from "redux";
import WeatherReducer from "./weatherReducer";

const rootReducer = combineReducers({ WeatherReducer});

export default rootReducer;
