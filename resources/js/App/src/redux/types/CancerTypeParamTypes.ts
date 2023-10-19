export interface CancerTypeParamTypes {
  id: number;
  name: string;
}

export interface CancerTypeParamState {
  cancerTypeParams: CancerTypeParamTypes[];
  cancerTypeParamLoading: boolean;
  completeMessage: any;
  error: null | string;
}

export enum CancerTypeParamActionTypes {
  FETCH_CANCER_TYPE_PARAMS = "FETCH_CANCER_TYPE_PARAMS",
  FETCH_CANCER_TYPE_PARAMS_SUCCESS = "FETCH_CANCER_TYPE_PARAMS_SUCCESS",
  FETCH_CANCER_TYPE_PARAMS_ERROR = "FETCH_CANCER_TYPE_PARAMS_ERROR",

  CREATE_CANCER_TYPE_PARAM = "CREATE_CANCER_TYPE_PARAM",
  CREATE_CANCER_TYPE_PARAM_SUCCESS = "CREATE_CANCER_TYPE_PARAM_SUCCESS",
  CREATE_CANCER_TYPE_PARAM_ERROR = "CREATE_CANCER_TYPE_PARAM_ERROR",

  UPDATE_CANCER_TYPE_PARAM = "UPDATE_CANCER_TYPE_PARAM",
  UPDATE_CANCER_TYPE_PARAM_SUCCESS = "UPDATE_CANCER_TYPE_PARAM_SUCCESS",
  UPDATE_CANCER_TYPE_PARAM_ERROR = "UPDATE_CANCER_TYPE_PARAM_ERROR",

  DELETE_CANCER_TYPE_PARAM = "DELETE_CANCER_TYPE_PARAM",
  DELETE_CANCER_TYPE_PARAM_SUCCESS = "DELETE_CANCER_TYPE_PARAM_SUCCESS",
  DELETE_CANCER_TYPE_PARAM_ERROR = "DELETE_CANCER_TYPE_PARAM_ERROR",
}

interface FetchCancerTypeParamsAction {
  type: CancerTypeParamActionTypes.FETCH_CANCER_TYPE_PARAMS;
}
interface FetchCancerTypeParamsSuccessAction {
  type: CancerTypeParamActionTypes.FETCH_CANCER_TYPE_PARAMS_SUCCESS;
  payload: CancerTypeParamTypes[];
}
interface FetchCancerTypeParamsErrorAction {
  type: CancerTypeParamActionTypes.FETCH_CANCER_TYPE_PARAMS_ERROR;
  payload: string;
}

interface CreateCancerTypeParamAction {
  type: CancerTypeParamActionTypes.CREATE_CANCER_TYPE_PARAM;
}
interface CreateCancerTypeParamSuccessAction {
  type: CancerTypeParamActionTypes.CREATE_CANCER_TYPE_PARAM_SUCCESS;
  payload: string;
}
interface CreateCancerTypeParamErrorAction {
  type: CancerTypeParamActionTypes.CREATE_CANCER_TYPE_PARAM_ERROR;
  payload: string;
}

interface UpdateCancerTypeParamAction {
  type: CancerTypeParamActionTypes.UPDATE_CANCER_TYPE_PARAM;
}
interface UpdateCancerTypeParamSuccessAction {
  type: CancerTypeParamActionTypes.UPDATE_CANCER_TYPE_PARAM_SUCCESS;
  payload: CancerTypeParamTypes;
}
interface UpdateCancerTypeParamErrorAction {
  type: CancerTypeParamActionTypes.UPDATE_CANCER_TYPE_PARAM_ERROR;
  payload: string;
}

interface DeleteCancerTypeParamAction {
  type: CancerTypeParamActionTypes.DELETE_CANCER_TYPE_PARAM;
}
interface DeleteCancerTypeParamSuccessAction {
  type: CancerTypeParamActionTypes.DELETE_CANCER_TYPE_PARAM_SUCCESS;
  payload: number;
}
interface DeleteCancerTypeParamErrorAction {
  type: CancerTypeParamActionTypes.DELETE_CANCER_TYPE_PARAM_ERROR;
  payload: string;
}

export type CancerTypeParamAction =
  | FetchCancerTypeParamsAction
  | FetchCancerTypeParamsSuccessAction
  | FetchCancerTypeParamsErrorAction

  | CreateCancerTypeParamAction
  | CreateCancerTypeParamSuccessAction
  | CreateCancerTypeParamErrorAction

  | UpdateCancerTypeParamAction
  | UpdateCancerTypeParamSuccessAction
  | UpdateCancerTypeParamErrorAction

  | DeleteCancerTypeParamAction
  | DeleteCancerTypeParamSuccessAction
  | DeleteCancerTypeParamErrorAction;
