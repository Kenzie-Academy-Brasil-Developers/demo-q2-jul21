import { Reducer } from "redux";
import { ICartReducer } from "./types";
import produce from "immer";

const initialState: ICartReducer = {
  items: [],
};

const cart: Reducer<ICartReducer> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART":
        const { product } = action.payload;

        const productIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productIndex >= 0) {
          draft.items[productIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;

      default: {
        return draft;
      }
    }
  });
};

export default cart;
