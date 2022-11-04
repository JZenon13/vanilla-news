import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { getTopHeadlines } from "./api/news";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  useEffect(() => {
    getTopHeadlines().then((data) => setTopHeadlines(data.articles));
  }, []);

  return (
    <div className="App">
      <NavBar {...{ topHeadlines }} />
    </div>
  );
}

export default App;
