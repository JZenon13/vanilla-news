import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ token }) {
  const navigate = useNavigate();
  function handleLogin() {
    localStorage.clear(token);
    navigate("/");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav"></div>
        </div>

        <button
          class="btn btn-outline-secondary my-2 my-sm-0"
          type="submit"
          onClick={() => {
            localStorage.clear(token);
            handleLogin();
          }}
        >
          Login
        </button>
      </nav>
    </div>
  );
}

export default Logout;
