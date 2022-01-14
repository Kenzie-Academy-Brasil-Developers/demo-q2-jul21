import { createStore } from "redux";
import { ICartReducer } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer);

export interface State {
  cart: ICartReducer;
}

export default store;
