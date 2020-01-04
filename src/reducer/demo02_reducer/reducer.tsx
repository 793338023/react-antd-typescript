import * as actionTypes from "./actionTypes";

export const getDataFn = (state, action) => {
  const newState = { ...state, configData: action.params };

  return newState;
};

export const getSubFn = (state, action) => {
  const newState = { ...state, formData: action.params };

  return newState;
};

export const actionMap: { [key: string]: any } = {};
actionMap[actionTypes.GET_DATA] = getDataFn;
actionMap[actionTypes.GET_SUBMIT] = getSubFn;

export const reducer = (state = {}, action) => {
  if (actionMap.hasOwnProperty(action.type)) {
    return actionMap[action.type](state, action);
  }
  return state;
};
