import { ADD_POKEMON } from "./actionTypes";

const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMON:
      const { pokemon } = action;

      return [...state, pokemon];

    default:
      return state;
  }
};

export default pokemonsReducer;
