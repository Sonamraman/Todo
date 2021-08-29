import React, { useState } from 'react'
import './todolist.css'
import Tolist from './Tolist.jsx'

const Todolist = () => {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])

    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }

    const addItems=()=>{
        
        setItems([...items,inputList])

        // setItems((oldItems)=>{
        //     return[...oldItems,inputList]
        // })

        setInputList("")
    }

    const deleteItems = (id) => {
        // setItems((oldItems)=>{
        //     return oldItems.filter((arrElem,index)=> index !== id)
        // })

        // or

        const updateditems = items.filter((arrElem,index)=> {
           return  index !== id
        })
        setItems(updateditems)
    };

    const removeAll = () => {
        setItems([])
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h2>ToDo List</h2>
                    <br/>
                    <input type="text" value={inputList} placeholder="Add a item..." onChange={itemEvent}/>
                    <i className="fas fa-plus plusbtn " title="Add Item" onClick={addItems}/>
                    <div className="lists">
                        {items.map((item,index)=>{
                            return <Tolist key={index} id={index} text={item} onSelect={deleteItems}/>
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
