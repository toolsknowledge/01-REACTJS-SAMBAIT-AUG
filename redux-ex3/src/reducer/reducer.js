const initialState = {
    bal : 5000
};
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "DEPOSIT":
            return{
                ...state,
                bal : state.bal+action.payload
            }
        case "WITHDRAW":
            return{
                ...state,
                bal : state.bal - action.payload
            }
        default:
            return state;
    }
}
export default reducer;