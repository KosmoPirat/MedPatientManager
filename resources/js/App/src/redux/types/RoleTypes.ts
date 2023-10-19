
export interface RoleTypes {
  id: number;
  name: string;
}

export interface RoleState {
  roles: RoleTypes[];
  roleLoading: boolean;
  error: null | string;
}

export enum RoleActionTypes {
  FETCH_ROLE = "FETCH_ROLE",
  FETCH_ROLE_SUCCESS = "FETCH_ROLE_SUCCESS",
  FETCH_ROLE_ERROR = "FETCH_ROLE_ERROR",

}

interface FetchRoleAction {
  type: RoleActionTypes.FETCH_ROLE;
}
interface FetchRoleSuccessAction {
  type: RoleActionTypes.FETCH_ROLE_SUCCESS;
  payload: RoleTypes[];
}
interface FetchRoleErrorAction {
  type: RoleActionTypes.FETCH_ROLE_ERROR;
  payload: string;
}

export type RoleAction =
  | FetchRoleAction
  | FetchRoleSuccessAction
  | FetchRoleErrorAction;
