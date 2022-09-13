import axios from "axios";
const deleteActions = (id)=>{
    
    return async (dispatch)=>{
        try{
            const {data} = await axios.delete("http://localhost:8080/delete", {
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