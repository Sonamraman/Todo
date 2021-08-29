import { Button, TextField, makeStyles, Paper, TextareaAutosize } from '@material-ui/core'
import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    form: {
      marginLeft:"2vw",
      marginRight:"2vw",
    },
    btns:{
        borderRadius:"50%",
        minHeight: "40px",
        width: "30px",
        backgroundColor:"#212529",
        marginBottom:"2vh",
        marginTop:"2vh",
        '&:hover':{
            backgroundColor: "#212529",
          }
    },
    paper:{
        width:"40vw",
        marginLeft:"30vw",
        marginTop:"5vh"
    },
    title:{
        marginTop:"3vh",
        color:"black"
    },
    textarea:{
        width:"36vw",
        marginTop:"2vh",
    }
  }));

const Createnote = (props) => {
    const [expand, setExpand] = useState()
    const classes = useStyles();
    const [note, setNote] = useState({
        title:"",
        content:"",
    })

    const InputEvent =(event)=>{
        const {value,name} = event.target
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        })
    }

    const addEvent=()=>{
        props.passNote(note)
        setNote({
            title:"",
            content:"",
        })    
    }

    const expandIt=()=>{
        setExpand(true)
    }

    const normal=()=>{
        setExpand(false)
    }

    return (
        <div>
            <Paper variant="outlined" className={classes.paper} onDoubleClick={normal}>
            <form className={classes.form} noValidate autoComplete="off">
                {expand?
                <TextField
                   margin="normal"
                   required
                   fullWidth
                   id="title"
                   label="Title"
                   name="title"
                   autoFocus
                   className={classes.title}
                   value={note.title}
                   onChange={InputEvent}
                />:null}
                <TextareaAutosize rowsMin={3} placeholder="Write a note..." value={note.content}
                   onChange={InputEvent} name="content" className={classes.textarea} onClick={expandIt}/>
                {expand?
                <Button className={classes.btns} onClick={addEvent}>
                    <AddIcon style={{color:"white"}}/>
                </Button>:null}
            </form>
            </Paper>
        </div>
    )
}

export default Createnote
