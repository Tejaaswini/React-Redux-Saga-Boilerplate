//React
import React from "react";

//Components
import WeatherCard from "./components/WeatherCard/WeatherCard";
import City from "./components/City/City";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 2,
  }
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container} id="Container">
        <Box borderColor="primary.main" {...classes.box}>
          <City />
          <WeatherCard />
        </Box>
      </Box>
    </div>
  );
}

export default App;
