const initialState = {
    status : {},
    error : ""
}
function insertReducer(state=initialState,action){
    switch(action.type){
        case "RECORD_INSERT_SUCCESS":
        case "RECORD_INSERT_FAIL":
            return{
                ...state,
                status : action.status,
                error : action.error
            }
        default:
            return state;
    }
}
export default insertReducer;