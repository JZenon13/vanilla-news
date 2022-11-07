import React, { useState, useEffect } from "react";
import { topHeadlineCategories } from "../api/news";

function Business({ business }) {
  const [businessHeadlines, setBusinessHeadlines] = useState([]);
  // useEffect(() => {
  //   topHeadlineCategories("business").then((data) => console.log(data));
  // }, []);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines/sources?apiKey=938234693adf4ab287a3b1c10441063b"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>Business</div>;
}

export default Business;
