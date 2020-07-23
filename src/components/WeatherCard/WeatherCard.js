//React
import React from "react";
//Components

//Material
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import {useSelector } from "react-redux";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    width: "40%",
    height: "40%",
    marginLeft: "40rem",
    marginTop:"2rem",
    position:"fixed"
  },
});

const WeatherCard = (props) => {
  const classes = useStyles();
  const store = useSelector((store) => store.WeatherReducer);  

  const populateWeatherCard = () => {

    let cards = [];
    if (store.weatherData) {
        cards.push(
          <div>
            <Typography>{store.weatherData.weather.temperature}°C</Typography>
            <Typography>{store.weatherData.weather.main}</Typography>
            <Typography>{store.weatherData.weather.description}</Typography>
          </div>
        );
    }
    return cards;
  };

  return (
    <div className={classes.cards} id="Weather">
      {populateWeatherCard()}
    </div>
  );
};

export default WeatherCard;
