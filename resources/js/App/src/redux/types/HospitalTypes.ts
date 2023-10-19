
export interface HospitalTypes {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
}

export interface HospitalState {
  hospitals: HospitalTypes[];
  hospitalLoading: boolean;
  error: null | string;
  completeMessage: string | number;
}

interface ResponseHospitalType {
  data: HospitalTypes;
  message: string;
}

export enum HospitalActionTypes {
  FETCH_HOSPITAL = "FETCH_HOSPITAL",
  FETCH_HOSPITAL_SUCCESS = "FETCH_HOSPITAL_SUCCESS",
  FETCH_HOSPITAL_ERROR = "FETCH_HOSPITAL_ERROR",

  CREATE_HOSPITAL = "CREATE_HOSPITAL",
  CREATE_HOSPITAL_SUCCESS = "CREATE_HOSPITAL_SUCCESS",
  CREATE_HOSPITAL_ERROR = "CREATE_HOSPITAL_ERROR",

  UPDATE_HOSPITAL = "UPDATE_HOSPITAL",
  UPDATE_HOSPITAL_SUCCESS = "UPDATE_HOSPITAL_SUCCESS",
  UPDATE_HOSPITAL_ERROR = "UPDATE_HOSPITAL_ERROR",

  DELETE_HOSPITAL = "DELETE_HOSPITAL",
  DELETE_HOSPITAL_SUCCESS = "DELETE_HOSPITAL_SUCCESS",
  DELETE_HOSPITAL_ERROR = "DELETE_HOSPITAL_ERROR",

}

interface FetchHospitalAction {
  type: HospitalActionTypes.FETCH_HOSPITAL;
}
interface FetchHospitalSuccessAction {
  type: HospitalActionTypes.FETCH_HOSPITAL_SUCCESS;
  payload: HospitalTypes[];
}
interface FetchHospitalErrorAction {
  type: HospitalActionTypes.FETCH_HOSPITAL_ERROR;
  payload: string;
}

interface CreateHospitalAction {
  type: HospitalActionTypes.CREATE_HOSPITAL;
}
interface CreateHospitalSuccessAction {
  type: HospitalActionTypes.CREATE_HOSPITAL_SUCCESS;
  payload: ResponseHospitalType;
}
interface CreateHospitalErrorAction {
  type: HospitalActionTypes.CREATE_HOSPITAL_ERROR;
  payload: string;
}

interface UpdateHospitalAction {
  type: HospitalActionTypes.UPDATE_HOSPITAL;
}
interface UpdateHospitalSuccessAction {
  type: HospitalActionTypes.UPDATE_HOSPITAL_SUCCESS;
  payload: ResponseHospitalType;
}
interface UpdateHospitalErrorAction {
  type: HospitalActionTypes.UPDATE_HOSPITAL_ERROR;
  payload: string;
}

interface DeleteHospitalAction {
  type: HospitalActionTypes.DELETE_HOSPITAL;
}
interface DeleteHospitalSuccessAction {
  type: HospitalActionTypes.DELETE_HOSPITAL_SUCCESS;
  payload: number;
}
interface DeleteHospitalErrorAction {
  type: HospitalActionTypes.DELETE_HOSPITAL_ERROR;
  payload: string;
}

export type HospitalAction =
  | FetchHospitalAction
  | FetchHospitalSuccessAction
  | FetchHospitalErrorAction

  | CreateHospitalAction
  | CreateHospitalSuccessAction
  | CreateHospitalErrorAction

  | UpdateHospitalAction
  | UpdateHospitalSuccessAction
  | UpdateHospitalErrorAction

  | DeleteHospitalAction
  | DeleteHospitalSuccessAction
  | DeleteHospitalErrorAction;
