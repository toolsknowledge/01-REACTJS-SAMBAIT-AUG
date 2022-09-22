import axios from "axios";
const updateActions = (obj)=>{
    return async (dispatch)=>{
        try{
            const {data} = await axios.put("http://mernbackend-env.eba-yin2q8gu.ap-south-1.elasticbeanstalk.com/update",obj);
            dispatch({
                type : "UPDATE_SUCCESS",
                data : data,
                error : ""
            });
        }catch(err){
            dispatch({
                type : "UPDATE_FAIL",
                data : {},
                error : err.message
            });
        }
    }
}
export default updateActions;