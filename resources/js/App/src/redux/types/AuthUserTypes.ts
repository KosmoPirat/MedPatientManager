interface AuthUserParamTypes {
  id: number;
  name: string;
  login: string;
  role: string;
}

export interface AuthState {
  authUser: AuthUserParamTypes;
  isAuth: boolean;
  authUserLoading: boolean;
  isFormActive: boolean;
  error: null | string;
}

export enum AuthActionTypes {
  LOGIN_USER = "LOGIN_USER",
  LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
  LOGIN_USER_ERROR = "LOGIN_USER_ERROR",

  LOGOUT_USER = "LOGOUT_USER",
  LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS",
  LOGOUT_USER_ERROR = "LOGOUT_USER_ERROR",

  FETCH_AUTH_USER = "FETCH_AUTH_USER",
  FETCH_AUTH_USER_SUCCESS ="FETCH_AUTH_USER_SUCCESS",
  FETCH_AUTH_USER_ERROR ="FETCH_AUTH_USER_ERROR",

  FETCH_AUTH_STATUS = "FETCH_AUTH_STATUS",
  FETCH_AUTH_STATUS_SUCCESS ="FETCH_AUTH_STATUS_SUCCESS",
  FETCH_AUTH_STATUS_ERROR ="FETCH_AUTH_STATUS_ERROR",

  TOGGLE_AUTH_FORM_VISIBILITY="TOGGLE_AUTH_FORM_VISIBILITY",
}

interface FetchAuthUserAction {
  type: AuthActionTypes.FETCH_AUTH_USER;
}
interface FetchAuthUserSuccessAction {
  type: AuthActionTypes.FETCH_AUTH_USER_SUCCESS;
  payload: AuthUserParamTypes;
}
interface FetchAuthUserErrorAction {
  type: AuthActionTypes.FETCH_AUTH_USER_ERROR;
  payload: string;
}

interface FetchAuthStatusAction {
  type: AuthActionTypes.FETCH_AUTH_STATUS;
}
interface FetchAuthStatusSuccessAction {
  type: AuthActionTypes.FETCH_AUTH_STATUS_SUCCESS;
  payload: boolean;
}
interface FetchAuthStatusErrorAction {
  type: AuthActionTypes.FETCH_AUTH_STATUS_ERROR;
  payload: string;
}

interface LoginUserAction {
  type: AuthActionTypes.LOGIN_USER;
}
interface LoginUserSuccessAction {
  type: AuthActionTypes.LOGIN_USER_SUCCESS;
  payload: AuthUserParamTypes;
}
interface LoginUserErrorAction {
  type: AuthActionTypes.LOGIN_USER_ERROR;
  payload: string;
}

interface LogoutUserAction {
  type: AuthActionTypes.LOGOUT_USER;
}
interface LogoutUserSuccessAction {
  type: AuthActionTypes.LOGOUT_USER_SUCCESS;
}
interface LogoutUserErrorAction {
  type: AuthActionTypes.LOGOUT_USER_ERROR;
  payload: string;
}

interface ToggleAuthFormVisibilityAction {
  type: AuthActionTypes.TOGGLE_AUTH_FORM_VISIBILITY;
}

export type AuthAction =
  | FetchAuthUserAction
  | FetchAuthUserSuccessAction
  | FetchAuthUserErrorAction

  | FetchAuthStatusAction
  | FetchAuthStatusSuccessAction
  | FetchAuthStatusErrorAction
  | LoginUserAction

  | LoginUserSuccessAction
  | LoginUserErrorAction
  | LogoutUserAction

  | LogoutUserSuccessAction
  | LogoutUserErrorAction
  | ToggleAuthFormVisibilityAction;
