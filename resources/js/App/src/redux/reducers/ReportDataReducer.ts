import {ReportDataAction, ReportDataActionTypes, ReportDataState} from '../types/ReportDataTypes';
import {addToListIfExist, deleteReportDataFromList, updateReportDataFromList} from "../../helpers/reducersHelper";

const initialState: ReportDataState = {
  data: [],
  isReportDataVisible: false,
  reportDataLoading: false,
  isAddDataStatus: false,
  isUpdateDataStatus: false,
  error: null,

};

export const ReportDataReducer = (
  state  = initialState,
  action: ReportDataAction
): ReportDataState => {
  switch (action.type) {
    case ReportDataActionTypes.FETCH_REPORT_DATA:
      return {...state, reportDataLoading: true};
    case ReportDataActionTypes.FETCH_REPORT_DATA_SUCCESS:
      return {...state, reportDataLoading: false, data: action.payload};
    case ReportDataActionTypes.FETCH_REPORT_DATA_ERROR:
      return {...state, reportDataLoading: false, error: action.payload};

    case ReportDataActionTypes.FETCH_REPORT_DATA_BY_USER:
      return {...state, reportDataLoading: true};
    case ReportDataActionTypes.FETCH_REPORT_DATA_BY_USER_SUCCESS:
      return {...state, reportDataLoading: false, data: action.payload};
    case ReportDataActionTypes.FETCH_REPORT_DATA_BY_USER_ERROR:
      return {...state, reportDataLoading: false, error: action.payload};

    case ReportDataActionTypes.CREATE_REPORT_DATA:
      return {...state, reportDataLoading: true};
    case ReportDataActionTypes.CREATE_REPORT_DATA_SUCCESS:
      return {
        ...state,
        reportDataLoading: false,
        data: addToListIfExist(state.data, action.payload.data),
        isAddDataStatus: action.payload.status,
      };
    case ReportDataActionTypes.CREATE_REPORT_DATA_ERROR:
      return {...state, reportDataLoading: false, error: action.payload};

    case ReportDataActionTypes.UPDATE_REPORT_DATA:
      return {...state, reportDataLoading: true};
    case ReportDataActionTypes.UPDATE_REPORT_DATA_SUCCESS:
      return {
        ...state,
        reportDataLoading: false,
        data: updateReportDataFromList(state.data, action.payload.data),
        isUpdateDataStatus: action.payload.status,
      };
    case ReportDataActionTypes.UPDATE_REPORT_DATA_ERROR:
      return {...state, reportDataLoading: false, error: action.payload};

    case ReportDataActionTypes.DELETE_REPORT_DATA:
      return {...state, reportDataLoading: true};
    case ReportDataActionTypes.DELETE_REPORT_DATA_SUCCESS:
      return {
        ...state,
        reportDataLoading: false,
        data: deleteReportDataFromList(state.data, action.payload),
      };
    case ReportDataActionTypes.DELETE_REPORT_DATA_ERROR:
      return {...state, reportDataLoading: false, error: action.payload};

    case ReportDataActionTypes.TOGGLE_IS_ADD_DATA_STATUS:
      return {...state, isAddDataStatus: !state.isAddDataStatus};

    case ReportDataActionTypes.TOGGLE_REPORT_DATA_VISIBILITY:
      return {...state, isReportDataVisible: !state.isReportDataVisible};

    case ReportDataActionTypes.TOGGLE_IS_UPDATE_DATA_STATUS:
      return {...state, isUpdateDataStatus: !state.isUpdateDataStatus};

    default:
      return state;
  }
};
