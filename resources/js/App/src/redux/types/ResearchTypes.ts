import {ResearchManagerTypes} from "./ResearchManagerTypes";
import {HospitalTypes} from "./HospitalTypes";

interface CancerCodeParamsTypes {
  id: number;
  name: string;
}

interface CancerTypeParamTypes {
  id: number;
  name: string;
}

interface CancerCodeTypes {
  id: number;
  name: string;
}

interface CancerTypeTypes {
  id: number;
  name: string;
}

interface PayLoadResearchDataType {
  data: ResearchTypes;
  status: boolean;
}

export interface ResearchFindDataFormType {
  cancerCodeId: number | null,
  cancerCodeParamId?: number[] | null,
  cancerTypeId: number | null,
  cancerTypeParamId: number | null,
  uploadData: FileList | null,
  userId?: number | null,
  userName?: string,
  userPhone?: string,
}

export interface ResearchCreateFormType {
  cancerCodeId: number | null,
  cancerCodeParamId?: number[] | null,
  cancerTypeId: number | null,
  cancerTypeParamId: number | null,
  researchManagersId: number | null,
  hospitalId: number | null,
}

export interface ResearchTypes {
  id?: number;
  name: string;
  researchManager: ResearchManagerTypes;
  hospital: HospitalTypes;
  cancerType: CancerTypeTypes;
  cancerTypeParam: CancerTypeParamTypes;
  cancerCode: CancerCodeTypes;
  cancerCodeParams: CancerCodeParamsTypes[];
  active: string;
}

export interface FoundResearchDataTypes {
  data: ResearchTypes[];
  status: boolean;
}

export interface CheckedResearchDataTypes {
  data: ResearchTypes[];
  status: boolean;
  notFoundStatus: boolean;
}

export interface ResearchState {
  researches: ResearchTypes[];
  foundResearches: ResearchTypes[];
  cancerCodeId: number | null,
  cancerCodeParamId: number[] | null,
  cancerTypeId: number | null,
  cancerTypeParamId: number | null,
  uploadData: FileList | null,
  researchLoading: boolean;
  isNotFoundStatus: boolean
  isFindStatus: boolean;
  isCreateStatus: boolean;
  isShowCancerParamOption: boolean;
  isShowTypeParamOption: boolean;
  error: null | string;
}

export enum ResearchActionTypes {
  FETCH_RESEARCH = "FETCH_RESEARCH",
  FETCH_RESEARCH_SUCCESS = "FETCH_RESEARCH_SUCCESS",
  FETCH_RESEARCH_ERROR = "FETCH_RESEARCH_ERROR",

  FIND_RESEARCH = "FIND_RESEARCH",
  FIND_RESEARCH_SUCCESS = "FIND_RESEARCH_SUCCESS",
  FIND_RESEARCH_ERROR = "FIND_RESEARCH_ERROR",

  CHECK_RESEARCH = "CHECK_RESEARCH",
  CHECK_RESEARCH_SUCCESS = "CHECK_RESEARCH_SUCCESS",
  CHECK_RESEARCH_ERROR = "CHECK_RESEARCH_ERROR",

  CREATE_RESEARCH = "CREATE_RESEARCH",
  CREATE_RESEARCH_SUCCESS = "CREATE_RESEARCH_SUCCESS",
  CREATE_RESEARCH_ERROR = "CREATE_RESEARCH_ERROR",

  UPDATE_RESEARCH = "UPDATE_RESEARCH",
  UPDATE_RESEARCH_SUCCESS = "UPDATE_RESEARCH_SUCCESS",
  UPDATE_RESEARCH_ERROR = "UPDATE_RESEARCH_ERROR",

  DELETE_RESEARCH = "DELETE_RESEARCH",
  DELETE_RESEARCH_SUCCESS = "DELETE_RESEARCH_SUCCESS",
  DELETE_RESEARCH_ERROR = "DELETE_RESEARCH_ERROR",

  TOGGLE_IS_FIND_STATUS = "TOGGLE_IS_FIND_STATUS",

  TOGGLE_IS_NOT_FOUND_STATUS = "TOGGLE_IS_NOT_FOUND_STATUS",

  TOGGLE_IS_CREATE_STATUS = "TOGGLE_IS_CREATE_STATUS",

  SET_CANCER_CODE_ID = "SET_CANCER_CODE_ID",

  SET_CANCER_CODE_PARAM_ID = "SET_CANCER_CODE_PARAM_ID",

  SET_CANCER_TYPE_ID = "SET_CANCER_TYPE_ID",

  SET_CANCER_TYPE_PARAM_ID = "SET_CANCER_TYPE_PARAM_ID",

  ADD_FILE_TO_STORAGE = "ADD_FILE_TO_STORAGE",

  RESET_RESEARCHES = "RESET_RESEARCHES",

  FILTER_RESEARCH_BY_TYPE = "FILTER_RESEARCH_BY_TYPE",

  FILTER_RESEARCH_BY_TYPE_PARAM = "FILTER_RESEARCH_BY_TYPE_PARAM",
}

