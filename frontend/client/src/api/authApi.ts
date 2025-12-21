import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

export const loginUser = (email: string, password: string) =>
  axios.post(`${API_URL}/login`, { email, password });

export const registerUser = (email: string, password: string) =>
  axios.post(`${API_URL}/register`, { email, password });
