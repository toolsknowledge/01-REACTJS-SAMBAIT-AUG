const initialState = {
    loading : false,
    products:[],
    error:""
};
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_PRODUCTS":
        case "GET_PRODUCTS_SUCCESS":
        case "GET_PRODUCTS_FAIL":
            return{
                ...state,
                loading:action.loading,
                products:action.products,
                error:action.error
            }
        default:
            return state;
    }
}
export default reducer;