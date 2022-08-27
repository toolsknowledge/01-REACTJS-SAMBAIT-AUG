//1) create store
//2) create state
//3) create reducer
//4) deploy reducer to store
const { createStore } = require("redux");
const initialState = {
    bal : 5000
};
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                bal : state.bal-action.payload
            }
        case "DEPOSIT":
            return{
                bal : state.bal+action.payload
            }
        default:
            return state;
    }
};
const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({type:"WITHDRAW",payload:1000});
store.dispatch({type:"DEPOSIT",payload:2000});
store.dispatch({type:"WITHDRAW",payload:2000});
store.dispatch({type:"DEPOSIT",payload:3000});