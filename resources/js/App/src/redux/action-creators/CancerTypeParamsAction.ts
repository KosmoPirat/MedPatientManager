import {Dispatch} from "redux";
import {CancerTypeParamAction, CancerTypeParamActionTypes, CancerTypeParamTypes} from "../types/CancerTypeParamTypes";
import {axRequest} from "../../helpers/axiosHelper";


export const fetchCancerTypeParams = () => {
  return async (dispatch: Dispatch<CancerTypeParamAction>) => {
    try {
      dispatch({type: CancerTypeParamActionTypes.FETCH_CANCER_TYPE_PARAMS});
      const response = await axRequest.get('api/cancer-type-params');
      dispatch({
        type: CancerTypeParamActionTypes.FETCH_CANCER_TYPE_PARAMS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerTypeParamActionTypes.FETCH_CANCER_TYPE_PARAMS_ERROR,
        payload: error
      });
    }
  }
}

export const createCancerTypeParam = (data: CancerTypeParamTypes) => {
  return async (dispatch: Dispatch<CancerTypeParamAction>) => {
    try {
      dispatch({type: CancerTypeParamActionTypes.CREATE_CANCER_TYPE_PARAM});
      const response = await axRequest.post('api/cancer-type-param', data);
      dispatch({
        type: CancerTypeParamActionTypes.CREATE_CANCER_TYPE_PARAM_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerTypeParamActionTypes.CREATE_CANCER_TYPE_PARAM_ERROR,
        payload: error
      });
    }
  }
}

export const updateCancerTypeParam = (data: CancerTypeParamTypes) => {
  return async (dispatch: Dispatch<CancerTypeParamAction>) => {
    try {
      dispatch({type: CancerTypeParamActionTypes.UPDATE_CANCER_TYPE_PARAM});
      const response = await axRequest.put('api/cancer-type-param', data);
      dispatch({
        type: CancerTypeParamActionTypes.UPDATE_CANCER_TYPE_PARAM_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerTypeParamActionTypes.UPDATE_CANCER_TYPE_PARAM_ERROR,
        payload: error
      });
    }
  }
}

export const deleteCancerTypeParam = (data: number) => {
  return async (dispatch: Dispatch<CancerTypeParamAction>) => {
    try {
      dispatch({type: CancerTypeParamActionTypes.DELETE_CANCER_TYPE_PARAM});
      const response = await axRequest.delete(`api/cancer-type-param/${data}`);
      dispatch({
        type: CancerTypeParamActionTypes.DELETE_CANCER_TYPE_PARAM_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CancerTypeParamActionTypes.DELETE_CANCER_TYPE_PARAM_ERROR,
        payload: error
      });
    }
  }
}
