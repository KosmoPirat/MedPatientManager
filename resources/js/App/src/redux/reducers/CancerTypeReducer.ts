import {CancerTypeAction, CancerTypeActionTypes, CancerTypeState} from '../types/CancerTypeTypes';

const initialState: CancerTypeState = {
  cancerTypes: [],
  cancerTypeLoading: false,
  error: null,

};

export const CancerTypeReducer = (
  state  = initialState,
  action: CancerTypeAction
): CancerTypeState => {
  switch (action.type) {
    case CancerTypeActionTypes.FETCH_CANCER_TYPES:
      return {...state, cancerTypeLoading: true};
    case CancerTypeActionTypes.FETCH_CANCER_TYPES_SUCCESS:
      return {...state, cancerTypeLoading: false, cancerTypes: action.payload};
    case CancerTypeActionTypes.FETCH_CANCER_TYPES_ERROR:
      return {...state, cancerTypeLoading: false, error: action.payload};

    default:
      return state;
  }
};
