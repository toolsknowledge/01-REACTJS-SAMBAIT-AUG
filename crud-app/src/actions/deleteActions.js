import axios from "axios";
const deleteActions = (id)=>{
    
    return async (dispatch,getState)=>{
        console.log(getState().reducer2);
        try{
            const {data} = await axios.delete("http://mernbackend-env.eba-yin2q8gu.ap-south-1.elasticbeanstalk.com/delete", {
                headers: {
                },
                data: {
                  "p_id": id
                }
              });
            dispatch({
                type : "DELETE_SUCCESS",
                delete : "success",
                error : ""
            })
        }catch(err){
            dispatch({
                type : "DELETE_FAIL",
                delete : "fail",
                error : err.message
            })
        }
    }
}
export default deleteActions;