import * as reducerRegion from "./reducer_region";

import { reducer as demoReducer } from "./demo_reducer/reducer";
import { reducer as demo02Reducer } from "./demo02_reducer/reducer";

import { combineReducers } from "redux";

const reducers: { [key: string]: any } = {};

reducers[reducerRegion.DEMO_REGION] = demoReducer;
reducers[reducerRegion.DEMO02_REGION] = demo02Reducer;

const rootReducer = combineReducers(reducers);

export { rootReducer };
