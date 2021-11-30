const Login = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div className="App-header">
      <h1> Login </h1>
      <form style={style}>
        <input placeholder="Nome de usuário" />

        <input placeholder="Senha" type="password" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
