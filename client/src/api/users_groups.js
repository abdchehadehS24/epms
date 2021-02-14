import { API } from "../config";
import axios from "axios";

export const createUserGroup = async (userGroup) => {
  const result = await axios.post(`${API}/users_groups/`, userGroup);
  return result;
};

export const getUsersGroups = async () => {
  const result = await axios.get(`${API}/users_groups/`);

  return result;
};

export const deleteUserGroup = async (userGroup) => {
  const result = await axios.delete(`${API}/users_groups/${userGroup.id}`);
  return result;
};

export const getUserGroupById = async (userGroup) => {
  const result = await axios.get(`${API}/users_groups/${userGroup.id}`);
  return result;
};

export const updateUserGroup = async (userGroup) => {
  const result = await axios.put(
    `${API}/users_groups/${userGroup.id}`,
    userGroup
  );
  return result;
};
