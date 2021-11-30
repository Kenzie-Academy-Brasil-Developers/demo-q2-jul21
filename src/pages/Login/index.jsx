import { useAuth } from "../../providers/AuthContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState();

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const style = {
    display: "flex",
    flexDirection: "column",
  };

  const { signIn } = useAuth();

  const handleSignIn = (data) => {
    setLoading(true);

    signIn(data)
      .then((_) => setLoading(false))
      .catch((err) => {
        toast.error("Email ou senha inválida");
        setLoading(false);
      });
  };

  return (
    <div className="App-header">
      <h1> Login </h1>
      <form style={style} onSubmit={handleSubmit(handleSignIn)}>
        <input placeholder="Email" {...register("email")} />
        <span>{errors.email?.message} </span>

        <input placeholder="Senha" type="password" {...register("password")} />
        <span>{errors.password?.message} </span>

        {loading && <span>Carregando</span>}

        <button type="submit">Enviar</button>
      </form>

      <div>
        <Link to="/signup"> Cadastro </Link>
      </div>
    </div>
  );
};

export default Login;
