import { toast } from "react-toastify";
import api from "../../../services/api";
import { signIn } from "./actions";

// aqui nas actions não podemos utilizar hooks
// hooks só são utilizados em componentes

// A primeira função recebe os seus parametros, o que pode ser qualquer coisa

// A segunda função é necessária para conseguirmos acessar o dispatch e o getState
export const signInThunk = (userData, history) => async (dispatch) => {
  // api
  //   .post("/sessions/", userData)
  //   .then((response) => {
  //     /* Poderíamos decodificar o token de acesso e buscar as informações na api,
  //   ou passar o id do usuario que vem no token para a store tbm*/
  //     const { access } = response.data;

  //     localStorage.setItem("@demo:token", access);

  //     dispatch(signIn(access));
  //     history.push("/dashboard");
  //   })
  //   .catch((err) => {
  //     toast.error("Usuário não encontrado");
  //   });

  try {
    const response = await api.post("/sessions/", userData);

    // O JSON.Stringify só é necessário quando trabalhando com dados como objetos e arrays
    localStorage.setItem("@demo:token", response.data.token);

    // Nesse caso é necessário por ser um objeto
    // Caso apareça no seu localStorage no browser [object object], está faltando o stringify
    localStorage.setItem("@demo:user", JSON.stringify(response.data.user));

    dispatch(signIn(response.data.token));
    history.push("/dashboard");

    console.log(response.data);
  } catch (err) {
    toast.error("Usuario nao encontrado");
  }
};

export const logout = () => (dispatch, getState) => {};

export const updateProfile = (userId, userData, token) => (dispatch) => {
  api.patch(`/users/${userId}`, userData);
};
