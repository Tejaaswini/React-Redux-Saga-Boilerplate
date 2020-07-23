//React
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/actionCreators";

//Components
//import api from "../../api/api";
import { capitalizeFirstLetter } from "../../utils/utils";

//Material
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  search:{
    display:"flex",
    flexDirection: "row",
    textAlign:"center",
    width:"40%",
    height:"40%",
    marginLeft:"42%",
    marginTop:"10%"
  },
  button:{
    backgroundColor:"lightblue",
    width:"4rem",
    height:"2rem", 
    marginTop:"2rem",
    marginLeft:"1rem"
    }
});


const City = () => {
  //const store = useSelector(store => store)
  const classes = useStyles();
  const dispatch = useDispatch()
  const [cityName, setCityName] = useState();



  const onChangeHandler = (event) => {
    const city = capitalizeFirstLetter(event.target.value);
    setCityName(city);
  };


  const onClickHandler = () => {
    console.log("Clicked")
    dispatch(actions.fetchWeatherStart(cityName));
  };

  return (
    <div className={classes.search} id="City">
      <TextField
        onChange={onChangeHandler}
        label="Search the city..."
        margin="normal"
      ></TextField>
      <Button className={classes.button}variant="contained" onClick={onClickHandler}>Submit</Button>      
    </div>
  );
};

export default City