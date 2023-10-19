import {HospitalAction, HospitalActionTypes, HospitalState} from '../types/HospitalTypes';

import { deleteHospitalFromList, updateHospitalFromList } from "../../helpers/reducersHelper";

const initialState: HospitalState = {
  hospitals: [],
  hospitalLoading: false,
  error: null,
  completeMessage: "",
};

export const HospitalReducer = (
  state  = initialState,
  action: HospitalAction
): HospitalState => {
  switch (action.type) {
    case HospitalActionTypes.FETCH_HOSPITAL:
      return {...state, hospitalLoading: true};
    case HospitalActionTypes.FETCH_HOSPITAL_SUCCESS:
      return {...state, hospitalLoading: false, hospitals: action.payload};
    case HospitalActionTypes.FETCH_HOSPITAL_ERROR:
      return {...state, hospitalLoading: false, error: action.payload};

    case HospitalActionTypes.CREATE_HOSPITAL:
      return {...state, hospitalLoading: true};
    case HospitalActionTypes.CREATE_HOSPITAL_SUCCESS:
      return {...state, hospitalLoading: false, hospitals: [...state.hospitals, action.payload.data], completeMessage: action.payload.message};
    case HospitalActionTypes.CREATE_HOSPITAL_ERROR:
      return {...state, hospitalLoading: false, error: action.payload};

    case HospitalActionTypes.UPDATE_HOSPITAL:
      return {...state, hospitalLoading: true};
    case HospitalActionTypes.UPDATE_HOSPITAL_SUCCESS:
      return {
        ...state,
        hospitalLoading: false,
        hospitals: updateHospitalFromList(state.hospitals, action.payload.data),
        completeMessage: action.payload.message};
    case HospitalActionTypes.UPDATE_HOSPITAL_ERROR:
      return {...state, hospitalLoading: false, error: action.payload};

    case HospitalActionTypes.DELETE_HOSPITAL:
      return {...state, hospitalLoading: true};
    case HospitalActionTypes.DELETE_HOSPITAL_SUCCESS:
      return {
        ...state,
        hospitalLoading: false,
        hospitals: deleteHospitalFromList(state.hospitals, action.payload),
        completeMessage: action.payload,
      };
    case HospitalActionTypes.DELETE_HOSPITAL_ERROR:
      return {...state, hospitalLoading: false, error: action.payload};

    default:
      return state;
  }
};
