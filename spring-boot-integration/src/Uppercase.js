import React,{useRef, useState} from "react";
import axios from "axios";
const Uppercase = ()=>{
    const [res,setRes] = useState({});
    const user_data = useRef("");
    const my_func = ()=>{
        axios.post(`http://test-routes.herokuapp.com/test/uppercase`,{"message":user_data.current.value}).then((posRes)=>{
            const {data} = posRes;
            const {message} = data;
            setRes(data);
        },(errRes)=>{
            console.log(errRes);
        })
    }
    return(
        <>
            <input type="text" ref={user_data} placeholder="Enter Text Here"></input>
            <button onClick={my_func}>Click Me</button>
            <h1>{JSON.stringify(res)}</h1>
        </>
    )
}
export default Uppercase;