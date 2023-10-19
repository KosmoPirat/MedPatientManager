interface roleType {
  id: number;
  name: string;
}

export interface UserTypes {
  id?: number;
  name: string;
  phone: string;
  login: string;
  password?: string;
  role?: roleType;
}

interface ResponseUserType {
  data: UserTypes;
  message: string;
}

export interface UsersState {
  users: UserTypes[];
  userName: string;
  userPhone: string;
  userConsent: boolean;
  userLoading: boolean;
  completeMessage: any;
  error: null | string;
}

export enum UsersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",

  CREATE_USER = "CREATE_USER",
  CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
  CREATE_USER_ERROR = "CREATE_USER_ERROR",

  UPDATE_USER = "UPDATE_USER",
  UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
  UPDATE_USER_ERROR = "UPDATE_USER_ERROR",

  DELETE_USER = "DELETE_USER",
  DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
  DELETE_USER_ERROR = "DELETE_USER_ERROR",

  DELETE_USER_MESSAGE = "DELETE_USER_MESSAGE",

  TOGGLE_USER_CONSENT = "TOGGLE_USER_CONSENT",

  SET_USER_NAME = "SET_USER_NAME",

  SET_USER_PHONE = "SET_USER_PHONE",
}

interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: UserTypes[];
}
interface FetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface CreateUserAction {
  type: UsersActionTypes.CREATE_USER;
}
interface CreateUserSuccessAction {
  type: UsersActionTypes.CREATE_USER_SUCCESS;
  payload: ResponseUserType;
}
interface CreateUserErrorAction {
  type: UsersActionTypes.CREATE_USER_ERROR;
  payload: string;
}

interface UpdateUserAction {
  type: UsersActionTypes.UPDATE_USER;
}
interface UpdateUserSuccessAction {
  type: UsersActionTypes.UPDATE_USER_SUCCESS;
  payload: ResponseUserType;
}
interface UpdateUserErrorAction {
  type: UsersActionTypes.UPDATE_USER_ERROR;
  payload: string;
}

interface DeleteUserAction {
  type: UsersActionTypes.DELETE_USER;
}
interface DeleteUserSuccessAction {
  type: UsersActionTypes.DELETE_USER_SUCCESS;
  payload: number;
}
interface DeleteUserErrorAction {
  type: UsersActionTypes.DELETE_USER_ERROR;
  payload: string;
}

interface DeleteUserMessageAction {
  type: UsersActionTypes.DELETE_USER_MESSAGE;
}

interface ToggleUserConsentAction {
  type: UsersActionTypes.TOGGLE_USER_CONSENT;
}

interface SetUserNameAction {
  type: UsersActionTypes.SET_USER_NAME;
  payload: string;
}

interface SetUserPhoneAction {
  type: UsersActionTypes.SET_USER_PHONE;
  payload: string;
}

export type UsersAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction

  | CreateUserAction
  | CreateUserSuccessAction
  | CreateUserErrorAction

  | UpdateUserAction
  | UpdateUserSuccessAction
  | UpdateUserErrorAction

  | DeleteUserAction
  | DeleteUserSuccessAction
  | DeleteUserErrorAction

  | DeleteUserMessageAction

  | ToggleUserConsentAction

  | SetUserNameAction

  | SetUserPhoneAction;
