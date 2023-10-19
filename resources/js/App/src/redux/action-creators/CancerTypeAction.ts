import {Dispatch} from "redux";
import {CancerTypeAction, CancerTypeActionTypes} from "../types/CancerTypeTypes";
import {axRequest} from "../../helpers/axiosHelper";



export const fetchCancerTypes = () => {
  return async (dispatch: Dispatch<CancerTypeAction>) => {
    try {
      dispatch({type: CancerTypeActionTypes.FETCH_CANCER_TYPES});
      const response = await axRequest.get('api/cancer-types');
      dispatch({
        type: CancerTypeActionTypes.FETCH_CANCER_TYPES_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerTypeActionTypes.FETCH_CANCER_TYPES_ERROR,
        payload: error
      });
    }
  }
}
