//import createStore() function
//createStore() function used to create the Store
const { createStore } = require("redux");
//create initialState
const initialState = {
    age : 20
}
//create reducer
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age : state.age + action.payload
            }
        case "AGE_DOWN":
            return{
                ...state,
                age : state.age - action.payload
            }
        default:
                return state;
    }
}
//call the createStore()
const store = createStore(reducer);
//subscription
store.subscribe(()=>{
    console.log(store.getState());
});
//dispatch
store.dispatch({type:"AGE_UP",payload:1});
store.dispatch({type:"AGE_DOWN",payload:1});