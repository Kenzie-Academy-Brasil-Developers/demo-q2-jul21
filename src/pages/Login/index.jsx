import {
  Avatar,
  Button,
  Box,
  Container,
  CssBaseline,
  FormControlLabel,
  Link,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Checkbox from "../../components/Checkbox";

// Mesma coisa que acima
// import Button from "@mui/material/Button"

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minímo de 6 digítos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data) => console.log(data);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>

        <Typography component="h1" variant="h4">
          Sign In
        </Typography>
        <Box
          onSubmit={handleSubmit(handleSignIn)}
          component="form"
          sx={{ mt: 1 }}
        >
          <TextField
            {...register("email")}
            margin="normal"
            fullWidth
            label="Email"
            helperText={errors.email?.message}
            error={!!errors.email?.message}
          />
          <TextField
            {...register("password")}
            margin="normal"
            fullWidth
            label="Senha"
            type="password"
            helperText={errors.password?.message}
            error={!!errors.password?.message}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar de mim"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
          <Grid container xs={12}>
            <Grid item xs>
              <Link variant="body2"> Esqueceu a senha? </Link>
            </Grid>
            <Grid item>
              <Link variant="body2"> Não tem uma conta? Cadastre-se </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
