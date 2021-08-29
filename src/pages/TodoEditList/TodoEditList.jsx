import React, { useState } from 'react'
import '../todolist/todolist.css'

const Todolist = () => {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])
    const [toggle, setToggle] = useState(true)

    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }

    const addItems=()=>{
        const allInputData = { id: new Date().getTime().toString(), name: inputList }
        setItems([...items,allInputData])

        setInputList("")
    }

    const deleteItems = (id) => {

        const updateditems = items.filter((elem)=> {
           return  elem.id !== id
        })
        setItems(updateditems)
    };

    const removeAll = () => {
        setItems([])
    }

    const editItems = (id)=>{
        let newEditItem = items.find((elem)=>{
            return elem.id === id
        })
        setItems(newEditItem.name)
        setToggle(false)
        
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h2>ToDo List</h2>
                    <br/>
                    <input type="text" value={inputList} placeholder="Add a item..." onChange={itemEvent}/>
                    {
                        toggle ? <i className="fas fa-plus plusbtn " title="Add Item" onClick={addItems}/> :
                                 <i className="fas fa-edit plusbtn" title="update Item" onClick={addItems}></i>
                    }
                    
                    <div className="lists">
                        {items.map((elem)=>{
                            return (
                                <div className="editlist" key={elem.id}>
                                    <h4>{elem.name}</h4>
                                    <div className="btns">
                                        <i className="fas fa-edit editbtn" title="Edit Item" onClick={()=>editItems(elem.id)}></i>
                                        <i className="far fa-trash-alt delbtn" title="Delete Item" onClick={()=>deleteItems(elem.id)}></i>
                                    </div> 
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <button className="deletebtn" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>Remove All</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todolist
