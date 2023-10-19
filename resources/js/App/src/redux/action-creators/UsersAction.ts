import {Dispatch} from "redux";
import {UsersAction, UsersActionTypes, UserTypes} from "../types/UserTypes";
import {axRequest} from "../../helpers/axiosHelper";


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({type: UsersActionTypes.FETCH_USERS});
      const response = await axRequest.get('api/users');
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_ERROR,
        payload: error
      });
    }
  }
}

export const createUsers = (data: UserTypes) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({type: UsersActionTypes.CREATE_USER});
      const response = await axRequest.post('api/user', data);
      dispatch({
        type: UsersActionTypes.CREATE_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.CREATE_USER_ERROR,
        payload: error
      });
    }
  }
}

export const updateUser = (data: UserTypes) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({type: UsersActionTypes.UPDATE_USER});
      const response = await axRequest.put('api/user', data);
      dispatch({
        type: UsersActionTypes.UPDATE_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.UPDATE_USER_ERROR,
        payload: error
      });
    }
  }
}

export const deleteUser = (data: number) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({type: UsersActionTypes.DELETE_USER});
      const response = await axRequest.delete(`api/user/${data}`);
      dispatch({
        type: UsersActionTypes.DELETE_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.DELETE_USER_ERROR,
        payload: error
      });
    }
  }
}

export const deleteUserMessage = () => {
  return  (dispatch: Dispatch<UsersAction>) => {
    dispatch({type: UsersActionTypes.DELETE_USER_MESSAGE});
  }
}

export const toggleUserConsent = () => {
  return  (dispatch: Dispatch<UsersAction>) => {
    dispatch({type: UsersActionTypes.TOGGLE_USER_CONSENT});
  }
}

export const setUserName = (data: string) => {
  return  (dispatch: Dispatch<UsersAction>) => {
    dispatch({
      type: UsersActionTypes.SET_USER_NAME,
      payload: data,
    });
  }
}

export const setUserPhone = (data: string) => {
  return  (dispatch: Dispatch<UsersAction>) => {
    dispatch({
      type: UsersActionTypes.SET_USER_PHONE,
      payload: data,
    });
  }
}
