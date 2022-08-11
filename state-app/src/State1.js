import React,{useState} from "react";
const State1 = ()=>{
    const [str,setStr] = useState("Hello");
    const [num,setNum] = useState(100);
    const [bool,setBool] = useState(false);
    const my_fun = ()=>{
        setBool(bool=>{
           return !bool;
        });
    }
    return(
        <React.Fragment>
            <button onClick={my_fun}>Click Me</button>
            {bool?(<div><h1>{str}</h1><h1>{num}</h1></div>):null}
        </React.Fragment>
    )
};
export default State1;