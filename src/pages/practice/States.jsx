import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const States = () => {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("red");

//   const changeToggle = (e) => {
//     e.preventDefault();
//     setToggle(!toggle);
//   };

  useEffect(() => {
    // console.log("Callback");

    if(toggle){
        setColor("red")
    }
    else{
        setColor("black")
    }
    return () => {};
  }, [toggle]);

  return (
    <>
      {/* <h1 style={{ color: toggle ? "red" : "black" }}>Hello</h1>
      <button onClick={(e) => changeToggle(e)}>Toggle</button> */}

      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}

      <h1 style={{ color:color}}>Hello</h1>
      <Button color="primary" variant="contained" onClick={() => setToggle(!toggle)}>Toggle</Button>
    </>
  );
};

export default States;
