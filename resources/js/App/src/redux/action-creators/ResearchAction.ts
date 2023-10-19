import {Dispatch} from "redux";
import {
  ResearchAction,
  ResearchActionTypes,
  ResearchCreateFormType,
  ResearchFindDataFormType,
  ResearchTypes
} from "../types/ResearchTypes";
import {axRequest} from "../../helpers/axiosHelper";


export const fetchResearches = () => {
  return async (dispatch: Dispatch<ResearchAction>) => {
    try {
      dispatch({type: ResearchActionTypes.FETCH_RESEARCH});
      const response = await axRequest.get('api/researches');
      dispatch({
        type: ResearchActionTypes.FETCH_RESEARCH_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchActionTypes.FETCH_RESEARCH_ERROR,
        payload: error
      });
    }
  }
}

export const findResearches = (data: number) => {
  return async (dispatch: Dispatch<ResearchAction>) => {
    try {
      dispatch({type: ResearchActionTypes.FIND_RESEARCH});
      const response = await axRequest.get(`api/research/${data}`);
      dispatch({
        type: ResearchActionTypes.FIND_RESEARCH_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchActionTypes.FIND_RESEARCH_ERROR,
        payload: error
      });
    }
  }
}

export const checkResearch = (data: ResearchFindDataFormType) => {
  return async (dispatch: Dispatch<ResearchAction>) => {
    try {
      dispatch({type: ResearchActionTypes.CHECK_RESEARCH});
      const response = await axRequest.post(`api/check-research`,data);
      dispatch({
        type: ResearchActionTypes.CHECK_RESEARCH_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchActionTypes.CHECK_RESEARCH_ERROR,
        payload: error
      });
    }
  }
}

export const createResearch = (data: ResearchCreateFormType) => {
  return async (dispatch: Dispatch<ResearchAction>) => {
    try {
      dispatch({type: ResearchActionTypes.CREATE_RESEARCH});
      const response = await axRequest.post('api/research', data);
      dispatch({
        type: ResearchActionTypes.CREATE_RESEARCH_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchActionTypes.CREATE_RESEARCH_ERROR,
        payload: error
      });
    }
  }
}

export const updateResearch = (data: ResearchTypes) => {
  return async (dispatch: Dispatch<ResearchAction>) => {
    try {
      dispatch({type: ResearchActionTypes.UPDATE_RESEARCH});
      const response = await axRequest.put('api/research', data);
      dispatch({
        type: ResearchActionTypes.UPDATE_RESEARCH_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchActionTypes.UPDATE_RESEARCH_ERROR,
        payload: error
      });
    }
  }
}

export const deleteResearch = (data: number) => {
  return async (dispatch: Dispatch<ResearchAction>) => {
    try {
      dispatch({type: ResearchActionTypes.DELETE_RESEARCH});
      const response = await axRequest.delete(`api/research/${data}`);
      dispatch({
        type: ResearchActionTypes.DELETE_RESEARCH_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ResearchActionTypes.DELETE_RESEARCH_ERROR,
        payload: error
      });
    }
  }
}

export const toggleIsFindStatus = () => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({type: ResearchActionTypes.TOGGLE_IS_FIND_STATUS});
  }
}

export const toggleIsNotFoundStatus = () => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({type: ResearchActionTypes.TOGGLE_IS_NOT_FOUND_STATUS});
  }
}

export const toggleIsCreateStatus = () => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({type: ResearchActionTypes.TOGGLE_IS_CREATE_STATUS});
  }
}

export const setCancerCodeId = (data: number | null) => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({
      type: ResearchActionTypes.SET_CANCER_CODE_ID,
      payload: data,
    });
  }
}

export const setCancerCodeParamId = (data: number[] | null) => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({
      type: ResearchActionTypes.SET_CANCER_CODE_PARAM_ID,
      payload: data,
    });
  }
}

export const setCancerTypeId = (data: number | null) => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({
      type: ResearchActionTypes.SET_CANCER_TYPE_ID,
      payload: data,
    });
  }
}

export const setCancerTypeParamId = (data: number | null) => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({
      type: ResearchActionTypes.SET_CANCER_TYPE_PARAM_ID,
      payload: data,
    });
  }
}

export const addFiles = (data: FileList | null) => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({
      type: ResearchActionTypes.ADD_FILE_TO_STORAGE,
      payload: data,
    });
  }
}

export const resetResearches = () => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({
      type: ResearchActionTypes.RESET_RESEARCHES,
    });
  }
}

export const filterResearchByType = (typeId: number) => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({
      type: ResearchActionTypes.FILTER_RESEARCH_BY_TYPE,
      payload: typeId,
    });
  }
}

export const filterResearchByTypeParam = (typeId: number) => {
  return  (dispatch: Dispatch<ResearchAction>) => {
    dispatch({
      type: ResearchActionTypes.FILTER_RESEARCH_BY_TYPE_PARAM,
      payload: typeId,
    });
  }
}


