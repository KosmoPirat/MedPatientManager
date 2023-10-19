import {Dispatch} from "redux";
import {ResearchManagerAction, ResearchManagerActionTypes, ResearchManagerTypes} from "../types/ResearchManagerTypes";
import {axRequest} from "../../helpers/axiosHelper";


export const fetchManagers = () => {
  return async (dispatch: Dispatch<ResearchManagerAction>) => {
    try {
      dispatch({type: ResearchManagerActionTypes.FETCH_RESEARCH_MANAGERS});
      const response = await axRequest.get('api/managers');
      dispatch({
        type: ResearchManagerActionTypes.FETCH_RESEARCH_MANAGERS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchManagerActionTypes.FETCH_RESEARCH_MANAGERS_ERROR,
        payload: error
      });
    }
  }
}

export const createManager = (data: ResearchManagerTypes) => {
  return async (dispatch: Dispatch<ResearchManagerAction>) => {
    try {
      dispatch({type: ResearchManagerActionTypes.CREATE_MANAGER});
      const response = await axRequest.post('api/manager', data);
      dispatch({
        type: ResearchManagerActionTypes.CREATE_MANAGER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchManagerActionTypes.CREATE_MANAGER_ERROR,
        payload: error
      });
    }
  }
}

export const updateManager = (data: ResearchManagerTypes) => {
  return async (dispatch: Dispatch<ResearchManagerAction>) => {
    try {
      dispatch({type: ResearchManagerActionTypes.UPDATE_MANAGER});
      const response = await axRequest.put('api/manager', data);
      dispatch({
        type: ResearchManagerActionTypes.UPDATE_MANAGER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchManagerActionTypes.UPDATE_MANAGER_ERROR,
        payload: error
      });
    }
  }
}

export const deleteManager = (data: number) => {
  return async (dispatch: Dispatch<ResearchManagerAction>) => {
    try {
      dispatch({type: ResearchManagerActionTypes.DELETE_MANAGER});
      const response = await axRequest.delete(`api/manager/${data}`);
      dispatch({
        type: ResearchManagerActionTypes.DELETE_MANAGER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchManagerActionTypes.DELETE_MANAGER_ERROR,
        payload: error
      });
    }
  }
}
