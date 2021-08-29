import React,{useState} from 'react'
import Createnote from './Createnote'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'

const Keepapp = () => {
    const [addItem, setAddItem] = useState([])
    const addNote=(note)=>{
        setAddItem((prevData)=>{
            return[...prevData,note]
        })
    }

    const onDelete=(id)=>{
        setAddItem((olddata)=>
            olddata.filter((currdata,indx)=>{
                return indx !== id
            })
        )
    }
    return (
        <div>
            <Header/>
            <Createnote passNote={addNote}/>
            {addItem.map((val,index)=>{
              return(
                <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
                />
              )
            })}
            {/* <Footer/> */}
        </div>
    )
}

export default Keepapp
