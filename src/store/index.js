import { createStore, combineReducers, applyMiddleware } from "redux";
import pokemonsReducer from "./modules/pokemons/reducer";

import thunk from "redux-thunk";

const reducers = combineReducers({
  pokemons: pokemonsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
