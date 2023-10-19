import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import  ActionCreators from "../action-creators";


export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
