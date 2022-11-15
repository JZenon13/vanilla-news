const APIURL = process.env.REACT_APP_API_URL;

export const createUser = async (newUser) => {
  const response = await fetch(`${APIURL}/user`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  return response.json();
};
