//import axios
//axios used to make rest api calls
//arrow function behaves like action
//inner arrow function used to connect to reducer
//dispatch object used to carry the data from action to reducer
//axios internally returns promises
//async and await keywords are used to consume promises
import axios from "axios";
const actions = ()=>{
    console.log();
    return async (dispatch,getState)=>{
            //before hit server
            //consider success response
            //consider error response
            
            dispatch({
                type : "GET_PRODUCTS",
                loading : false,
                products : [],
                error : ""
            })
            try{
                const {data} = await axios.get("http://Mernbackend-env.eba-yin2q8gu.ap-south-1.elasticbeanstalk.com/products");
                dispatch({
                    type : "GET_PRODUCTS_SUCCESS",
                    loading : true,
                    products : data,
                    error : ""
                })
            }catch(err){
                dispatch({
                    type : "GET_PRODUCTS_FAIL",
                    loading : true,
                    products : [],
                    error : err.message
                })
            }


    };
};
export default actions;