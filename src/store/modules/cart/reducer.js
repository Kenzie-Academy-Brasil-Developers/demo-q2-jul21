import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action;

      return [...state, product];

    case REMOVE_FROM_CART:
      const { id } = action;
      const newList = state.filter((product) => product.id !== id);

      return newList;

    default:
      return state;
  }
};

export default cartReducer;
