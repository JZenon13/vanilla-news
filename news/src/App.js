import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import TopHeadlines from "./TopNews/TopHeadlines";
import { getTopHeadlines } from "./api/news";
import TopNews from "./TopNews/TopNews";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  useEffect(() => {
    getTopHeadlines().then((data) => setTopHeadlines(data.articles));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <TopNews topHeadlines={topHeadlines} />
    </div>
  );
}

export default App;
