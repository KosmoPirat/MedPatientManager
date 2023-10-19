import {Dispatch} from "redux";
import {StatusAction, StatusActionTypes} from "../types/StatusTypes";
import {axRequest} from "../../helpers/axiosHelper";



export const fetchStatuses = () => {
  return async (dispatch: Dispatch<StatusAction>) => {
    try {
      dispatch({type: StatusActionTypes.FETCH_STATUS});
      const response = await axRequest.get('api/statuses');
      dispatch({
        type: StatusActionTypes.FETCH_STATUS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: StatusActionTypes.FETCH_STATUS_ERROR,
        payload: error
      });
    }
  }
}
