import axios from "axios";
import {
  TOPHOTLEAD_SUCCESS,
  TOPHOTLEAD_FAIL,
  TOPHOTLEAD_REQUEST
  } from "../../constant/Dashboard/tophotlead";
  import config from '../../../config'

// const getTopHotLead = (token ) => {

//     return async (dispatch) => {
//       try {
//         dispatch({ type:  TOPHOTLEAD_REQUEST });
//         const data = await axios.get(`${config.API_URL}/dashboard/top/hot`, { headers:{ Authorization: `Bearer ${token}` }},);
//         const cardData = data?.data;
        
//         dispatch({ type: TOPHOTLEAD_SUCCESS, payload: cardData });
//       } catch (err) {
//           dispatch({ type: TOPHOTLEAD_FAIL, payload:err});
       
//         }
//       }
//     };
const getTopHotLead = (token ) => {

  return async (dispatch) => {
    try {
      dispatch({ type:  TOPHOTLEAD_REQUEST });
      const data = await axios.get(`${config.API_URL}/dashboard/top/hot`, { headers:{ Authorization: `Bearer ${token}` }},);
      const tophotleadData = data.data;
      
      dispatch({ type: TOPHOTLEAD_SUCCESS, payload: tophotleadData });
    } catch (err) {
        dispatch({ type: TOPHOTLEAD_FAIL, payload:err});
     
      }
    }
  };
  export {getTopHotLead}