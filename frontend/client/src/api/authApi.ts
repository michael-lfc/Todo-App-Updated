// // import axios from "axios";

// // const API_URL = "http://localhost:5000/api/auth";

// // export const registerUser = (email: string, password: string) => {
// //   return axios.post(`${API_URL}/register`, { email, password });
// // };

// // export const loginUser = (email: string, password: string) => {
// //   return axios.post(`${API_URL}/login`, { email, password });
// // };

// import axios from "axios";

// const API_URL = `${import.meta.env.VITE_API_URL}/api/todos`;

// const getAuthHeader = (token: string) => ({
//   headers: { Authorization: `Bearer ${token}` },
// });

// export const todoApi = {
//   getTodos: (token: string) =>
//     axios.get(API_URL, getAuthHeader(token)),

//   createTodo: (title: string, token: string) =>
//     axios.post(API_URL, { title }, getAuthHeader(token)),

//   updateTodo: (
//     id: string,
//     updates: { completed?: boolean; title?: string },
//     token: string
//   ) => axios.put(`${API_URL}/${id}`, updates, getAuthHeader(token)),

//   deleteTodo: (id: string, token: string) =>
//     axios.delete(`${API_URL}/${id}`, getAuthHeader(token)),
// };

// // export default todoApi;

import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

export const loginUser = (email: string, password: string) =>
  axios.post(`${API_URL}/login`, { email, password });

export const registerUser = (email: string, password: string) =>
  axios.post(`${API_URL}/register`, { email, password });
