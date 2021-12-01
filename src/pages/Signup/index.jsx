import { useAuth } from "../../providers/AuthContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useHistory } from "react-router";

import Button from "../../components/Button";

import { Container, Form } from "./styles";
import { TextField } from "@mui/material";

import InputMask from "react-input-mask";

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
    <Container>
      <Form onSubmit={handleSubmit(handleSignup)}>
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          variant="outlined"
          {...register("name")}
          error={!!errors.name?.message}
          helperText={errors.name?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          variant="outlined"
          {...register("email")}
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Senha"
          variant="outlined"
          type="password"
          {...register("password")}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Bio"
          variant="outlined"
          {...register("bio")}
          error={!!errors.bio?.message}
          helperText={errors.bio?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Contato"
          variant="outlined"
          {...register("contact")}
          error={!!errors.contact?.message}
          helperText={errors.contact?.message}
        />

        <TextField
          margin="normal"
          fullWidth
          label="Módulo do curso"
          variant="outlined"
          {...register("course_module")}
          error={!!errors.course_module?.message}
          helperText={errors.course_module?.message}
        />

        <Button primaryColor type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
