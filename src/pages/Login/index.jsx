import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInThunk } from "../../store/modules/user/thunks";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

// O Componente / página tem responsabilidade de receber informações do usuário através de eventos
// E o redux tem a responsabilidade de trabalhar com as requisições e fornecer de maneira global as informações

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data) => {
    dispatch(signInThunk(data, history));
  };

  const style = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div className="App-header">
      <h1> Login </h1>
      <form style={style} onSubmit={handleSubmit(handleSignIn)}>
        <input placeholder="Nome de usuário" {...register("email")} />
        <span>{errors.email?.message} </span>
        <input placeholder="Senha" type="password" {...register("password")} />
        <span>{errors.password?.message} </span>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
