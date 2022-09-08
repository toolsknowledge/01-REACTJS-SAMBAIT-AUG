import React from "react";
const Error = (props)=>{
    return(
        <>
            <div className="error">
                <span>{props.children}</span>
            </div>
        </>
    )
}
export default Error;