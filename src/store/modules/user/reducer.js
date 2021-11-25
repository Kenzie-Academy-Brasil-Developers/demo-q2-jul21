import { SIGN_IN } from "./actionTypes";

const token = localStorage.getItem("@demo:token") || "";

const defaultState = {
  token,
  user: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { token } = action;

      return { ...state, token };

    default:
      return state;
  }
};

export default userReducer;
