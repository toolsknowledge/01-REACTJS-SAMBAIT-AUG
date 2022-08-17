import React from "react";
import {Link,Outlet} from "react-router-dom";
function Pageone(){
    return(
        <React.Fragment>
            <h1>Hello....!</h1>
            <Link to="page_one/child_one" style={{marginRight:100}}>Child_One</Link>
            <Link to="page_one/child_two">Child_Two</Link>
            <br></br><br></br>
            <Outlet></Outlet>
        </React.Fragment>
    )
}
export default Pageone;