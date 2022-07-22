import axios from"axios";
import { API_DOMMAINE } from "../utility/app.constant";

 const  AXIOS_BASE=axios.create({

      baseURL:API_DOMMAINE,
      timeout:15000,
      headers:{"Access-Control-Allow-Origin":"*"}
      

})

/**
   * Service to post data
   * @param {url,data} data
   */
export const post_service= async (data)=>{
      let requestStatus={};
      try {
            let request=await AXIOS_BASE.post(data?.url,data?.data,{headers:{"Content-Type":"multipart/form-data"}})
           
              requestStatus={status:true,data:request?.data};
        } catch (error) {
            const {response:{status,data}}=error
      
            requestStatus = {status: false,data,code:status}
        }
         return requestStatus;
  }
 
  
  /**
   * Service to put data
   * @param {url,data} data
   */
  export const put_service= async (data)=>{
      let requestStatus={};
      try {
            let request=await AXIOS_BASE.put(data?.url,data?.data)
              requestStatus={status:true,data:request?.data};
        } catch (error) {
            const {response:{status,data}}=error
       
            requestStatus = {status: false, data,code:status}
        }
         return requestStatus;
  }
 /**
   * Service to get data
   * @param {url} data
   */
  export const get_service= async (data)=>{
      let requestStatus={};
      try {
            let request=await AXIOS_BASE.get(data?.url)
              requestStatus={status:true,data:request?.data};
        } catch (error) {
            const {response:{status,data}}=error
       
            requestStatus = {status: false,data,code:status}
        }
         return requestStatus;
  }

  /**
   * Service to delete
   * @param {url} data
   */
  export const delete_service= async (data)=>{
      let requestStatus={};
      try {
            let request=await AXIOS_BASE.delete(data?.url)
              requestStatus={status:true,data:request?.data};
        } catch (error) {
            const {response:{status,data}}=error
       
            requestStatus = {status: false, data,code:status}
        }
         return requestStatus;
  }

export default AXIOS_BASE;