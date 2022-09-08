import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import actions from "./actions/actions";
import Loading from "./Loading";
import Error from "./Error";
import Products from "./Products";
const App = ()=>{
    const dispatch = useDispatch();
    const result = useSelector(state=>state);
    const {loading,products,error} = result;
    
    useEffect(()=>{
      dispatch(actions());
    },[]);
    return(
      <>
        {
          error != "" ?(<Error>{error}</Error>):(loading?(<Products products={products}></Products>):(<Loading></Loading>))
        }
        
      </>
    )
}
export default App;