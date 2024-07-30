import axios from "axios";
import {
    PRODUCTS_FAIL,
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
} from "../../constant/products/products";
import config from '../../../config'

const addProducts = (token , data ) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PRODUCTS_REQUEST });
            const data = await axios.post (`${config.API_URL}/product/add`,[data] , { headers: { Authorization: `Bearer ${token}` } });
            const companyData = data.data;
            dispatch({ type: PRODUCTS_SUCCESS, payload: companyData });
        } catch (err) {
            dispatch({ type: PRODUCTS_FAIL, payload: err });

        }
    }
};
const fetchProducts = (token) => {
    return async (dispatch) => {
      try {
        dispatch({ type: PRODUCTS_REQUEST });
        const data = await axios.get(`${config.API_URL}/product/fetch`, { headers: { Authorization: `Bearer ${token}` }});
        const companyData = data.data;
        dispatch({ type: PRODUCTS_SUCCESS, payload: companyData });
      } catch (err) {
          dispatch({ type: PRODUCTS_FAIL, payload:err});
       
        }
      }
    };
export { addProducts ,fetchProducts }