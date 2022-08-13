import React from "react";
import Subchild from "./Subchild";
function Child(props){
    return(
        <React.Fragment>
            <Subchild {...props}></Subchild>            
        </React.Fragment>
    )
}
export default Child;