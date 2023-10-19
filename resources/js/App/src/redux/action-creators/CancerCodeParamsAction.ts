import {Dispatch} from "redux";
import {CancerCodeParamAction, CancerCodeParamActionTypes, CancerCodeParamTypes} from "../types/CancerCodeParamTypes";
import {axRequest} from "../../helpers/axiosHelper";


export const fetchCancerCodeParams = () => {
  return async (dispatch: Dispatch<CancerCodeParamAction>) => {
    try {
      dispatch({type: CancerCodeParamActionTypes.FETCH_CANCER_CODE_PARAMS});
      const response = await axRequest.get('api/cancer-code-params');
      dispatch({
        type: CancerCodeParamActionTypes.FETCH_CANCER_CODE_PARAMS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerCodeParamActionTypes.FETCH_CANCER_CODE_PARAMS_ERROR,
        payload: error
      });
    }
  }
}

export const createCancerCodeParam = (data: CancerCodeParamTypes) => {
  return async (dispatch: Dispatch<CancerCodeParamAction>) => {
    try {
      dispatch({type: CancerCodeParamActionTypes.CREATE_CANCER_CODE_PARAM});
      const response = await axRequest.post('api/cancer-code-param', data);
      dispatch({
        type: CancerCodeParamActionTypes.CREATE_CANCER_CODE_PARAM_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerCodeParamActionTypes.CREATE_CANCER_CODE_PARAM_ERROR,
        payload: error
      });
    }
  }
}

export const updateCancerCodeParam = (data: CancerCodeParamTypes) => {
  return async (dispatch: Dispatch<CancerCodeParamAction>) => {
    try {
      dispatch({type: CancerCodeParamActionTypes.UPDATE_CANCER_CODE_PARAM});
      const response = await axRequest.put('api/cancer-code-param', data);
      dispatch({
        type: CancerCodeParamActionTypes.UPDATE_CANCER_CODE_PARAM_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerCodeParamActionTypes.UPDATE_CANCER_CODE_PARAM_ERROR,
        payload: error
      });
    }
  }
}

export const deleteCancerCodeParam = (data: number) => {
  return async (dispatch: Dispatch<CancerCodeParamAction>) => {
    try {
      dispatch({type: CancerCodeParamActionTypes.DELETE_CANCER_CODE_PARAM});
      const response = await axRequest.delete(`api/cancer-code-param/${data}`);
      dispatch({
        type: CancerCodeParamActionTypes.DELETE_CANCER_CODE_PARAM_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerCodeParamActionTypes.DELETE_CANCER_CODE_PARAM_ERROR,
        payload: error
      });
    }
  }
}
