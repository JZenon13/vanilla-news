import React from "react";
import TopHeadlines from "./TopHeadlines";

function TopNews({ topHeadlines }) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Vanilla News</h1>
          <p className="lead">As plain as it gets</p>
        </div>
      </div>
      {topHeadlines?.map((topHeadline) => {
        return (
          <div className="d-inline-flex p-2">
            <TopHeadlines topHeadline={topHeadline} key={topHeadline.author} />
          </div>
        );
      })}
    </>
  );
}

export default TopNews;
