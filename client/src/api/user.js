const APIURL = process.env.REACT_APP_API_URL;

export const getUser = async (id) => {
  const res = await fetch(`${APIURL}/user/${id}`);
  return res.json();
};

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

export const editUser = async (data) => {
  const response = await fetch(`${APIURL}/user/${data.id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteUser = async (id) => {
  const response = fetch(`${APIURL}/user/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
  });
  return response;
};
