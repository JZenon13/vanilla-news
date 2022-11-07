import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Login from "./Login/Login";
import { Routes, Route } from "react-router-dom";
import { getTopHeadlines } from "./api/news";
import useToken from "./useToken";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const { token, setToken } = useToken();
  const [password, setPassword] = useState();
  const [username, setUserName] = useState();

  useEffect(() => {
    getTopHeadlines().then((data) => setTopHeadlines(data.articles));
  }, []);
  <Routes>
    <Route path="/login" />
  </Routes>;

  if (!token) {
    return (
      <Login
        setToken={setToken}
        setUserName={setUserName}
        setPassword={setPassword}
        password={password}
        username={username}
      />
    );
  }

  return (
    <div className="App">
      <NavBar {...{ topHeadlines, username }} />
    </div>
  );
}

export default App;
