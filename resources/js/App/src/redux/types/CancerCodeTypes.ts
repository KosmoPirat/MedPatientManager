export interface CancerCodeTypes {
  id: number;
  name: string;
}

export interface CancerCodeState {
  cancerCodes: CancerCodeTypes[];
  cancerCodeLoading: boolean;
  completeMessage: any;
  error: null | string;
}

export enum CancerCodeActionTypes {
  FETCH_CANCER_CODES = "FETCH_CANCER_CODES",
  FETCH_CANCER_CODES_SUCCESS = "FETCH_CANCER_CODES_SUCCESS",
  FETCH_CANCER_CODES_ERROR = "FETCH_CANCER_CODES_ERROR",

  CREATE_CANCER_CODE = "CREATE_CANCER_CODE",
  CREATE_CANCER_CODE_SUCCESS = "CREATE_CANCER_CODE_SUCCESS",
  CREATE_CANCER_CODE_ERROR = "CREATE_CANCER_CODE_ERROR",

  UPDATE_CANCER_CODE = "UPDATE_CANCER_CODE",
  UPDATE_CANCER_CODE_SUCCESS = "UPDATE_CANCER_CODE_SUCCESS",
  UPDATE_CANCER_CODE_ERROR = "UPDATE_CANCER_CODE_ERROR",

  DELETE_CANCER_CODE = "DELETE_CANCER_CODE",
  DELETE_CANCER_CODE_SUCCESS = "DELETE_CANCER_CODE_SUCCESS",
  DELETE_CANCER_CODE_ERROR = "DELETE_CANCER_CODE_ERROR",
}

interface FetchCancerCodesAction {
  type: CancerCodeActionTypes.FETCH_CANCER_CODES;
}
interface FetchCancerCodesSuccessAction {
  type: CancerCodeActionTypes.FETCH_CANCER_CODES_SUCCESS;
  payload: CancerCodeTypes[];
}
interface FetchCancerCodesErrorAction {
  type: CancerCodeActionTypes.FETCH_CANCER_CODES_ERROR;
  payload: string;
}

interface CreateCancerCodeAction {
  type: CancerCodeActionTypes.CREATE_CANCER_CODE;
}
interface CreateCancerCodeSuccessAction {
  type: CancerCodeActionTypes.CREATE_CANCER_CODE_SUCCESS;
  payload: string;
}
interface CreateCancerCodeErrorAction {
  type: CancerCodeActionTypes.CREATE_CANCER_CODE_ERROR;
  payload: string;
}

interface UpdateCancerCodeAction {
  type: CancerCodeActionTypes.UPDATE_CANCER_CODE;
}
interface UpdateCancerCodeSuccessAction {
  type: CancerCodeActionTypes.UPDATE_CANCER_CODE_SUCCESS;
  payload: CancerCodeTypes;
}
interface UpdateCancerCodeErrorAction {
  type: CancerCodeActionTypes.UPDATE_CANCER_CODE_ERROR;
  payload: string;
}

interface DeleteCancerCodeAction {
  type: CancerCodeActionTypes.DELETE_CANCER_CODE;
}
interface DeleteCancerCodeSuccessAction {
  type: CancerCodeActionTypes.DELETE_CANCER_CODE_SUCCESS;
  payload: number;
}
interface DeleteCancerCodeErrorAction {
  type: CancerCodeActionTypes.DELETE_CANCER_CODE_ERROR;
  payload: string;
}

export type CancerCodeAction =
  | FetchCancerCodesAction
  | FetchCancerCodesSuccessAction
  | FetchCancerCodesErrorAction

  | CreateCancerCodeAction
  | CreateCancerCodeSuccessAction
  | CreateCancerCodeErrorAction

  | UpdateCancerCodeAction
  | UpdateCancerCodeSuccessAction
  | UpdateCancerCodeErrorAction

  | DeleteCancerCodeAction
  | DeleteCancerCodeSuccessAction
  | DeleteCancerCodeErrorAction;
