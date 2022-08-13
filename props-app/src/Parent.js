import React,{useState} from "react";
import Child from "./Child";
function Parent(){
    const str = useState("Hello");
    const num = useState(100);
    const [flag] = useState(true);
    const [obj] = useState({"key1":"Hello_1",
              "key2":"Hello_2",
              "key3":"Hello_3"});
    const [products]=useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
              {"p_id":222,"p_name":"p_two","p_cost":20000},
              {"p_id":333,"p_name":"p_three","p_cost":30000},
              {"p_id":444,"p_name":"p_four","p_cost":40000},
              {"p_id":555,"p_name":"p_five","p_cost":50000}]);
    return(
        <React.Fragment>
            <Child str={str} 
                   num={num}
                   flag={flag}
                   obj={obj}
                   products={products}>
                    ReactJS
            </Child>

        </React.Fragment>
    )
}
export default Parent;