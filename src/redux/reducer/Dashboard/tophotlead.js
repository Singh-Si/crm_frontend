import {
    TOPHOTLEAD_FAIL,
    TOPHOTLEAD_REQUEST,
    TOPHOTLEAD_SUCCESS
    
   
  } from "../../constant/Dashboard/tophotlead";
  const initialState = {
    loading: false,
   
  };
  const topHotLeadReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case TOPHOTLEAD_REQUEST:
        return { ...state, loading: true };
      case TOPHOTLEAD_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case TOPHOTLEAD_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export { topHotLeadReducer };
  