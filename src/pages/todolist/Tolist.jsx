import React from 'react'
import './todolist.css'
import CloseIcon from '@material-ui/icons/Close';
import {
    makeStyles,
    Avatar,
  } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    avatar:{
        backgroundColor:"#E02020",
        height:"3.3vh",
        width:"1.7vw",
        margin: "0 10px 0 15px",
    },
    
}))

const Tolist = (props) => {
    const classes = useStyle();

    return (
        <>
           <div className="todo_style">
               <i className="far fa-trash-alt delbtn" title="Delete Item" onClick={()=>{props.onSelect(props.id)}}/>
               <h3>{props.text}</h3> 
           </div>
        </>
    )
}

export default Tolist
