const initialState = {
    delete : "",
    error : ""
};
const deleteReducer = (state=initialState,action)=>{
    switch(action){
        case "DELETE_SUCCESS":
        case "DELETE_FAIL":
            return{
                ...state,
                delete : action.delete,
                error : action.error
            }
        default:
            return state;
    }
}
export default deleteReducer;