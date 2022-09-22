import axios from "axios";
const insertAction = (obj)=>{
    return async (dispatch)=>{
        try{
            const {data} = await axios.post("http://mernbackend-env.eba-yin2q8gu.ap-south-1.elasticbeanstalk.com/insert",obj);
            dispatch({
                type : "RECORD_INSERT_SUCCESS",
                status : data,
                error : ""
            })
        }catch(err){
            dispatch({
                type : "RECORD_INSERT_FAIL",
                status:{},
                error:err.message
            })
        }
    }
}
export default insertAction;