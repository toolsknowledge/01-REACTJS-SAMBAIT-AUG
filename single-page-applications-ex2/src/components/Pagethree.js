import React from "react";
import {Link,Outlet} from "react-router-dom";
function Pagethree(){
    return(
        <React.Fragment>
            <h1>Hello_3....!</h1>
            <Link to="page_three/child_five" style={{marginRight:100}}>Child_Five</Link>
            <Link to="page_three/child_six">Child_Six</Link>
            <br></br><br></br>
            <Outlet></Outlet>
        </React.Fragment>
    )
}
export default Pagethree;