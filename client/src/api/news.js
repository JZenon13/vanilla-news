const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_URL_KEY;

export const getEverything = async () => {
  const res = await fetch(`${BASE_URL}/everything?&apiKey=${API_KEY}`);
  return res.json();
};

export const searchEverything = async (topic) => {
  console.log(topic);
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

export const topHeadlineCategories = async (category) => {
  const res = await fetch(
    `${BASE_URL}/top-headlines/sources?category=${category}apiKey=${API_KEY}`
  );
  return res.json();
};

export const loginUser = async (credentials) => {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
};
