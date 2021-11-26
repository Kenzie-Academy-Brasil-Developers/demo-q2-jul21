import { SIGN_IN } from "./actionTypes";

// Action que apenas transporta os dados
export const signIn = (token) => ({ type: SIGN_IN, token });
