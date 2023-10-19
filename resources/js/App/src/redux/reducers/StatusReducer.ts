import {StatusAction, StatusActionTypes, StatusState} from '../types/StatusTypes';

const initialState: StatusState = {
  statuses: [],
  statusLoading: false,
  error: null,

};

export const StatusReducer = (
  state  = initialState,
  action: StatusAction
): StatusState => {
  switch (action.type) {
    case StatusActionTypes.FETCH_STATUS:
      return {...state, statusLoading: true};
    case StatusActionTypes.FETCH_STATUS_SUCCESS:
      return {...state, statusLoading: false, statuses: action.payload};
    case StatusActionTypes.FETCH_STATUS_ERROR:
      return {...state, statusLoading: false, error: action.payload};

    default:
      return state;
  }
};
