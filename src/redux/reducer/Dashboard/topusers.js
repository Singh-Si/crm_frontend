import {
    TOPUSERS_FAIL,
    TOPUSERS_REQUEST,
    TOPUSERS_SUCCESS
   
  } from "../../constant/Dashboard/topusers";
  const initialState = {
    loading: false,
   
  };
  const getTopUsersReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case TOPUSERS_REQUEST:
        return { ...state, loading: true };
      case TOPUSERS_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case TOPUSERS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export { getTopUsersReducer };
  