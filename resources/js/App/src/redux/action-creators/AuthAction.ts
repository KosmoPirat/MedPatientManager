import {Dispatch} from "redux";
import {AuthAction, AuthActionTypes} from "../types/AuthUserTypes";
import {axRequest} from "../../helpers/axiosHelper";

export const toggleAuthFormVisibility = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({type:AuthActionTypes.TOGGLE_AUTH_FORM_VISIBILITY});
  }
}

export const fetchAuthUser = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({type: AuthActionTypes.FETCH_AUTH_USER});
      const response = await axRequest.get('api/auth-user');
      dispatch({
        type: AuthActionTypes.FETCH_AUTH_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.FETCH_AUTH_USER_ERROR,
        payload: error.message
      });
    }
  }
}

export const loginUser = (login: string | undefined, password: string | undefined) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({type: AuthActionTypes.LOGIN_USER});
       await axRequest.get("/sanctum/csrf-cookie").then(async response => {
          await axRequest.post("api/login",{
          login: login,
          password: password,
        }).then( response => {
          dispatch({
            type: AuthActionTypes.LOGIN_USER_SUCCESS,
            payload: response.data,
          });
          dispatch({
            type: AuthActionTypes.FETCH_AUTH_STATUS_SUCCESS,
            payload: true,
          });
        });

      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.FETCH_AUTH_STATUS_ERROR,
        payload: error.message,
      });
    }
  }
}

export const logoutUser = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({type: AuthActionTypes.FETCH_AUTH_STATUS});
      dispatch({type: AuthActionTypes.LOGOUT_USER});
      await axRequest.post("api/logout");
      dispatch({
        type: AuthActionTypes.LOGOUT_USER_SUCCESS,
      });
      dispatch({
        type: AuthActionTypes.FETCH_AUTH_STATUS_SUCCESS,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.LOGOUT_USER_ERROR,
        payload: error
      });
      dispatch({
        type: AuthActionTypes.FETCH_AUTH_STATUS_ERROR,
        payload: error
      });
    }
  }
}
