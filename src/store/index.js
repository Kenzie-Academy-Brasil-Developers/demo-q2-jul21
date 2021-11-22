import { createStore, combineReducers } from "redux";

import resultReducer from "./modules/result/reducer";

const reducers = combineReducers({ result: resultReducer });

const store = createStore(reducers);

export default store;
