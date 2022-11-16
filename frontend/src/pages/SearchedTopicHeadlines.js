import React from "react";

function SearchedTopicHeadlines({ searchedHeadline }) {
  return (
    <>
      <div
        className="card mb-3"
        style={{ width: 25 + "rem", objectFit: "contain" }}
      >
        <img
          src={searchedHeadline.urlToImage}
          className="card-img-top"
          alt="newsStory"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(`${searchedHeadline.url}`, "_blank")}
        />
        <div className="card-body">
          <h5 className="card-title">{searchedHeadline.title}</h5>
          <p className="card-text">{searchedHeadline.content}</p>
          <p className="card-text">
            <small className="text-muted">{searchedHeadline.publishedAt}</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default SearchedTopicHeadlines;
