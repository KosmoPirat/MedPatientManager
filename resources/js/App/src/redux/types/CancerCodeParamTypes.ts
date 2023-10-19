export interface CancerCodeParamTypes {
  id: number;
  name: string;
}

export interface CancerCodeParamState {
  cancerCodeParams: CancerCodeParamTypes[];
  cancerCodeParamLoading: boolean;
  completeMessage: any;
  error: null | string;
}

export enum CancerCodeParamActionTypes {
  FETCH_CANCER_CODE_PARAMS = "FETCH_CANCER_CODE_PARAMS",
  FETCH_CANCER_CODE_PARAMS_SUCCESS = "FETCH_CANCER_CODE_PARAMS_SUCCESS",
  FETCH_CANCER_CODE_PARAMS_ERROR = "FETCH_CANCER_CODE_PARAMS_ERROR",

  CREATE_CANCER_CODE_PARAM = "CREATE_CANCER_CODE_PARAM",
  CREATE_CANCER_CODE_PARAM_SUCCESS = "CREATE_CANCER_CODE_PARAM_SUCCESS",
  CREATE_CANCER_CODE_PARAM_ERROR = "CREATE_CANCER_CODE_PARAM_ERROR",

  UPDATE_CANCER_CODE_PARAM = "UPDATE_CANCER_CODE_PARAM",
  UPDATE_CANCER_CODE_PARAM_SUCCESS = "UPDATE_CANCER_CODE_PARAM_SUCCESS",
  UPDATE_CANCER_CODE_PARAM_ERROR = "UPDATE_CANCER_CODE_PARAM_ERROR",

  DELETE_CANCER_CODE_PARAM = "DELETE_CANCER_CODE_PARAM",
  DELETE_CANCER_CODE_PARAM_SUCCESS = "DELETE_CANCER_CODE_PARAM_SUCCESS",
  DELETE_CANCER_CODE_PARAM_ERROR = "DELETE_CANCER_CODE_PARAM_ERROR",
}

interface FetchCancerCodeParamsAction {
  type: CancerCodeParamActionTypes.FETCH_CANCER_CODE_PARAMS;
}
interface FetchCancerCodeParamsSuccessAction {
  type: CancerCodeParamActionTypes.FETCH_CANCER_CODE_PARAMS_SUCCESS;
  payload: CancerCodeParamTypes[];
}
interface FetchCancerCodeParamsErrorAction {
  type: CancerCodeParamActionTypes.FETCH_CANCER_CODE_PARAMS_ERROR;
  payload: string;
}

interface CreateCancerCodeParamAction {
  type: CancerCodeParamActionTypes.CREATE_CANCER_CODE_PARAM;
}
interface CreateCancerCodeParamSuccessAction {
  type: CancerCodeParamActionTypes.CREATE_CANCER_CODE_PARAM_SUCCESS;
  payload: string;
}
interface CreateCancerCodeParamErrorAction {
  type: CancerCodeParamActionTypes.CREATE_CANCER_CODE_PARAM_ERROR;
  payload: string;
}

interface UpdateCancerCodeParamAction {
  type: CancerCodeParamActionTypes.UPDATE_CANCER_CODE_PARAM;
}
interface UpdateCancerCodeParamSuccessAction {
  type: CancerCodeParamActionTypes.UPDATE_CANCER_CODE_PARAM_SUCCESS;
  payload: CancerCodeParamTypes;
}
interface UpdateCancerCodeParamErrorAction {
  type: CancerCodeParamActionTypes.UPDATE_CANCER_CODE_PARAM_ERROR;
  payload: string;
}

interface DeleteCancerCodeParamAction {
  type: CancerCodeParamActionTypes.DELETE_CANCER_CODE_PARAM;
}
interface DeleteCancerCodeParamSuccessAction {
  type: CancerCodeParamActionTypes.DELETE_CANCER_CODE_PARAM_SUCCESS;
  payload: number;
}
interface DeleteCancerCodeParamErrorAction {
  type: CancerCodeParamActionTypes.DELETE_CANCER_CODE_PARAM_ERROR;
  payload: string;
}

export type CancerCodeParamAction =
  | FetchCancerCodeParamsAction
  | FetchCancerCodeParamsSuccessAction
  | FetchCancerCodeParamsErrorAction

  | CreateCancerCodeParamAction
  | CreateCancerCodeParamSuccessAction
  | CreateCancerCodeParamErrorAction

  | UpdateCancerCodeParamAction
  | UpdateCancerCodeParamSuccessAction
  | UpdateCancerCodeParamErrorAction

  | DeleteCancerCodeParamAction
  | DeleteCancerCodeParamSuccessAction
  | DeleteCancerCodeParamErrorAction;
