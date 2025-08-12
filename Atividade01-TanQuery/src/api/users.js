import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = async () =>{
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
}

export const updateUser = async (user) => {
  const response = await axios.put(`${API_URL}/${user.id}`, user);
  return response.data;
};

export const deleteUser = async (userId) => {
  await axios.delete(`${API_URL}/${userId}`);
};