import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  return (
    <div>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
}

export default Logout;
