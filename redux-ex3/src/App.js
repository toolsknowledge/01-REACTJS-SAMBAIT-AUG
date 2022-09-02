import React from "react";
import {useSelector,useDispatch} from "react-redux";
//useSelector() hook, used to perform the subscription
//useDispatch() hook, used to perform the dispatch operation
function App() {
  const res = useSelector(state=>state);
  const dispatch = useDispatch();
  const deposit = ()=>{
      dispatch({type:"DEPOSIT",payload:1000});
  }
  const withdraw = ()=>{
      dispatch({type:"WITHDRAW",payload:500});
  }
  return (
    <div className="App">
        <h1>{JSON.stringify(res)}</h1>
        <button onClick={deposit}>Deposit</button>
        <button onClick={withdraw}>Withdraw</button>
    </div>
  );
}
export default App;
