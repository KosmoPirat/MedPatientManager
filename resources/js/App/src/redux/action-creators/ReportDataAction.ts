import {Dispatch} from "redux";
import {ReportDataAction, ReportDataActionTypes} from "../types/ReportDataTypes";
import {axRequest} from "../../helpers/axiosHelper";



export const fetchReportData = () => {
  return async (dispatch: Dispatch<ReportDataAction>) => {
    try {
      dispatch({type: ReportDataActionTypes.FETCH_REPORT_DATA});
      const response = await axRequest.get('api/report-data');
      dispatch({
        type: ReportDataActionTypes.FETCH_REPORT_DATA_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ReportDataActionTypes.FETCH_REPORT_DATA_ERROR,
        payload: error
      });
    }
  }
}

export const fetchReportDataByUser = (data: number) => {
  return async (dispatch: Dispatch<ReportDataAction>) => {
    try {
      dispatch({type: ReportDataActionTypes.FETCH_REPORT_DATA_BY_USER});
      const response = await axRequest.get(`api/report-data/${data}`);
      dispatch({
        type: ReportDataActionTypes.FETCH_REPORT_DATA_BY_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ReportDataActionTypes.FETCH_REPORT_DATA_BY_USER_ERROR,
        payload: error
      });
    }
  }
}

export const createReportData = (data: any) => {
  return async (dispatch: Dispatch<ReportDataAction>) => {
    try {
      dispatch({type: ReportDataActionTypes.CREATE_REPORT_DATA});
      const response = await axRequest.post(`api/create-report-data`,data, { headers: {"Content-Type": "multipart/form-data"} });
      dispatch({
        type: ReportDataActionTypes.CREATE_REPORT_DATA_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ReportDataActionTypes.CREATE_REPORT_DATA_ERROR,
        payload: error
      });
    }
  }
}

export const updateReportData = (data: any) => {
  return async (dispatch: Dispatch<ReportDataAction>) => {
    try {
      dispatch({type: ReportDataActionTypes.UPDATE_REPORT_DATA});
      const response = await axRequest.post(`api/update-report-data`,data);
      dispatch({
        type: ReportDataActionTypes.UPDATE_REPORT_DATA_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ReportDataActionTypes.UPDATE_REPORT_DATA_ERROR,
        payload: error
      });
    }
  }
}

export const deleteReportData = (id: number) => {
  return async (dispatch: Dispatch<ReportDataAction>) => {
    try {
      dispatch({type: ReportDataActionTypes.DELETE_REPORT_DATA});
      const response = await axRequest.delete(`api/delete-report-data/${id}`);
      dispatch({
        type: ReportDataActionTypes.DELETE_REPORT_DATA_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ReportDataActionTypes.DELETE_REPORT_DATA_ERROR,
        payload: error
      });
    }
  }
}

export const toggleIsAddDataStatus = () => {
  return  (dispatch: Dispatch<ReportDataAction>) => {
    dispatch({type: ReportDataActionTypes.TOGGLE_IS_ADD_DATA_STATUS});
  }
}

export const toggleIsUpdateDataStatus = () => {
  return  (dispatch: Dispatch<ReportDataAction>) => {
    dispatch({type: ReportDataActionTypes.TOGGLE_IS_UPDATE_DATA_STATUS});
  }
}

export const toggleReportDataVisibility = () => {
  return  (dispatch: Dispatch<ReportDataAction>) => {
    dispatch({type: ReportDataActionTypes.TOGGLE_REPORT_DATA_VISIBILITY});
  }
}
