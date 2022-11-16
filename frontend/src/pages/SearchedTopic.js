import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchEverything } from "../api/news";
import SearchedTopicHeadlines from "./SearchedTopicHeadlines";

function SearchedTopic({ newSearch }) {
  const params = useParams();
  const [searchedHeadlines, setSearchedHeadlines] = useState([]);
  useEffect(() => {
    searchEverything(params.result).then((data) =>
      setSearchedHeadlines(data.articles)
    );
  }, [newSearch]);

  return (
    <>
      <div style={{ fontSize: "35px", textAlign: "center" }}>
        Search results for "{params.result}"
      </div>
      {searchedHeadlines?.map((searchedHeadline, i) => {
        return (
          <div className="d-inline-flex p-2">
            <SearchedTopicHeadlines
              searchedHeadline={searchedHeadline}
              key={i}
            />
          </div>
        );
      })}
    </>
  );
}

export default SearchedTopic;
