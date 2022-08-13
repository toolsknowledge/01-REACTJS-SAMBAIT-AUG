import React from "react";
function Child(props){
    const key1 = props.key1;
    const func_two = ()=>{
        console.log("Hello");
    }
    const my_key = props.key1?key1:func_two
    return(
        <React.Fragment>
            <button onClick={()=>my_key("Hello_1","Hello_2","Hello_3")}>
                ChildToParent
                </button>
        </React.Fragment>
    )
}
export default Child;