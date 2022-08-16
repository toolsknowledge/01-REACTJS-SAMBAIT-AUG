import React,{useRef} from "react";

function Login(){
    const uname = useRef("");
    const upwd = useRef("");
    const my_fun = ()=>{
        uname.current.value === "admin" && upwd.current.value === "admin" ? alert("Login Success") : alert("Login Fail");
    }
    return(
        <React.Fragment>
            <fieldset>
                <legend>Login</legend>
                <input type="text" 
                       name="username" 
                       placeholder="Enter User Name"
                       ref={uname}></input>
                <br></br><br></br>
                <input type="password"
                       name="userpassword"
                       placeholder="Enter Password"
                       ref={upwd}></input>
                <br></br><br></br>
                <button onClick={my_fun}>Login</button>
            </fieldset>
        </React.Fragment>
    )
}
export default Login;