const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_URL_KEY;

export const searchEverything = async (topic) => {
  const res = await fetch(
    `${BASE_URL}/everything?q=${topic}&apiKey=${API_KEY}`
  );
  return res.json();
};

export const getTopHeadlines = async () => {
  const res = await fetch(
    `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`
  );
  return res.json();
};
