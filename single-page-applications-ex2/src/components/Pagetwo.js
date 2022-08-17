import React from "react";
import {Link,Outlet} from "react-router-dom";
function Pagetwo(){
    return(
        <React.Fragment>
            <h1>Hello_2....!</h1>
            <Link to="page_two/child_three" style={{marginRight:100}}>Child_Three</Link>
            <Link to="page_two/child_four">Child_Four</Link>
            <br></br><br></br>
            <Outlet></Outlet>
        </React.Fragment>
    )
}
export default Pagetwo;