import {RoleAction, RoleActionTypes, RoleState} from '../types/RoleTypes';

const initialState: RoleState = {
  roles: [],
  roleLoading: false,
  error: null,

};

export const RoleReducer = (
  state  = initialState,
  action: RoleAction
): RoleState => {
  switch (action.type) {
    case RoleActionTypes.FETCH_ROLE:
      return {...state, roleLoading: true};
    case RoleActionTypes.FETCH_ROLE_SUCCESS:
      return {...state, roleLoading: false, roles: action.payload};
    case RoleActionTypes.FETCH_ROLE_ERROR:
      return {...state, roleLoading: false, error: action.payload};

    default:
      return state;
  }
};
