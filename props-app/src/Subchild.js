import React from "react";
function Subchild(props){
    const {key1,key2,key3} = props.obj;
    return(
        <React.Fragment>
            <h1>{props.str}</h1>
            <h1>{props.num}</h1>
            <h1>{JSON.stringify(props.flag)}</h1>
            <h1>{key1}...{key2}...{key3}</h1>
            <table>
                <tr>
                    <th>SNO</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                </tr>
                    {props.products.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.p_id}</td>
                                <td>{element.p_name}</td>
                                <td>{element.p_cost}</td>
                            </tr>
                        )
                    })}
                
            </table>
            <h1>{props.children}</h1>
        </React.Fragment>
    )
}
export default Subchild;