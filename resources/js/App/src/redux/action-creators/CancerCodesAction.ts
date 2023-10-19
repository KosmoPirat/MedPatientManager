import {Dispatch} from "redux";
import {CancerCodeAction, CancerCodeActionTypes, CancerCodeTypes} from "../types/CancerCodeTypes";
import {axRequest} from "../../helpers/axiosHelper";


export const fetchCancerCodes = () => {
  return async (dispatch: Dispatch<CancerCodeAction>) => {
    try {
      dispatch({type: CancerCodeActionTypes.FETCH_CANCER_CODES});
      const response = await axRequest.get('api/cancer-codes');
      dispatch({
        type: CancerCodeActionTypes.FETCH_CANCER_CODES_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerCodeActionTypes.FETCH_CANCER_CODES_ERROR,
        payload: error
      });
    }
  }
}

export const createCancerCode = (data: CancerCodeTypes) => {
  return async (dispatch: Dispatch<CancerCodeAction>) => {
    try {
      dispatch({type: CancerCodeActionTypes.CREATE_CANCER_CODE});
      const response = await axRequest.post('api/cancer-code', data);
      dispatch({
        type: CancerCodeActionTypes.CREATE_CANCER_CODE_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerCodeActionTypes.CREATE_CANCER_CODE_ERROR,
        payload: error
      });
    }
  }
}

export const updateCancerCode = (data: CancerCodeTypes) => {
  return async (dispatch: Dispatch<CancerCodeAction>) => {
    try {
      dispatch({type: CancerCodeActionTypes.UPDATE_CANCER_CODE});
      const response = await axRequest.put('api/cancer-code', data);
      dispatch({
        type: CancerCodeActionTypes.UPDATE_CANCER_CODE_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerCodeActionTypes.UPDATE_CANCER_CODE_ERROR,
        payload: error
      });
    }
  }
}

export const deleteCancerCode = (data: number) => {
  return async (dispatch: Dispatch<CancerCodeAction>) => {
    try {
      dispatch({type: CancerCodeActionTypes.DELETE_CANCER_CODE});
      const response = await axRequest.delete(`api/cancer-code/${data}`);
      dispatch({
        type: CancerCodeActionTypes.DELETE_CANCER_CODE_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerCodeActionTypes.DELETE_CANCER_CODE_ERROR,
        payload: error
      });
    }
  }
}
