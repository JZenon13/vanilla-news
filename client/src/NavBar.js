import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar({
  username,
  search,
  setSearch,
  setUserName,
  token,
  setNewSearch,
  newSearch,
}) {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(true);

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/searched/${search}`);
  }

  function handleLogout() {
    localStorage.clear(token);
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
                setNewSearch(!newSearch);
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
          {username === ("" || undefined) ? null : `Hi ${username}`}
        </span>

        <button
          class="btn btn-outline-secondary my-2 my-sm-0"
          type="submit"
          onClick={() => {
            setLogged(!logged);
            localStorage.clear(token);
            handleLogout();
          }}
        >
          Logout
        </button>
      </nav>
    </>
  );
}

export default NavBar;
