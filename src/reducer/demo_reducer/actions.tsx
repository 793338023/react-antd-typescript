import { AnyAction, Dispatch } from "redux";
import * as actionTypes from "./actionTypes";

import axios from "axios";

export const demoGetApi = (p: any) => {
  return (dispatch: Dispatch<AnyAction>) => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const { data } = response;
        dispatch({
          type: actionTypes.GET_API,
          params: data
        });
      })
      .catch(error => {});
  };
};

export const demoGet = () => {
  return {
    type: actionTypes.GET_SUB,
    params: "你好!!!"
  };
};
