import React from "react";

function TopNews({ topHeadline }) {
  return (
    <div>
      <div>
        <div
          className="card mb-3"
          style={{ width: 25 + "rem", objectFit: "contain" }}
        >
          <img
            src={topHeadline.urlToImage}
            className="card-img-top"
            alt="newsStory"
            style={{ cursor: "pointer" }}
            onClick={() => window.open(`${topHeadline.url}`, "_blank")}
          />
          <div className="card-body">
            <h5 className="card-title">{topHeadline.title}</h5>
            <p className="card-text">{topHeadline.content}</p>
            <p className="card-text">
              <small className="text-muted">{topHeadline.publishedAt}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNews;
