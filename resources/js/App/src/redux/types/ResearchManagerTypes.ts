
export interface ResearchManagerTypes {
  id: number;
  name: string;
  phone: string;
}

export interface ResearchManagerState {
  managers: ResearchManagerTypes[];
  managerLoading: boolean;
  error: null | string;
  completeMessage: string | number;
}

interface ResponseManagerType {
  data: ResearchManagerTypes;
  message: string;
}

export enum ResearchManagerActionTypes {
  FETCH_RESEARCH_MANAGERS = "FETCH_RESEARCH_MANAGERS",
  FETCH_RESEARCH_MANAGERS_SUCCESS = "FETCH_RESEARCH_MANAGERS_SUCCESS",
  FETCH_RESEARCH_MANAGERS_ERROR = "FETCH_RESEARCH_MANAGERS_ERROR",

  CREATE_MANAGER = "CREATE_MANAGER",
  CREATE_MANAGER_SUCCESS = "CREATE_MANAGER_SUCCESS",
  CREATE_MANAGER_ERROR = "CREATE_MANAGER_ERROR",

  UPDATE_MANAGER = "UPDATE_MANAGER",
  UPDATE_MANAGER_SUCCESS = "UPDATE_MANAGER_SUCCESS",
  UPDATE_MANAGER_ERROR = "UPDATE_MANAGER_ERROR",

  DELETE_MANAGER = "DELETE_MANAGER",
  DELETE_MANAGER_SUCCESS = "DELETE_MANAGER_SUCCESS",
  DELETE_MANAGER_ERROR = "DELETE_MANAGER_ERROR",

}

interface FetchResearchManagerAction {
  type: ResearchManagerActionTypes.FETCH_RESEARCH_MANAGERS;
}
interface FetchResearchManagerSuccessAction {
  type: ResearchManagerActionTypes.FETCH_RESEARCH_MANAGERS_SUCCESS;
  payload: ResearchManagerTypes[];
}
interface FetchResearchManagerErrorAction {
  type: ResearchManagerActionTypes.FETCH_RESEARCH_MANAGERS_ERROR;
  payload: string;
}

interface CreateManagerAction {
  type: ResearchManagerActionTypes.CREATE_MANAGER;
}
interface CreateManagerSuccessAction {
  type: ResearchManagerActionTypes.CREATE_MANAGER_SUCCESS;
  payload: ResponseManagerType;
}
interface CreateManagerErrorAction {
  type: ResearchManagerActionTypes.CREATE_MANAGER_ERROR;
  payload: string;
}

interface UpdateManagerAction {
  type: ResearchManagerActionTypes.UPDATE_MANAGER;
}
interface UpdateManagerSuccessAction {
  type: ResearchManagerActionTypes.UPDATE_MANAGER_SUCCESS;
  payload: ResponseManagerType;
}
interface UpdateManagerErrorAction {
  type: ResearchManagerActionTypes.UPDATE_MANAGER_ERROR;
  payload: string;
}

interface DeleteManagerAction {
  type: ResearchManagerActionTypes.DELETE_MANAGER;
}
interface DeleteManagerSuccessAction {
  type: ResearchManagerActionTypes.DELETE_MANAGER_SUCCESS;
  payload: number;
}
interface DeleteManagerErrorAction {
  type: ResearchManagerActionTypes.DELETE_MANAGER_ERROR;
  payload: string;
}


export type ResearchManagerAction =
  | FetchResearchManagerAction
  | FetchResearchManagerSuccessAction
  | FetchResearchManagerErrorAction

  | CreateManagerAction
  | CreateManagerSuccessAction
  | CreateManagerErrorAction

  | UpdateManagerAction
  | UpdateManagerSuccessAction
  | UpdateManagerErrorAction

  | DeleteManagerAction
  | DeleteManagerSuccessAction
  | DeleteManagerErrorAction;
