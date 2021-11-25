// Dessa maneira, separando o combineReducers, nosso index.js da pasta store
// se torna um arquivo 100% de configuração. Onde não vamos editar mais.

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
