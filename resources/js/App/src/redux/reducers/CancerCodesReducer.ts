import {CancerCodeAction, CancerCodeActionTypes, CancerCodeState} from '../types/CancerCodeTypes';
import {deleteCancerCodeFromList, updateCancerCodeFromList} from "../../helpers/reducersHelper";

const initialState: CancerCodeState = {
  cancerCodes: [],
  cancerCodeLoading: false,
  completeMessage: 'New Cancer Code added successfully',
  error: null,

};

export const CancerCodesReducer = (
  state  = initialState,
  action: CancerCodeAction
): CancerCodeState => {
  switch (action.type) {
    case CancerCodeActionTypes.FETCH_CANCER_CODES:
      return {...state, cancerCodeLoading: true};
    case CancerCodeActionTypes.FETCH_CANCER_CODES_SUCCESS:
      return {...state, cancerCodeLoading: false, cancerCodes: action.payload};
    case CancerCodeActionTypes.FETCH_CANCER_CODES_ERROR:
      return {...state, cancerCodeLoading: false, error: action.payload};

    case CancerCodeActionTypes.CREATE_CANCER_CODE:
      return {...state, cancerCodeLoading: true};
    case CancerCodeActionTypes.CREATE_CANCER_CODE_SUCCESS:
      return {...state, cancerCodeLoading: false, completeMessage: action.payload};
    case CancerCodeActionTypes.CREATE_CANCER_CODE_ERROR:
      return {...state, cancerCodeLoading: false, error: action.payload};

    case CancerCodeActionTypes.UPDATE_CANCER_CODE:
      return {...state, cancerCodeLoading: true};
    case CancerCodeActionTypes.UPDATE_CANCER_CODE_SUCCESS:
      return {
        ...state,
        cancerCodeLoading: false,
        cancerCodes: updateCancerCodeFromList(state.cancerCodes, action.payload),
        completeMessage: action.payload};
    case CancerCodeActionTypes.UPDATE_CANCER_CODE_ERROR:
      return {...state, cancerCodeLoading: false, error: action.payload};

    case CancerCodeActionTypes.DELETE_CANCER_CODE:
      return {...state, cancerCodeLoading: true};
    case CancerCodeActionTypes.DELETE_CANCER_CODE_SUCCESS:
      return {
        ...state,
        cancerCodeLoading: false,
        cancerCodes: deleteCancerCodeFromList(state.cancerCodes, action.payload),
        completeMessage: action.payload
      };
    case CancerCodeActionTypes.DELETE_CANCER_CODE_ERROR:
      return {...state, cancerCodeLoading: false, error: action.payload};

    default:
      return state;
  }
};
