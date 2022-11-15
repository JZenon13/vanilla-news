import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createUser } from "../api/user";

async function loginUser(credentials) {
  return fetch("http://localhost:5000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({
  setToken,
  setUserName,
  setPassword,
  username,
  password,
  setEmail,
  email,
  setUser,
}) {
  const [alreadyUser, setAlreadyUser] = useState(false);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
      email,
    });

    setToken(token);
    createUser(token);
  };

  const handleUser = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });

    setToken(token);
    createUser(token);
  };

  return (
    <>
      <div className="loginForm">
        {alreadyUser ? (
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleCreateUser}
          >
            <h1>Sign In</h1>
            <div className="w-25 p-2 row mb-3">
              <label className="col-sm-2 col-form-label">User Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-25 p-2 row mb-3">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="w-25 p-2 row mb-3">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" style={{ width: "15%", marginLeft: "3.5%" }}>
              Sign in
            </button>
            <span>
              <u
                style={{ cursor: "pointer" }}
                onClick={() => setAlreadyUser(!alreadyUser)}
              >
                Have an account?
              </u>
            </span>
          </form>
        ) : (
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleUser}
          >
            <h1>Sign In</h1>
            <div className="w-25 p-2 row mb-3">
              <label className="col-sm-3 col-form-label">User Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>

            <div className="w-25 p-2 row mb-3">
              <label className="col-sm-3 col-form-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" style={{ width: "15%", marginLeft: "3.5%" }}>
              Sign in
            </button>
            <span>
              <u
                style={{ cursor: "pointer" }}
                onClick={() => setAlreadyUser(!alreadyUser)}
              >
                Create an account
              </u>
            </span>
          </form>
        )}
      </div>
    </>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
