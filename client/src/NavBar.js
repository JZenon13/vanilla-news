import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ username, search, setBusiness, setSearch, setUserName }) {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate("/searched", { state: { search: search } });
  }

  function handleLogout() {
    localStorage.clear();
    setUserName("");
    navigate("/logout");
  }
  return (
    <>
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
            <div
              className="nav-item nav-link active"
              onClick={(e) => {
                navigate("/business");
                setBusiness(e.target.value);
              }}
            >
              Business
            </div>
            <div
              className="nav-item nav-link"
              onClick={() => navigate("/entertainment")}
            >
              Entertainment
            </div>
            <div
              className="nav-item nav-link"
              onClick={() => navigate("/general")}
            >
              General
            </div>
            <div
              className="nav-item nav-link"
              onClick={() => navigate("/science")}
            >
              Science
            </div>
            <div
              className="nav-item nav-link"
              onClick={() => navigate("/sports")}
            >
              Sports
            </div>
            <div
              className="nav-item nav-link"
              onClick={() => navigate("/technology")}
            >
              Technology
            </div>
          </div>
        </div>
        <div className="container">
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
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
              onClick={(e) => {
                handleSearch(e);
              }}
            >
              Search
            </button>
          </form>{" "}
          <span
            style={{
              color: "white",
            }}
          >
            {username === ("" || undefined) ? null : `Hi ${username}`}
          </span>
        </div>

        <button
          class="btn btn-outline-secondary my-2 my-sm-0"
          type="submit"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </>
  );
}

export default NavBar;
