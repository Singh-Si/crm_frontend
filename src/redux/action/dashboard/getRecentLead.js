import axios from "axios";
import {
  RECENTLEAD_SUCCESS,
  RECENTLEAD_FAIL,
  RECENTLEAD_REQUEST
  } from "../../constant/Dashboard/recentLead";
  import config from '../../../config'
const getRecentLead = (token ) => {

    return async (dispatch) => {
      try {
        dispatch({ type:  RECENTLEAD_REQUEST });
        const data = await axios.get(`${config.API_URL}/dashboard/recent`, { headers:{ Authorization: `Bearer ${token}` }},);
        const recentLeadData = data.data;
        
        dispatch({ type: RECENTLEAD_SUCCESS, payload: recentLeadData });
      } catch (err) {
          dispatch({ type: RECENTLEAD_FAIL, payload:err});
       
        }
      }
    };
  
  export {getRecentLead}