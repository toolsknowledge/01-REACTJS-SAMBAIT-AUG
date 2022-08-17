import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./Error";
import {Route,Routes} from "react-router-dom";
function Master(){
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/dashboard/:uname" element={<Dashboard></Dashboard>}></Route>
                <Route path="/error" element={<Error></Error>}></Route>
            </Routes>
        </React.Fragment>
    )
}
export default Master;