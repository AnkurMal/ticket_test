import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInterface from "./LoginInterface";

function Register({ setUsername }) {
  return (
    <LoginInterface
      text="Register"
      loadingText="Registering"
      setUsername={setUsername}
    />
  );
}

export default Register;
