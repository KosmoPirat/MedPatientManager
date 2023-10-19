
export interface CancerTypeTypes {
  id: number;
  name: string;
}

export interface CancerTypeState {
  cancerTypes: CancerTypeTypes[];
  cancerTypeLoading: boolean;
  error: null | string;
}

export enum CancerTypeActionTypes {
  FETCH_CANCER_TYPES = "FETCH_CANCER_TYPES",
  FETCH_CANCER_TYPES_SUCCESS = "FETCH_CANCER_TYPES_SUCCESS",
  FETCH_CANCER_TYPES_ERROR = "FETCH_CANCER_TYPES_ERROR",

}

interface FetchCancerTypesAction {
  type: CancerTypeActionTypes.FETCH_CANCER_TYPES;
}
interface FetchCancerTypesSuccessAction {
  type: CancerTypeActionTypes.FETCH_CANCER_TYPES_SUCCESS;
  payload: CancerTypeTypes[];
}
interface FetchCancerTypesErrorAction {
  type: CancerTypeActionTypes.FETCH_CANCER_TYPES_ERROR;
  payload: string;
}

export type CancerTypeAction =
  | FetchCancerTypesAction
  | FetchCancerTypesSuccessAction
  | FetchCancerTypesErrorAction;
