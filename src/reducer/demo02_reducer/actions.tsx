import { AnyAction, Dispatch } from "redux";
import * as actionTypes from "./actionTypes";
import data from "./data";
// import axios from "axios";

export const demoGetData = (p: any) => {
  return (dispatch: Dispatch<AnyAction>) => {
    // 请求数据
    setTimeout(() => {
      dispatch({
        type: actionTypes.GET_DATA,
        params: data
      });
    }, Math.floor(Math.random() * 5000) + 500);
  };
};

export const demoSubmit = params => {
  return {
    type: actionTypes.GET_SUBMIT,
    params: params
  };
};