interface FetchResearchAction {
  type: ResearchActionTypes.FETCH_RESEARCH;
}
interface FetchResearchSuccessAction {
  type: ResearchActionTypes.FETCH_RESEARCH_SUCCESS;
  payload: ResearchTypes[];
}
interface FetchResearchErrorAction {
  type: ResearchActionTypes.FETCH_RESEARCH_ERROR;
  payload: string;
}

interface FindResearchAction {
  type: ResearchActionTypes.FIND_RESEARCH;
}
interface FindResearchSuccessAction {
  type: ResearchActionTypes.FIND_RESEARCH_SUCCESS;
  payload: FoundResearchDataTypes;
}
interface FindResearchErrorAction {
  type: ResearchActionTypes.FIND_RESEARCH_ERROR;
  payload: string;
}

interface CheckResearchAction {
  type: ResearchActionTypes.CHECK_RESEARCH;
}
interface CheckResearchSuccessAction {
  type: ResearchActionTypes.CHECK_RESEARCH_SUCCESS;
  payload: CheckedResearchDataTypes;
}
interface CheckResearchErrorAction {
  type: ResearchActionTypes.CHECK_RESEARCH_ERROR;
  payload: string;
}

interface CreateResearchAction {
  type: ResearchActionTypes.CREATE_RESEARCH;
}
interface CreateResearchSuccessAction {
  type: ResearchActionTypes.CREATE_RESEARCH_SUCCESS;
  payload: boolean;
}
interface CreateResearchErrorAction {
  type: ResearchActionTypes.CREATE_RESEARCH_ERROR;
  payload: string;
}

interface UpdateResearchAction {
  type: ResearchActionTypes.UPDATE_RESEARCH;
}
interface UpdateResearchSuccessAction {
  type: ResearchActionTypes.UPDATE_RESEARCH_SUCCESS;
  payload: PayLoadResearchDataType;
}
interface UpdateResearchErrorAction {
  type: ResearchActionTypes.UPDATE_RESEARCH_ERROR;
  payload: string;
}

interface DeleteResearchAction {
  type: ResearchActionTypes.DELETE_RESEARCH;
}
interface DeleteResearchSuccessAction {
  type: ResearchActionTypes.DELETE_RESEARCH_SUCCESS;
  payload: number;
}
interface DeleteResearchErrorAction {
  type: ResearchActionTypes.DELETE_RESEARCH_ERROR;
  payload: string;
}

interface ToggleIsFindStatusAction {
  type: ResearchActionTypes.TOGGLE_IS_FIND_STATUS;
}

interface ToggleIsNotFoundStatusAction {
  type: ResearchActionTypes.TOGGLE_IS_NOT_FOUND_STATUS;
}

interface ToggleIsCreateStatusAction {
  type: ResearchActionTypes.TOGGLE_IS_CREATE_STATUS;
}

interface SetCancerCodeIdAction {
  type: ResearchActionTypes.SET_CANCER_CODE_ID;
  payload: number | null;
}

interface SetCancerCodeParamIdAction {
  type: ResearchActionTypes.SET_CANCER_CODE_PARAM_ID;
  payload: number[] | null;
}

interface SetCancerTypeIdAction {
  type: ResearchActionTypes.SET_CANCER_TYPE_ID;
  payload: number | null;
}

interface SetCancerTypeParamIdAction {
  type: ResearchActionTypes.SET_CANCER_TYPE_PARAM_ID;
  payload: number | null;
}

interface SetLinkToHistoryAction {
  type: ResearchActionTypes.ADD_FILE_TO_STORAGE;
  payload: FileList | null;
}

interface ResetResearchesAction {
  type: ResearchActionTypes.RESET_RESEARCHES;
}

interface FilterResearchByTypeAction {
  type: ResearchActionTypes.FILTER_RESEARCH_BY_TYPE;
  payload: number;
}

interface FilterResearchByTypeParamAction {
  type: ResearchActionTypes.FILTER_RESEARCH_BY_TYPE_PARAM;
  payload: number;
}


export type ResearchAction =
  | FetchResearchAction
  | FetchResearchSuccessAction
  | FetchResearchErrorAction

  | FindResearchAction
  | FindResearchSuccessAction
  | FindResearchErrorAction

  | CheckResearchAction
  | CheckResearchSuccessAction
  | CheckResearchErrorAction

  | CreateResearchAction
  | CreateResearchSuccessAction
  | CreateResearchErrorAction

  | UpdateResearchAction
  | UpdateResearchSuccessAction
  | UpdateResearchErrorAction

  | DeleteResearchAction
  | DeleteResearchSuccessAction
  | DeleteResearchErrorAction

  | ToggleIsFindStatusAction

  | ToggleIsCreateStatusAction

  | ToggleIsNotFoundStatusAction

  | SetCancerCodeIdAction

  | SetCancerCodeParamIdAction

  | SetCancerTypeIdAction

  | SetCancerTypeParamIdAction

  | SetLinkToHistoryAction

  | ResetResearchesAction

  | FilterResearchByTypeAction

  | FilterResearchByTypeParamAction;

