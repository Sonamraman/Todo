import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Typography,Button,makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    note:{
        width:"30vw",
        marginLeft:"10vw",
        marginTop:"5vh"
    },
    btns:{
        borderRadius:"50%",
        minHeight: "40px",
        width: "20px",
        backgroundColor:"#212529",
        marginBottom:"2vh",
        marginTop:"2vh",
        '&:hover':{
            backgroundColor: "#212529",
          }
    },
    icon:{
        color:"white"
    }
}))

const Note = (props) => {
    const classes = useStyles()
    const deleteNote=()=>{
        props.deleteItem(props.id)
    }
    return (
        <>
            <Paper className={classes.note}>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="small">{props.content}</Typography>
                <Button className={classes.btns} onClick={deleteNote}>
                    <DeleteIcon className={classes.icon}/>
                </Button>
            </Paper>
        </>
    )
}

export default Note
