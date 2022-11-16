import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/searched/${search}`);
  }
  return (
    <header>
      <div style={{ textAlign: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "black" }}>Vanilla News</h1>
        </Link>
      </div>

      <nav>
        {user && (
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
                <div className="navbar-nav">
                  <form
                    className="form-inline"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginRight: "1%",
                    }}
                  >
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ marginRight: "1%" }}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </form>
                  <button
                    className="btn btn-outline-light my-2 my-sm-0"
                    type="submit"
                    onClick={(e) => {
                      handleSearch(e);
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>

              <span
                style={{
                  color: "white",
                  marginRight: "10px",
                }}
              >
                {user.email}
              </span>

              <button
                class="btn btn-outline-secondary my-2 my-sm-0"
                type="submit"
                onClick={handleClick}
              >
                Logout
              </button>
            </nav>
          </div>
        )}
        {!user && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                Login
              </Link>
            </div>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              Signup
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
