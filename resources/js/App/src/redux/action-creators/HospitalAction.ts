import {Dispatch} from "redux";
import {axRequest} from "../../helpers/axiosHelper";
import {HospitalAction, HospitalActionTypes, HospitalTypes} from "../types/HospitalTypes";



export const fetchHospitals = () => {
  return async (dispatch: Dispatch<HospitalAction>) => {
    try {
      dispatch({type: HospitalActionTypes.FETCH_HOSPITAL});
      const response = await axRequest.get('api/hospitals');
      dispatch({
        type: HospitalActionTypes.FETCH_HOSPITAL_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: HospitalActionTypes.FETCH_HOSPITAL_ERROR,
        payload: error
      });
    }
  }
}

export const createHospital = (data: HospitalTypes) => {
  return async (dispatch: Dispatch<HospitalAction>) => {
    try {
      dispatch({type: HospitalActionTypes.CREATE_HOSPITAL});
      const response = await axRequest.post('api/hospital', data);
      dispatch({
        type: HospitalActionTypes.CREATE_HOSPITAL_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: HospitalActionTypes.CREATE_HOSPITAL_ERROR,
        payload: error
      });
    }
  }
}

export const updateHospital = (data: HospitalTypes) => {
  return async (dispatch: Dispatch<HospitalAction>) => {
    try {
      dispatch({type: HospitalActionTypes.UPDATE_HOSPITAL});
      const response = await axRequest.put('api/hospital', data);
      dispatch({
        type: HospitalActionTypes.UPDATE_HOSPITAL_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: HospitalActionTypes.UPDATE_HOSPITAL_ERROR,
        payload: error
      });
    }
  }
}

export const deleteHospital = (data: number) => {
  return async (dispatch: Dispatch<HospitalAction>) => {
    try {
      dispatch({type: HospitalActionTypes.DELETE_HOSPITAL});
      const response = await axRequest.delete(`api/hospital/${data}`);
      dispatch({
        type: HospitalActionTypes.DELETE_HOSPITAL_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: HospitalActionTypes.DELETE_HOSPITAL_ERROR,
        payload: error
      });
    }
  }
}
