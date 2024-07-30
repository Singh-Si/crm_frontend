import {
    GetFacebook_FAIL,
    GetFacebook_REQUEST,
    GetFacebook_SUCCESS,
  } from "../../constant/facebook/facebook";

  const initialState = {
    loading: false,
   
  };
  const facebookLeadReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case GetFacebook_REQUEST:
        return { ...state, loading: true };
      case GetFacebook_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case GetFacebook_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export { facebookLeadReducer };
  