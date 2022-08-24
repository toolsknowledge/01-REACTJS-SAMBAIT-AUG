import React,{useState,useEffect} from "react";
import axios from "axios";
function Avatar(){
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users?page=1`).then((posRes)=>{
            const {data:my_data} = posRes;
            const {data} = my_data;
            setArr(data);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);
    return(
        <React.Fragment>
           <table>
                <tr>
                    <th>SNO</th>
                    <th>EMAIL</th>
                    <th>FIRST_NAME</th>
                    <th>LAST_NAME</th>
                    <th>AVATAR</th>
                </tr>
                {arr.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.email}</td>
                            <td>{element.first_name}</td>
                            <td>{element.last_name}</td>
                            <td><img width={"50"} src={element.avatar}></img></td>
                        </tr>
                    )
                })}
           </table>
           
        </React.Fragment>
    )
}
export default Avatar;