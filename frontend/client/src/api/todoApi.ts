// import axios from "axios";

// const API_URL = "http://localhost:5000/api/todos";

// // Helper to attach Authorization header
// const getAuthHeader = (token: string) => ({
//   headers: { Authorization: `Bearer ${token}` },
// });

// export const todoApi = {
//   // ✅ Get all todos for logged-in user
//   getTodos: (token: string) =>
//     axios.get(API_URL, getAuthHeader(token)),

//   // ✅ Create a new todo
//   createTodo: (title: string, token: string) =>
//     axios.post(API_URL, { title }, getAuthHeader(token)),

//   // ✅ Update any field(s) of a todo
//   updateTodo: (
//     id: string,
//     updates: { completed?: boolean; title?: string },
//     token: string
//   ) => axios.put(`${API_URL}/${id}`, updates, getAuthHeader(token)),

//   // ✅ Delete a todo
//   deleteTodo: (id: string, token: string) =>
//     axios.delete(`${API_URL}/${id}`, getAuthHeader(token)),
// };

// export default todoApi;

import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/todos`;

const getAuthHeader = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const todoApi = {
  getTodos: (token: string) =>
    axios.get(API_URL, getAuthHeader(token)),

  createTodo: (title: string, token: string) =>
    axios.post(API_URL, { title }, getAuthHeader(token)),

  updateTodo: (
    id: string,
    updates: { completed?: boolean; title?: string },
    token: string
  ) => axios.put(`${API_URL}/${id}`, updates, getAuthHeader(token)),

  deleteTodo: (id: string, token: string) =>
    axios.delete(`${API_URL}/${id}`, getAuthHeader(token)),
};

export default todoApi;
