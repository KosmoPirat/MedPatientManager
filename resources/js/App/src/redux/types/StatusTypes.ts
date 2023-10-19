
export interface StatusTypes {
  id: number;
  name: string;
}

export interface StatusState {
  statuses: StatusTypes[];
  statusLoading: boolean;
  error: null | string;
}

export enum StatusActionTypes {
  FETCH_STATUS = "FETCH_STATUS",
  FETCH_STATUS_SUCCESS = "FETCH_STATUS_SUCCESS",
  FETCH_STATUS_ERROR = "FETCH_STATUS_ERROR",

}

interface FetchStatusAction {
  type: StatusActionTypes.FETCH_STATUS;
}
interface FetchStatusSuccessAction {
  type: StatusActionTypes.FETCH_STATUS_SUCCESS;
  payload: StatusTypes[];
}
interface FetchStatusErrorAction {
  type: StatusActionTypes.FETCH_STATUS_ERROR;
  payload: string;
}

export type StatusAction =
  | FetchStatusAction
  | FetchStatusSuccessAction
  | FetchStatusErrorAction;
