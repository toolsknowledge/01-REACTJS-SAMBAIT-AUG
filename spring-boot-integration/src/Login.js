import React,{useRef, useState} from "react";
import axios from "axios";
const Login = ()=>{
    const [status,setStatus] = useState({});
    const uname = useRef("");
    const upwd = useRef("");
    const login = ()=>{
        axios.post(`http://benfranklinserver-env.eba-5adimdsp.us-west-2.elasticbeanstalk.com/login`,{"uname":uname.current.value,"upwd":upwd.current.value}).then((posRes)=>{
            const {data} = posRes;
            setStatus(data);
            
        },(errRes)=>{
            console.log(errRes);
        })
    }
    return(
      
            <fieldset>
                <legend>Login</legend>
                <table>
                    <tr>
                        <td><label>User Name</label></td>
                        <td><input type="text" 
                                   
                                   placeholder="Enter User Name"
                                   ref={uname}></input></td>
                    </tr>

                    <tr>
                        <td>Password</td>
                        <td><input type="password"
                                   placeholder="Enter Password"
                                   ref={upwd}></input></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={login}>Login</button>
                        </td>
                    </tr>
                    <tr>
                        <td>{status.token ? <><h1>Login Success</h1></> : <><h1>Login Fail</h1></>}</td>
                    </tr>
                </table>
            </fieldset>
        
    )
};
export default Login;