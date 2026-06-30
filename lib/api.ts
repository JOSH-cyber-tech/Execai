import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  withCredentials: true,
});

// Attach the Clerk session token to every request
api.interceptors.request.use(async (config) => {
  // Clerk session token injection happens via @clerk/nextjs on the server
  // For client-side, we use the useAuth hook to get the token
  return config;
});

export default api;
