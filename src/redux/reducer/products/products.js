import {
    PRODUCTS_FAIL,
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
   
  } from "../../constant/products/products";
  
  const token = localStorage.getItem("token") || "";
  const initialState = {
    loading: false,
  };
  
  const fetchProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case PRODUCTS_REQUEST:
        return { ...state, loading: true };
      case PRODUCTS_SUCCESS :
        return { ...state, loading: false, userInfo: action.payload };
      case PRODUCTS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export { fetchProductsReducer };
  