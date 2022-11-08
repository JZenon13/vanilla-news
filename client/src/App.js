import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Login from "./Login/Login";
import { Routes, Route } from "react-router-dom";
import { getTopHeadlines } from "./api/news";
import useToken from "./useToken";
import TopNews from "./TopNews/TopNews";
import Business from "./Categories/Business";
import Entertainment from "./Categories/Entertainment";
import Science from "./Categories/Science";
import Sports from "./Categories/Sports";
import Technology from "./Categories/Technology";
import SearchedTopic from "./TopNews/SearchedTopic";
import Logout from "./Login/Logout";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const { token, setToken } = useToken();
  const [password, setPassword] = useState();
  const [username, setUserName] = useState();
  const [business, setBusiness] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [general, setGeneral] = useState("");
  const [science, setScience] = useState("");
  const [sports, setSports] = useState("");
  const [technology, setTechnology] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getTopHeadlines().then((data) => setTopHeadlines(data.articles));
  }, []);

  if (!token) {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setToken={setToken}
              setUserName={setUserName}
              setPassword={setPassword}
              password={password}
              username={username}
            />
          }
        />
      </Routes>
    );
  }

  return (
    <div className="App">
      {window.location.pathname === "/logout" ? null : (
        <NavBar
          {...{ username, setBusiness, setSearch, search, setUserName }}
        />
      )}
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
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
