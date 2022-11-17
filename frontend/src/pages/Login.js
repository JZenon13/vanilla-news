import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </label>
        {error && <div>{error}</div>}
        <button>Login</button>
      </form>
      <img
        src="https://www.giantfreakinrobot.com/wp-content/uploads/2022/06/hellotherethumb.jpg"
        style={{ height: "80vh", padding: "10px" }}
      />
    </div>
  );
}

export default Login;
