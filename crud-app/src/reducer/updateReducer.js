const initialState = {
    data : {},
    error : ""
};
function updateReducer(state=initialState,action){
    switch(action.type){
        case "UPDATE_SUCCESS":
        case "UPDATE_FAIL":
            return{
                ...state,
                data : action.data,
                error : action.error
            }
        default:
            return state;
    }
}
export default updateReducer;