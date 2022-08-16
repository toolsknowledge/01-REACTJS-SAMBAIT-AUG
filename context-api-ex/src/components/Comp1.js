import React from "react";
import { globalSpace } from "../global/globalSpace";
import Comp2 from "./Comp2";
function Comp1(){
    return(
        <React.Fragment>
            <globalSpace.Provider value="Hello">
                <Comp2></Comp2>  
            </globalSpace.Provider>
        </React.Fragment>
    )
}
export default Comp1;