import LoginInterface from "./LoginInterface";

function Register({ setUsername, api }) {
  return (
    <LoginInterface
      text="Register"
      loadingText="Registering"
      setUsername={setUsername}
      api={api}
    />
  );
}

export default Register;
