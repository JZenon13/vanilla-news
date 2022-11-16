const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_URL_KEY;

export const searchEverything = async (topic) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&apiKey=938234693adf4ab287a3b1c10441063b`
  );
  return res.json();
};

export const getTopHeadlines = async () => {
  console.log(BASE_URL, API_KEY);
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=938234693adf4ab287a3b1c10441063b`
  );
  return res.json();
};
