interface FileTypes {
  id: number;
  name: string;
  link: string;
}

export interface ReportDataTypes {
  id: number;
  updatedAt: string;
  research: {
    id?: number;
    researchName: string;
    cancerCode: {
      id: number;
      name: string;
    };
    cancerType: {
      id: number;
      name: string;
    };
    cancerCodeParams: {
      id: number;
      name: string;
    }[];
    cancerTypeParam:{
      id: number;
      name: string;
    };
  };
  hospital: {
    id: number;
    name: string;
    phone: string;
  };
  patient: {
    id: number;
    name: string;
    phone: string;
    files: FileTypes[];
  };
  user: {
    id: number;
    name: string;
  };
  status: {
    id: number;
    name: string;
  };
}

interface CreateReportDataType {
  data: ReportDataTypes;
  status: boolean;
}

export interface ReportDataState {
  data: ReportDataTypes[];
  reportDataLoading: boolean;
  isReportDataVisible: boolean;
  isAddDataStatus: boolean;
  isUpdateDataStatus: boolean;
  error: null | string;
}

export enum ReportDataActionTypes {
  FETCH_REPORT_DATA = "FETCH_REPORT_DATA",
  FETCH_REPORT_DATA_SUCCESS = "FETCH_REPORT_DATA_SUCCESS",
  FETCH_REPORT_DATA_ERROR = "FETCH_REPORT_DATA_ERROR",

  FETCH_REPORT_DATA_BY_USER = "FETCH_REPORT_DATA_BY_USER",
  FETCH_REPORT_DATA_BY_USER_SUCCESS = "FETCH_REPORT_DATA_BY_USER_SUCCESS",
  FETCH_REPORT_DATA_BY_USER_ERROR = "FETCH_REPORT_DATA_BY_USER_ERROR",

  CREATE_REPORT_DATA = 'CREATE_REPORT_DATA',
  CREATE_REPORT_DATA_SUCCESS = 'CREATE_REPORT_DATA_SUCCESS',
  CREATE_REPORT_DATA_ERROR = 'CREATE_REPORT_DATA_ERROR',

  UPDATE_REPORT_DATA = 'UPDATE_REPORT_DATA',
  UPDATE_REPORT_DATA_SUCCESS = 'UPDATE_REPORT_DATA_SUCCESS',
  UPDATE_REPORT_DATA_ERROR = 'UPDATE_REPORT_DATA_ERROR',

  DELETE_REPORT_DATA = 'DELETE_REPORT_DATA',
  DELETE_REPORT_DATA_SUCCESS = 'DELETE_REPORT_DATA_SUCCESS',
  DELETE_REPORT_DATA_ERROR = 'DELETE_REPORT_DATA_ERROR',

  TOGGLE_IS_ADD_DATA_STATUS = 'TOGGLE_IS_ADD_DATA_STATUS',

  TOGGLE_IS_UPDATE_DATA_STATUS = 'TOGGLE_IS_UPDATE_DATA_STATUS',

  TOGGLE_REPORT_DATA_VISIBILITY = 'TOGGLE_REPORT_DATA_VISIBILITY',

}

interface FetchReportDataAction {
  type: ReportDataActionTypes.FETCH_REPORT_DATA;
}
interface FetchReportDataSuccessAction {
  type: ReportDataActionTypes.FETCH_REPORT_DATA_SUCCESS;
  payload: ReportDataTypes[];
}
interface FetchReportDataErrorAction {
  type: ReportDataActionTypes.FETCH_REPORT_DATA_ERROR;
  payload: string;
}

interface FetchReportDataByUserAction {
  type: ReportDataActionTypes.FETCH_REPORT_DATA_BY_USER;
}
interface FetchReportDataByUserSuccessAction {
  type: ReportDataActionTypes.FETCH_REPORT_DATA_BY_USER_SUCCESS;
  payload: ReportDataTypes[];
}
interface FetchReportDataByUserErrorAction {
  type: ReportDataActionTypes.FETCH_REPORT_DATA_BY_USER_ERROR;
  payload: string;
}

interface CreateReportDataAction {
  type: ReportDataActionTypes.CREATE_REPORT_DATA;
}
interface CreateReportDataSuccessAction {
  type: ReportDataActionTypes.CREATE_REPORT_DATA_SUCCESS;
  payload: CreateReportDataType;
}
interface CreateReportDataErrorAction {
  type: ReportDataActionTypes.CREATE_REPORT_DATA_ERROR;
  payload: string;
}

interface UpdateReportDataAction {
  type: ReportDataActionTypes.UPDATE_REPORT_DATA;
}
interface UpdateReportDataSuccessAction {
  type: ReportDataActionTypes.UPDATE_REPORT_DATA_SUCCESS;
  payload: CreateReportDataType;
}
interface UpdateReportDataErrorAction {
  type: ReportDataActionTypes.UPDATE_REPORT_DATA_ERROR;
  payload: string;
}

interface DeleteReportDataAction {
  type: ReportDataActionTypes.DELETE_REPORT_DATA;
}
interface DeleteReportDataSuccessAction {
  type: ReportDataActionTypes.DELETE_REPORT_DATA_SUCCESS;
  payload: number;
}
interface DeleteReportDataErrorAction {
  type: ReportDataActionTypes.DELETE_REPORT_DATA_ERROR;
  payload: string;
}

interface ToggleIsAddDataStatusAction {
  type: ReportDataActionTypes.TOGGLE_IS_ADD_DATA_STATUS;
}

interface ToggleIsUpdateDataStatusAction {
  type: ReportDataActionTypes.TOGGLE_IS_UPDATE_DATA_STATUS;
}

interface ToggleReportDataVisibilityAction {
  type: ReportDataActionTypes.TOGGLE_REPORT_DATA_VISIBILITY;
}

export type ReportDataAction =
  | FetchReportDataAction
  | FetchReportDataSuccessAction
  | FetchReportDataErrorAction

  | FetchReportDataByUserAction
  | FetchReportDataByUserSuccessAction
  | FetchReportDataByUserErrorAction

  | CreateReportDataAction
  | CreateReportDataSuccessAction
  | CreateReportDataErrorAction

  | UpdateReportDataAction
  | UpdateReportDataSuccessAction
  | UpdateReportDataErrorAction

  | DeleteReportDataAction
  | DeleteReportDataSuccessAction
  | DeleteReportDataErrorAction

  | ToggleIsAddDataStatusAction

  | ToggleIsUpdateDataStatusAction

  | ToggleReportDataVisibilityAction;
