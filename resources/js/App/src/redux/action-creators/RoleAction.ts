import {Dispatch} from "redux";
import {RoleAction, RoleActionTypes} from "../types/RoleTypes";
import {axRequest} from "../../helpers/axiosHelper";



export const fetchRoles = () => {
  return async (dispatch: Dispatch<RoleAction>) => {
    try {
      dispatch({type: RoleActionTypes.FETCH_ROLE});
      const response = await axRequest.get('api/roles');
      dispatch({
        type: RoleActionTypes.FETCH_ROLE_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: RoleActionTypes.FETCH_ROLE_ERROR,
        payload: error
      });
    }
  }
}
