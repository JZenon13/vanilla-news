import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    navigate("/topHeadlines");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
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
        <button>Sign Up</button>
      </form>
      <img
        src="https://www.giantfreakinrobot.com/wp-content/uploads/2022/06/hellotherethumb.jpg"
        style={{ height: "80vh", padding: "10px" }}
      />
    </div>
  );
}

export default Signup;
