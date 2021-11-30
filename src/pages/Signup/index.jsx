import { useAuth } from "../../providers/AuthContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useHistory } from "react-router";

const Signup = () => {
  const [loading, setLoading] = useState();

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    name: yup.string().required("Nome obrigatório"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const style = {
    display: "flex",
    flexDirection: "column",
  };

  const handleSignup = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso");
        history.push("/");
      })
      .catch((err) => {
        toast.error("Email já está em uso");
      });
  };

  return (
    <div className="App-header">
      <h1> Cadastro </h1>
      <form style={style} onSubmit={handleSubmit(handleSignup)}>
        <input placeholder="Nome" {...register("name")} />
        <span>{errors.name?.message} </span>

        <input placeholder="Email" {...register("email")} />
        <span>{errors.email?.message} </span>

        <input placeholder="Senha" type="password" {...register("password")} />
        <span>{errors.password?.message} </span>

        <input placeholder="Bio" {...register("bio")} />
        <span>{errors.bio?.message} </span>

        <input placeholder="Contato" {...register("contact")} />
        <span>{errors.contact?.message} </span>

        <input placeholder="Módulo do curso" {...register("course_module")} />
        <span>{errors.course_module?.message} </span>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Signup;
