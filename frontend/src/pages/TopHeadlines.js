import React, { useEffect, useState } from "react";
import { getTopHeadlines } from "../api/news";
import TopNews from "./TopNews";

function TopHeadlines() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  useEffect(() => {
    getTopHeadlines().then((data) => setTopHeadlines(data.articles));
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div className="jumbotron jumbotron-fluid"></div>
        {topHeadlines?.map((topHeadline, i) => {
          return (
            <div className="d-inline-flex p-2">
              <TopNews topHeadline={topHeadline} key={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopHeadlines;
