import { GET_API, GET_SUB } from "./actionTypes";

export const getApiFn = (state, action) => {
  const getApi = action.params;
  const newState = { ...state, getApi: getApi };

  return newState;
};

export const getSubFn = (state, action) => {
  const newState = { ...state, getSub: action.params };

  return newState;
};

export const actionMap = {};
actionMap[GET_API] = getApiFn;
actionMap[GET_SUB] = getSubFn;

export const reducer = (state = {}, action) => {
  if (actionMap.hasOwnProperty(action.type)) {
    return actionMap[action.type](state, action);
  }
  return state;
};
