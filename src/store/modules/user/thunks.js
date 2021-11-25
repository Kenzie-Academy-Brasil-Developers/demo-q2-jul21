import { toast } from "react-toastify";
import api from "../../../services/api";
import { signIn } from "./actions";

export const signInThunk =
  (userData, toastError, history) => async (dispatch, getState) => {
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

      localStorage.setItem("@demo:token", response.data.access);

      dispatch(signIn(response.data.access));
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
