import { AuthState, AuthActionTypes, AuthAction } from '../types/AuthUserTypes';

const initialState: AuthState = {
  authUser: {
    id: 0,
    name: "",
    login: "",
    role: "",
  },
  isAuth: false,
  isFormActive: false,
  authUserLoading: false,
  error: null,

};

export const AuthReducer = (
  state  = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.FETCH_AUTH_USER:
      return {...state, authUserLoading: true};
    case AuthActionTypes.FETCH_AUTH_USER_SUCCESS:
      return {...state, isAuth: true, authUserLoading: false, authUser: action.payload};
    case AuthActionTypes.FETCH_AUTH_USER_ERROR:
      return {...state, authUserLoading: false, error: action.payload};

    case AuthActionTypes.LOGIN_USER:
      return {...state, authUserLoading: true};
    case AuthActionTypes.LOGIN_USER_SUCCESS:
      return {...state, authUserLoading: false, isAuth: true, error: null, authUser: action.payload};
    case AuthActionTypes.LOGIN_USER_ERROR:
      return {...state, authUserLoading: false, error: action.payload};

    case AuthActionTypes.LOGOUT_USER:
      return {...state, authUserLoading: true};
    case AuthActionTypes.LOGOUT_USER_SUCCESS:
      return {...state,
        authUserLoading: false,
        isAuth: false,
        error: null ,
        authUser: {
          id: 0,
          name: "",
          login: "",
          role: "",
        }};
    case AuthActionTypes.LOGOUT_USER_ERROR:
      return {...state, authUserLoading: false, error: action.payload};

    case AuthActionTypes.FETCH_AUTH_STATUS:
      return {...state, authUserLoading: true};
    case AuthActionTypes.FETCH_AUTH_STATUS_SUCCESS:
      return {...state, authUserLoading: false, isAuth: action.payload};
    case AuthActionTypes.FETCH_AUTH_STATUS_ERROR:
      return {...state, authUserLoading: false, error: action.payload};

    case AuthActionTypes.TOGGLE_AUTH_FORM_VISIBILITY:
      return {...state, isFormActive: !state.isFormActive};

    default:
      return state;
  }
};
