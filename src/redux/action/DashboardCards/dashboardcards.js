import axios from "axios";
import {
  CARD_SUCCESS,
  CARD_FAIL,
  CARD_REQUEST
  } from "../../constant/Dashboard/dashboardCards";
  import config from '../../../config'

const dashboardcards = (token ,selectedValue) => {
  // const filter =selectedValue===undefined ? 'today':  selectedValue   ;
  const filter = selectedValue ; 
    return async (dispatch) => {
       if(selectedValue){
      try {
        dispatch({ type:  CARD_REQUEST });
        const data = await axios.get(`${config.API_URL}/dashboard/card`, 
        
        {params:{filter: filter} , headers:{ Authorization: `Bearer ${token}` }},
        
        );
        const dashcardData = data.data;
        dispatch({ type: CARD_SUCCESS, payload: dashcardData });
      } catch (err) {
          dispatch({ type: CARD_FAIL, payload:err});
       
        }
      }
    } 
    };
  
  export {dashboardcards}