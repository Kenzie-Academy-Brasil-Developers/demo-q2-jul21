import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

import { useAuth } from "../../providers/Auth";

function Login() {
  const history = useHistory();

  const { signIn } = useAuth();

  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (userData) => {
    console.log('teste')
    signIn(userData, setError, history);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)} data-testid="formTestId">
        <div>
          <TextField
            data-testid="userNameTestId"
            margin="normal"
            variant="outlined"
            label="Nome de usuário"
            name="username"
            size="small"
            color="secondary"
            inputRef={register}
            error={!!errors.username}
            helperText={errors.username?.message}
          ></TextField>
        </div>

        <div>
          <TextField
            data-testid="passwordTestId"
            margin="normal"
            variant="outlined"
            label="Senha"
            name="password"
            size="small"
            color="primary"
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password?.message}
          ></TextField>
        </div>
        <Button
          data-testid="submitButton"
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Enviar
        </Button>
      </form>
      {error && <span> Usuário ou senha incorretas! </span>}
    </Container>
  );
}

export default Login;
