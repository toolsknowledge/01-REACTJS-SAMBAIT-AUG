import React,{useRef} from "react";
import {useNavigate} from "react-router-dom";
function Login(){
    const uname = useRef("");
    const upwd = useRef("");
    const navi = useNavigate();
    const login = ()=>{
        (uname.current.value == "admin" && upwd.current.value == "admin")?navi(`/dashboard/${uname.current.value}`):navi("/error");
    }
    return(
        <React.Fragment>
            <fieldset>
                <legend>Login</legend>
                <input type="text" placeholder="Enter User Name" ref={uname}></input>
                <br></br><br></br>
                <input type="password" placeholder="Enter Password" ref={upwd}></input>
                <br></br><br></br>
                <button onClick={login}>Login</button>
            </fieldset>
        </React.Fragment>
    )
}
export default Login;