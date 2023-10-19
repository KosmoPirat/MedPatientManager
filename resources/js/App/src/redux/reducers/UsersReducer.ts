import {UsersAction, UsersActionTypes, UsersState} from '../types/UserTypes';
import {deleteUserFromList, updateUserFromList} from "../../helpers/reducersHelper";

const initialState: UsersState = {
  users: [],
  userName: '',
  userPhone: '',
  userLoading: false,
  userConsent: false,
  completeMessage: '',
  error: null,

};

export const UsersReducer = (
  state  = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return {...state, userLoading: true};
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {...state, userLoading: false, users: action.payload};
    case UsersActionTypes.FETCH_USERS_ERROR:
      return {...state, userLoading: false, error: action.payload};

    case UsersActionTypes.CREATE_USER:
      return {...state, userLoading: true};
    case UsersActionTypes.CREATE_USER_SUCCESS:
      return {...state, userLoading: false, users: [...state.users, action.payload.data], completeMessage: action.payload.message};
    case UsersActionTypes.CREATE_USER_ERROR:
      return {...state, userLoading: false, error: action.payload};

    case UsersActionTypes.UPDATE_USER:
      return {...state, userLoading: true};
    case UsersActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        users: updateUserFromList(state.users, action.payload.data),
        completeMessage: action.payload.message};
    case UsersActionTypes.UPDATE_USER_ERROR:
      return {...state, userLoading: false, error: action.payload};

    case UsersActionTypes.DELETE_USER:
      return {...state, userLoading: true};
    case UsersActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        users: deleteUserFromList(state.users, action.payload),
        completeMessage: action.payload
      };
    case UsersActionTypes.DELETE_USER_ERROR:
      return {...state, userLoading: false, error: action.payload};

    case UsersActionTypes.DELETE_USER_MESSAGE:
      return {...state,  completeMessage: ''};

    case UsersActionTypes.TOGGLE_USER_CONSENT:
      return {...state,  userConsent: !state.userConsent};

    case UsersActionTypes.SET_USER_NAME:
      return {...state, userName: action.payload};

    case UsersActionTypes.SET_USER_PHONE:
      return {...state, userPhone: action.payload};

    default:
      return state;
  }
};
