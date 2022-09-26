import {useState} from "react";
import {omit} from "lodash";
const Forms = ()=>{
    const [inputs,setInputs] = useState({});
    const [errors,setErrors] = useState({});
    const handleSubmit = (event)=>{
        event.preventDefault();
    };
    const validations = (name,value)=>{
        switch(name){
            case "uname":
                if(/^$/.test(value)){
                    setErrors({...errors,"uname":"uname cant left blank"});
                }else if(!/^[A-Z]\w{6,8}$/.test(value)){
                    setErrors({...errors,"uname":"must match the pattern"});
                }
                else{
                    let clearObj = omit(errors,"uname");
                    setErrors(clearObj);
                }
        }
    };
    const handleChange = (event)=>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        validations(name,value);
        setInputs({...inputs,[name]:value});
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>User Name</td>
                        <td>
                            <input type="text" 
                                   name="uname" 
                                   value={inputs.uname || ""} 
                                   onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Register"></input>
                        </td>
                        <td>
                            <input type="reset" value="Reset"></input>
                        </td>
                    </tr>
                </table>
                {Object.keys(errors).length>0?(<span style={{color:"red"}}>{JSON.stringify(errors)}</span>):""}
            </form>
        </>
    )
}
export default Forms;