import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import {Link,Route,Routes} from "react-router-dom";
function Main(){
    return(
        <React.Fragment>
            <Link to="/" style={{marginRight:100}}>Home</Link>
            <Link to="/about" style={{marginRight:100}}>About</Link>
            <Link to="/portfolio">Portfolio</Link>

            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
            </Routes>
        </React.Fragment>
    )
}
export default Main;