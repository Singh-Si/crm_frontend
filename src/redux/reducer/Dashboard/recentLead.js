import {
    RECENTLEAD_FAIL,
    RECENTLEAD_REQUEST,
    RECENTLEAD_SUCCESS
   
  } from "../../constant/Dashboard/recentLead";
  const initialState = {
    loading: false,
   
  };
  const getRecentLeadReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case RECENTLEAD_REQUEST:
        return { ...state, loading: true };
      case RECENTLEAD_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case RECENTLEAD_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export { getRecentLeadReducer };
  