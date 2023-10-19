import {ResearchAction, ResearchActionTypes, ResearchState} from '../types/ResearchTypes';
import {
  deleteResearchFromList,
  filterResearchByType,
  filterResearchByTypeParam,
  updateResearchFromList
} from "../../helpers/reducersHelper";


const initialState: ResearchState = {
  researches: [],
  foundResearches: [],
  cancerCodeId: null,
  cancerCodeParamId: null,
  cancerTypeId: null,
  cancerTypeParamId: null,
  uploadData: null,
  researchLoading: false,
  isNotFoundStatus: false,
  isFindStatus: false,
  isCreateStatus: false,
  isShowCancerParamOption: false,
  isShowTypeParamOption: false,
  error: null,
};

export const ResearchReducer = (
  state  = initialState,
  action: ResearchAction
): ResearchState => {
  switch (action.type) {
    case ResearchActionTypes.FETCH_RESEARCH:
      return {...state, researchLoading: true};
    case ResearchActionTypes.FETCH_RESEARCH_SUCCESS:
      return {...state, researchLoading: false, researches: action.payload};
    case ResearchActionTypes.FETCH_RESEARCH_ERROR:
      return {...state, researchLoading: false, error: action.payload};

    case ResearchActionTypes.FIND_RESEARCH:
      return {...state, researchLoading: true};
    case ResearchActionTypes.FIND_RESEARCH_SUCCESS:
      return {
        ...state,
        researchLoading: false,
        researches: action.payload.data,
        isFindStatus: action.payload.status,
      };
    case ResearchActionTypes.FIND_RESEARCH_ERROR:
      return {...state, researchLoading: false, error: action.payload};

    case ResearchActionTypes.CHECK_RESEARCH:
      return {...state, researchLoading: true};
    case ResearchActionTypes.CHECK_RESEARCH_SUCCESS:
      return {
        ...state,
        researchLoading: false,
        foundResearches: action.payload.data,
        isFindStatus: action.payload.status,
        isNotFoundStatus: action.payload.notFoundStatus,
      };
    case ResearchActionTypes.CHECK_RESEARCH_ERROR:
      return {...state, researchLoading: false, error: action.payload};

    case ResearchActionTypes.CREATE_RESEARCH:
      return {...state, researchLoading: true};
    case ResearchActionTypes.CREATE_RESEARCH_SUCCESS:
      return {...state, researchLoading: false, isCreateStatus: action.payload};
    case ResearchActionTypes.CREATE_RESEARCH_ERROR:
      return {...state, researchLoading: false, error: action.payload};

    case ResearchActionTypes.UPDATE_RESEARCH:
      return {...state, researchLoading: true};
    case ResearchActionTypes.UPDATE_RESEARCH_SUCCESS:
      return {
        ...state,
        researchLoading: false,
        researches: updateResearchFromList(state.researches, action.payload.data)};
    case ResearchActionTypes.UPDATE_RESEARCH_ERROR:
      return {...state, researchLoading: false, error: action.payload};

    case ResearchActionTypes.DELETE_RESEARCH:
      return {...state, researchLoading: true};
    case ResearchActionTypes.DELETE_RESEARCH_SUCCESS:
      return {
        ...state,
        researchLoading: false,
        researches: deleteResearchFromList(state.researches, action.payload),};
    case ResearchActionTypes.DELETE_RESEARCH_ERROR:
      return {...state, researchLoading: false, error: action.payload};

    case ResearchActionTypes.TOGGLE_IS_FIND_STATUS:
      return {...state, isFindStatus: !state.isFindStatus};

    case ResearchActionTypes.TOGGLE_IS_NOT_FOUND_STATUS:
      return {...state, isNotFoundStatus: !state.isNotFoundStatus};

    case ResearchActionTypes.TOGGLE_IS_CREATE_STATUS:
      return {...state, isCreateStatus: !state.isCreateStatus};

    case ResearchActionTypes.SET_CANCER_CODE_ID:
      return {...state, cancerCodeId: action.payload};

    case ResearchActionTypes.SET_CANCER_CODE_PARAM_ID:
      return {...state, cancerCodeParamId: action.payload};

    case ResearchActionTypes.SET_CANCER_TYPE_ID:
      return {...state, cancerTypeId: action.payload};

    case ResearchActionTypes.SET_CANCER_TYPE_PARAM_ID:
      return {...state, cancerTypeParamId: action.payload};

    case ResearchActionTypes.ADD_FILE_TO_STORAGE:
      return {...state, uploadData: action.payload};

    case ResearchActionTypes.RESET_RESEARCHES:
      return {
        ...state,
        researches: [],
        foundResearches: [],
        isShowCancerParamOption: false,
        isShowTypeParamOption: false,
      };

    case ResearchActionTypes.FILTER_RESEARCH_BY_TYPE:
      return {
        ...state,
        foundResearches: filterResearchByType(state.researches,action.payload),
        isShowTypeParamOption: true,
        isShowCancerParamOption: false,
      };

    case ResearchActionTypes.FILTER_RESEARCH_BY_TYPE_PARAM:
      return {
        ...state,
        foundResearches: filterResearchByTypeParam(state.researches,action.payload),
        isShowCancerParamOption: true,
      };

    default:
      return state;
  }
};
