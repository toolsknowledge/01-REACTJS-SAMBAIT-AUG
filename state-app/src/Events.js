import React, { useState } from "react";
const Events = ()=>{
    const [b1,setB1] =useState("");
    const [b2,setB2] =useState("");
    const [b3,setB3] = useState("");
    const fun_one = ()=>{
        setB1("Button1 Clicked")
    }
    const fun_two = (msg)=>{
        setB2(msg);
    }
    const my_fun = ()=>{
        alert("Double Clicked Event !!!")
    };
    return(
        <React.Fragment>
            <button onClick={fun_one}>Button1</button>
            <button onClick={()=>{fun_two("Button2 Clicked")}}>Button2</button>
            <button onClick={()=>{setB3("Button3 Clicked")}}>Button3</button>
            <button onDoubleClick={my_fun}>Button4</button>
            <h1>{b1}....{b2}....{b3}</h1>
        </React.Fragment>
    )
}
export default Events;