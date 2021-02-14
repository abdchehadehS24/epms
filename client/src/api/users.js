import { API } from "../config";
import axios from "axios";
// import { isAuthenticated } from "../auth/index";

// const token = isAuthenticated().token;

// export const authAxios = axios.create({
//   baseURL: API,
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

export const createUser = async (user) => {
  const result = await axios.post(`${API}/users/`, user);
  return result;
};

export const getUsers = async () => {
  const result = await axios.get(`${API}/users`);

  return result;
};

export const deleteUser = async (users) => {
  const result = await axios.delete(`${API}/users/${users.id}`);
  return result;
};

export const getUserById = async (users) => {
  const result = await axios.get(`${API}/users/${users.id}`);
  return result;
};

export const updateUser = async (users) => {
  const result = await axios.put(`${API}/users/${users.id}`, users);
  return result;
};
