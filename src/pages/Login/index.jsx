import { useAuth } from "../../providers/AuthContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";

import { Container, ContainerMessage, Form } from "./styles";

import { TextField } from "@mui/material";

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

  const history = useHistory();

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
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
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
        <Button type="submit">Enviar</Button>
        <ContainerMessage>
          <span>
            Criar uma página para mostrar suas{" "}
            <strong>
              habilidades
              <br />
              metas e progressos
            </strong>
          </span>
        </ContainerMessage>
        <Button primaryColor={false} onClick={() => history.push("/signup")}>
          Cadastre-se
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
