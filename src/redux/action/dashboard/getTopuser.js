import axios from "axios";
import {
  TOPUSERS_SUCCESS,
  TOPUSERS_FAIL,
  TOPUSERS_REQUEST
  } from "../../constant/Dashboard/topusers.js";
  import config from '../../../config'

const getTopUsers = (token ) => {

    return async (dispatch) => {
      try {
        dispatch({ type:  TOPUSERS_REQUEST });
        const data = await axios.get(`${config.API_URL}/dashboard/top/users`, { headers:{ Authorization: `Bearer ${token}` }},);
        const topUserdata = data.data;
        
        dispatch({ type: TOPUSERS_SUCCESS, payload: topUserdata });
      } catch (err) {
          dispatch({ type: TOPUSERS_FAIL, payload:err});
       
        }
      }
    };
  
  export {getTopUsers}