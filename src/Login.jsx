import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInterface from "./LoginInterface";

function Login({ setUsername }) {
  return (
    <LoginInterface
      text="Login"
      loadingText="Logging"
      setUsername={setUsername}
    />
  );
}

export default Login;
