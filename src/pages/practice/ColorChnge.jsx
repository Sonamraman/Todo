import { Button } from "@material-ui/core";
import React from "react";

const checks = [{ selected:false, id:1, name:"Sonam"},{ selected:false, id:2, name:"Shivani"},{ selected:false, id:3, name:"Kiran"}];
const btn = [{name:"Button1", selected:false, indx:1,},{name:"Button2", selected:false, indx:2,},{name:"Button3", selected:false, indx:3,}]

const ColorChnge = () => {
  const [state, setState] = React.useState(checks);
  const [selectedArray, setselectedArray] = React.useState([]);

  const submit = (id1) => {
    const newArray = checks.map((item) => {
        if (id1 === item.id) {
          item.selected = !item.selected
        }
        return item;
      });
      setState(newArray);
  };

  const submit1 = (indx1) => {
    const newArray = checks.map((item) => {
        if (indx1 === item.id) {
          item.selected = !item.selected
        }
        return item;
      });
      setState(newArray);
      const selectedArray = newArray.filter((item) => item.selected === true);
      setselectedArray(selectedArray);
  };

  return (
    <>
      {checks.map((item) => {
        return (
          <div style={{background:item.selected===true?"blue":"red",width:item.selected===true?"5vw":"8vw"}} onClick={() => submit(item.id)}>{item.name}</div>
        );
      })}
      {btn.map((btns)=>{
        return(
          <Button color="primary" variant="contained" onClick={()=>submit1(btns.indx)} style={{marginLeft:"1vw"}}>
            {btns.name}
          </Button>
        )
      })}
      {selectedArray.map((item) => {
          return (
              <h3>{item.name}</h3>
          )
        })}
    </>
  );
};

export default ColorChnge;
