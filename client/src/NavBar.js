import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Business from "./Categories/Business";
import Entertainment from "./Categories/Entertainment";
import General from "./Categories/General";
import Science from "./Categories/Science";
import Sports from "./Categories/Sports";
import Technology from "./Categories/Technology";
import SearchedTopic from "./TopNews/SearchedTopic";
import TopNews from "./TopNews/TopNews";

function NavBar({ topHeadlines, username }) {
  const [business, setBusiness] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [general, setGeneral] = useState("");
  const [science, setScience] = useState("");
  const [sports, setSports] = useState("");
  const [technology, setTechnology] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate("/searched", { state: { search: search } });
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
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ marginRight: "1%" }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              class="btn btn-outline-light my-2 my-sm-0"
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
            Hi {username}
          </span>
        </div>

        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">
          Logout
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<TopNews {...{ topHeadlines }} />} />
        <Route path="/business" element={<Business {...{ business }} />} />
        <Route
          path="/entertainment"
          element={<Entertainment {...{ entertainment }} />}
        />
        <Route path="/science" element={<Science {...{ science }} />} />
        <Route path="/sports" element={<Sports {...{ sports }} />} />
        <Route
          path="/technology"
          element={<Technology {...{ technology }} />}
        />
        <Route path="/searched" element={<SearchedTopic search={search} />} />
      </Routes>
    </>
  );
}

export default NavBar;
