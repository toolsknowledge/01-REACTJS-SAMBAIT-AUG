import React from "react";
import {useParams} from "react-router-dom";
function Dashboard(){
    const params = useParams();
    return(
        <React.Fragment>
            <h1>Dashboard....{params.uname}!</h1>
        </React.Fragment>
    )
}
export default Dashboard;