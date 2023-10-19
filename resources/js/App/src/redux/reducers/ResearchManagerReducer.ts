import {ResearchManagerAction, ResearchManagerActionTypes, ResearchManagerState} from '../types/ResearchManagerTypes';
import {deleteManagerFromList, updateManagerFromList} from "../../helpers/reducersHelper";

const initialState: ResearchManagerState = {
  managers: [],
  managerLoading: false,
  error: null,
  completeMessage: "",

};

export const ResearchManagerReducer = (
  state  = initialState,
  action: ResearchManagerAction
): ResearchManagerState => {
  switch (action.type) {
    case ResearchManagerActionTypes.FETCH_RESEARCH_MANAGERS:
      return {...state, managerLoading: true};
    case ResearchManagerActionTypes.FETCH_RESEARCH_MANAGERS_SUCCESS:
      return {...state, managerLoading: false, managers: action.payload};
    case ResearchManagerActionTypes.FETCH_RESEARCH_MANAGERS_ERROR:
      return {...state, managerLoading: false, error: action.payload};

    case ResearchManagerActionTypes.CREATE_MANAGER:
      return {...state, managerLoading: true};
    case ResearchManagerActionTypes.CREATE_MANAGER_SUCCESS:
      return {...state, managerLoading: false, managers: [...state.managers, action.payload.data], completeMessage: action.payload.message};
    case ResearchManagerActionTypes.CREATE_MANAGER_ERROR:
      return {...state, managerLoading: false, error: action.payload};

    case ResearchManagerActionTypes.UPDATE_MANAGER:
      return {...state, managerLoading: true};
    case ResearchManagerActionTypes.UPDATE_MANAGER_SUCCESS:
      return {
        ...state,
        managerLoading: false,
        managers: updateManagerFromList(state.managers, action.payload.data),
        completeMessage: action.payload.message};
    case ResearchManagerActionTypes.UPDATE_MANAGER_ERROR:
      return {...state, managerLoading: false, error: action.payload};

    case ResearchManagerActionTypes.DELETE_MANAGER:
      return {...state, managerLoading: true};
    case ResearchManagerActionTypes.DELETE_MANAGER_SUCCESS:
      return {
        ...state,
        managerLoading: false,
        managers: deleteManagerFromList(state.managers, action.payload),
        completeMessage: action.payload,
      };
    case ResearchManagerActionTypes.DELETE_MANAGER_ERROR:
      return {...state, managerLoading: false, error: action.payload};

    default:
      return state;
  }
};
