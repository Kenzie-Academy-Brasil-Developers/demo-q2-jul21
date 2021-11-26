import { SIGN_IN } from "./actionTypes";

const token = localStorage.getItem("@demo:token") || "";

// faltando o parse, retorna um undefined que acaba quebrando a aplicação
const user = JSON.parse(localStorage.getItem("@demo:user")) || {};

// A store é similar ao state comum, ela armazena em memória (volatil)
const defaultState = {
  token,
  user,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    // cada case é uma alteração dentro do meu state
    case SIGN_IN:
      // O state só sera atualizado aqui no reducer
      // Dentro do switch case
      const { token, user } = action;

      return { ...state, token, user };

    default:
      return state;
  }
};

export default userReducer;
