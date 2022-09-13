import React from "react";
import {useDispatch,useSelector} from "react-redux";
import deleteActions from "./actions/deleteActions";

const Products = (props)=>{
    const dispatch = useDispatch();
    const remove = (id)=>{
        
        dispatch(deleteActions(id));
    }
    return(
        <>
           <table border="1"
                  align="center"
                  cellPadding="10px"
                  cellSpacing="10">
                <tr>
                    <th>SNO</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {props.products.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                            <td><button>Edit</button></td>
                            <td><button onClick={()=>remove(element.p_id)}>Delete</button></td>
                        </tr>
                    )
                })}
           </table>
        </>
    )
}
export default Products;