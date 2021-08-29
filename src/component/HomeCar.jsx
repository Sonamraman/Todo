import React from "react";
import {Grid, Button} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import { makeStyles } from "@material-ui/core/styles";
import {useSelector, useDispatch} from 'react-redux'
import { changeMode } from "../redux/action/action";

// const HomeCar = ({isHouse,setIsHouse}) => {
   
  const HomeCar = () => {
  
  const isHouse = useSelector(state => state.isHouse)
  const dispatch = useDispatch()

  const useStyles = makeStyles((theme) => ({
    root:{
      display:"flex",
      justifySelf:"center"
    },
    home: {
      backgroundColor: !isHouse ? "#5CB7FF":"#1E82D2",
      color: "white",
      padding:"5px 40px",
      '&:hover':{
        backgroundColor: !isHouse ? "#5CB7FF":"#1E82D2"
      }
    },
    car: {
      backgroundColor: isHouse ? "#5CB7FF":"#1E82D2",
      color: "white",
      padding:"5px 40px",
      '&:hover':{
        backgroundColor: isHouse ? "#5CB7FF":"#1E82D2"
      }
    },
  }));
  const classes = useStyles();
  return (
    <>
    <Grid container justify="center" component="main" className={classes.root}>

    {/* <Button className={classes.home} onClick = {()=>setIsHouse(true)}><HomeIcon /></Button>
    <Button className={classes.car} onClick = {()=>setIsHouse(false)}><DirectionsCarIcon /></Button> */}

    <Button className={classes.home}  onClick = {()=>dispatch(changeMode())}>
      <HomeIcon />
    </Button>
    <Button className={classes.car} onClick = {()=>dispatch(changeMode())}>
      <DirectionsCarIcon />
    </Button>

    </Grid>
    </>
  );
};

export default HomeCar;