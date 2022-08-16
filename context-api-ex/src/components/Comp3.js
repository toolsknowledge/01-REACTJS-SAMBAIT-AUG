import React,{useContext} from "react";
import { globalSpace } from "../global/globalSpace";
function Comp3(){
    const str = useContext(globalSpace);
    return(
        <React.Fragment>
            <h1>{str}</h1>
        </React.Fragment>
    )
}
export default Comp3;