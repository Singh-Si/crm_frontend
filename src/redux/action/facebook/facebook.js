import axios from "axios";
import {
  GetFacebook_FAIL,
  GetFacebook_REQUEST,
  GetFacebook_SUCCESS
  } from "../../constant/facebook/facebook";
  import config from '../../../config'

const getFacebook = (token) => {
    return async (dispatch) => {
      try {
        dispatch({ type:  GetFacebook_REQUEST });
        const data = await axios.get(`${config.API_URL}/leadsource/fetch/campaign/leads`,{headers:{ Authorization: `Bearer ${token}` }});
        const facebookData = data.data;
        dispatch({ type: GetFacebook_SUCCESS, payload: facebookData });
      } catch (err) {
          dispatch({ type: GetFacebook_FAIL, payload:err});
       
        }
      }
    };
  
  export {getFacebook}