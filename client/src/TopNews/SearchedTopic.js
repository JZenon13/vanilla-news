import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchEverything } from "../api/news";
import SearchedTopicHeadlines from "./SearchedTopicHeadlines";

function SearchedTopic() {
  const location = useLocation();
  const [searchedHeadlines, setSearchedHeadlines] = useState([]);
  useEffect(() => {
    searchEverything(location.state.search).then((data) =>
      setSearchedHeadlines(data.articles)
    );
  }, []);

  return (
    <>
      {searchedHeadlines?.map((searchedHeadline) => {
        return (
          <div className="d-inline-flex p-2">
            <SearchedTopicHeadlines searchedHeadline={searchedHeadline} />
          </div>
        );
      })}
    </>
  );
}

export default SearchedTopic;
