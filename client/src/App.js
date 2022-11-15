import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Login from "./Login/Login";
import { Routes, Route } from "react-router-dom";
import { getTopHeadlines } from "./api/news";
import useToken from "./useToken";
import TopNews from "./TopNews/TopNews";
import SearchedTopic from "./TopNews/SearchedTopic";
import Logout from "./Login/Logout";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const { token, setToken } = useToken();
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [newSearch, setNewSearch] = useState(false);

  useEffect(() => {
    getTopHeadlines().then((data) => setTopHeadlines(data.articles));
  }, [username]);

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
              setEmail={setEmail}
              email={email}
              setUser={setUser}
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
          {...{
            username,
            setSearch,
            search,
            setUserName,
            token,
            setNewSearch,
            newSearch,
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<TopNews {...{ topHeadlines }} />} />
        <Route
          path="/searched/:result"
          element={<SearchedTopic search={search} newSearch={newSearch} />}
        />
        <Route path="/logout" element={<Logout {...{ token }} />} />
      </Routes>
    </div>
  );
}

export default App;
