import React,{useState,useEffect} from "react";
import axios from "axios";
function Customers(){
    const [customers,setCustomers] = useState([]);
    useEffect(()=>{
        axios.get(`https://www.w3schools.com/angular/customers.php`).then((posRes)=>{
            const {data} = posRes;
            const {records} = data;
            setCustomers(records);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);

    return(
        <React.Fragment>
             <table>
                <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                {customers.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.Name}</td>
                            <td>{element.City}</td>
                            <td>{element.Country}</td>
                        </tr>
                    )
                })}
             </table>
        </React.Fragment>
    )
}
export default Customers;