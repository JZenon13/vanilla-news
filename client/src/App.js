import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Login from "./Login/Login";
import { Routes, Route } from "react-router-dom";
import { getTopHeadlines } from "./api/news";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    getTopHeadlines().then((data) => setTopHeadlines(data.articles));
  }, []);
  <Routes>
    <Route path="/login" />
  </Routes>;

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <NavBar {...{ topHeadlines }} />
    </div>
  );
}

export default App;
