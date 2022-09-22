import React from "react";
import {useDispatch,useSelector} from "react-redux";
import deleteActions from "./actions/deleteActions";
import insertAction from "./actions/insertAction";
import updateActions from "./actions/updateActions";
const Products = (props)=>{
    const dispatch = useDispatch();
    const remove = (id)=>{
        
        dispatch(deleteActions(id));
    }

    const add = ()=>{
        dispatch(insertAction({"p_id":333,"p_name":"p_three","p_cost":30000}));
    }

    const update = (id)=>{
        dispatch(updateActions({"p_id":id,"p_name":"product_three","p_cost":300000}));
    }

    return(
        <>
           <button onClick={add}>Add Record</button>
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
                            <td><button onClick={()=>update(element.p_id)}>Edit</button></td>
                            <td><button onClick={()=>remove(element.p_id)}>Delete</button></td>
                        </tr>
                    )
                })}
           </table>
        </>
    )
}
export default Products;