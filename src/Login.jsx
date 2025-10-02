import LoginInterface from "./LoginInterface";

function Login({ setUsername, api }) {
  return (
    <LoginInterface
      text="Login"
      loadingText="Logging"
      setUsername={setUsername}
      api={api}
    />
  );
}

export default Login;
