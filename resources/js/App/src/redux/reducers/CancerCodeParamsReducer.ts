import {CancerCodeParamAction, CancerCodeParamActionTypes, CancerCodeParamState} from '../types/CancerCodeParamTypes';
import {deleteCancerCodeParamFromList, updateCancerCodeParamFromList} from "../../helpers/reducersHelper";

const initialState: CancerCodeParamState = {
  cancerCodeParams: [],
  cancerCodeParamLoading: false,
  completeMessage: 'New Cancer Code Param added successfully',
  error: null,

};

export const CancerCodeParamsReducer = (
  state  = initialState,
  action: CancerCodeParamAction
): CancerCodeParamState => {
  switch (action.type) {
    case CancerCodeParamActionTypes.FETCH_CANCER_CODE_PARAMS:
      return {...state, cancerCodeParamLoading: true};
    case CancerCodeParamActionTypes.FETCH_CANCER_CODE_PARAMS_SUCCESS:
      return {...state, cancerCodeParamLoading: false, cancerCodeParams: action.payload};
    case CancerCodeParamActionTypes.FETCH_CANCER_CODE_PARAMS_ERROR:
      return {...state, cancerCodeParamLoading: false, error: action.payload};

    case CancerCodeParamActionTypes.CREATE_CANCER_CODE_PARAM:
      return {...state, cancerCodeParamLoading: true};
    case CancerCodeParamActionTypes.CREATE_CANCER_CODE_PARAM_SUCCESS:
      return {...state, cancerCodeParamLoading: false, completeMessage: action.payload};
    case CancerCodeParamActionTypes.CREATE_CANCER_CODE_PARAM_ERROR:
      return {...state, cancerCodeParamLoading: false, error: action.payload};

    case CancerCodeParamActionTypes.UPDATE_CANCER_CODE_PARAM:
      return {...state, cancerCodeParamLoading: true};
    case CancerCodeParamActionTypes.UPDATE_CANCER_CODE_PARAM_SUCCESS:
      return {
        ...state,
        cancerCodeParamLoading: false,
        cancerCodeParams: updateCancerCodeParamFromList(state.cancerCodeParams, action.payload),
        completeMessage: action.payload};
    case CancerCodeParamActionTypes.UPDATE_CANCER_CODE_PARAM_ERROR:
      return {...state, cancerCodeParamLoading: false, error: action.payload};

    case CancerCodeParamActionTypes.DELETE_CANCER_CODE_PARAM:
      return {...state, cancerCodeParamLoading: true};
    case CancerCodeParamActionTypes.DELETE_CANCER_CODE_PARAM_SUCCESS:
      return {
        ...state,
        cancerCodeParamLoading: false,
        cancerCodeParams: deleteCancerCodeParamFromList(state.cancerCodeParams, action.payload),
        completeMessage: action.payload
      };
    case CancerCodeParamActionTypes.DELETE_CANCER_CODE_PARAM_ERROR:
      return {...state, cancerCodeParamLoading: false, error: action.payload};

    default:
      return state;
  }
};
