import React,{useState} from "react";
const State2 = ()=>{
    const [obj,setObj] = useState({"p_id":111,"p_name":"p_one","p_cost":10000});
    const [arr,setArr] = useState([10,20,30,40,50]);
    const [products,setProducts] = useState([{"p_id":111,"p_name":"shirt1","p_cost":"$100.00","p_image":"https://mernbkt.s3.us-west-2.amazonaws.com/shirt1.jpg"},
              {"p_id":222,"p_name":"shirt2","p_cost":"$200.00","p_image":"https://mernbkt.s3.us-west-2.amazonaws.com/shirt2.jpg"},
              {"p_id":333,"p_name":"shirt3","p_cost":"$300.00","p_image":"https://mernbkt.s3.us-west-2.amazonaws.com/shirt3.jpg"},
              {"p_id":444,"p_name":"pant1","p_cost":"$400.00","p_image":"https://mernbkt.s3.us-west-2.amazonaws.com/pant1.jpg"},
              {"p_id":555,"p_name":"pant2","p_cost":"$500.00","p_image":"https://mernbkt.s3.us-west-2.amazonaws.com/pant2.jpg"},
              {"p_id":666,"p_name":"pant3","p_cost":"$600.00","p_image":"https://mernbkt.s3.us-west-2.amazonaws.com/pant3.jpg"}]);
    return(
        <React.Fragment>
            <h1>{obj.p_id}....{obj.p_name}....{obj.p_cost}</h1>
            {
                arr.map((element,index)=>{
                    return(<h1 key={index}>{element}</h1>)
                })  
            }
            <hr></hr>
            <table border={"1"}
                   align="center">
                <tr>
                    <th>SNO</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                    <th>P_IMAGE</th>
                </tr>
            
            {
                products.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                            <td><img src={element.p_image} width="100"></img></td>
                        </tr>
                    )
                })
            }
            </table>

        </React.Fragment>
    )
};
export default State2;