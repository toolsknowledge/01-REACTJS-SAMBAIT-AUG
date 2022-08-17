import React from "react";
import {Link,Route,Routes} from "react-router-dom";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import Childone from "./Childone";
import Childtwo from "./Childtwo";
import Childthree from "./Childthree";
import Childfour from "./Childfour";
import Childfive from "./Childfive";
import Childsix from "./Childsix";
function Master(){
    return(
        <React.Fragment>
            <Link to="/page_one" style={{marginRight:200}}>Page_One</Link>
            <Link to="/page_two" style={{marginRight:200}}>Page_Two</Link>
            <Link to="/page_three">Page_Three</Link>

            <Routes>
            <Route path="/page_one" element={<Pageone></Pageone>}>
                <Route path="page_one/child_one" element={<Childone></Childone>}></Route>
                <Route path="page_one/child_two" element={<Childtwo></Childtwo>}></Route>
            </Route>
            <Route path="/page_two" element={<Pagetwo></Pagetwo>}>
                <Route path="page_two/child_three" element={<Childthree></Childthree>}></Route>
                <Route path="page_two/child_four" element={<Childfour></Childfour>}></Route>
            </Route>
            <Route path="/page_three" element={<Pagethree></Pagethree>}>
                <Route path="page_three/child_five" element={<Childfive></Childfive>}></Route>
                <Route path="page_three/child_six" element={<Childsix></Childsix>}></Route>
            </Route>
            </Routes>
        </React.Fragment>
    )
}
export default Master;