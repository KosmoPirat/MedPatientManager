import {CancerTypeParamAction, CancerTypeParamActionTypes, CancerTypeParamState} from '../types/CancerTypeParamTypes';
import {deleteCancerTypeParamFromList, updateCancerTypeParamFromList} from "../../helpers/reducersHelper";

const initialState: CancerTypeParamState = {
  cancerTypeParams: [],
  cancerTypeParamLoading: false,
  completeMessage: 'New Cancer Type Param added successfully',
  error: null,

};

export const CancerTypeParamsReducer = (
  state  = initialState,
  action: CancerTypeParamAction
): CancerTypeParamState => {
  switch (action.type) {
    case CancerTypeParamActionTypes.FETCH_CANCER_TYPE_PARAMS:
      return {...state, cancerTypeParamLoading: true};
    case CancerTypeParamActionTypes.FETCH_CANCER_TYPE_PARAMS_SUCCESS:
      return {...state, cancerTypeParamLoading: false, cancerTypeParams: action.payload};
    case CancerTypeParamActionTypes.FETCH_CANCER_TYPE_PARAMS_ERROR:
      return {...state, cancerTypeParamLoading: false, error: action.payload};

    case CancerTypeParamActionTypes.CREATE_CANCER_TYPE_PARAM:
      return {...state, cancerTypeParamLoading: true};
    case CancerTypeParamActionTypes.CREATE_CANCER_TYPE_PARAM_SUCCESS:
      return {...state, cancerTypeParamLoading: false, completeMessage: action.payload};
    case CancerTypeParamActionTypes.CREATE_CANCER_TYPE_PARAM_ERROR:
      return {...state, cancerTypeParamLoading: false, error: action.payload};

    case CancerTypeParamActionTypes.UPDATE_CANCER_TYPE_PARAM:
      return {...state, cancerTypeParamLoading: true};
    case CancerTypeParamActionTypes.UPDATE_CANCER_TYPE_PARAM_SUCCESS:
      return {
        ...state,
        cancerTypeParamLoading: false,
        cancerTypeParams: updateCancerTypeParamFromList(state.cancerTypeParams, action.payload),
        completeMessage: action.payload};
    case CancerTypeParamActionTypes.UPDATE_CANCER_TYPE_PARAM_ERROR:
      return {...state, cancerTypeParamLoading: false, error: action.payload};

    case CancerTypeParamActionTypes.DELETE_CANCER_TYPE_PARAM:
      return {...state, cancerTypeParamLoading: true};
    case CancerTypeParamActionTypes.DELETE_CANCER_TYPE_PARAM_SUCCESS:
      return {
        ...state,
        cancerTypeParamLoading: false,
        cancerTypeParams: deleteCancerTypeParamFromList(state.cancerTypeParams, action.payload),
        completeMessage: action.payload
      };
    case CancerTypeParamActionTypes.DELETE_CANCER_TYPE_PARAM_ERROR:
      return {...state, cancerTypeParamLoading: false, error: action.payload};

    default:
      return state;
  }
};
