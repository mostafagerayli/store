const { default: axios } = require("axios");

const API = axios.create({
  baseURL: `https://lab-displaying-medicines-durable.trycloudflare.com`,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
    (config) => {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default API ;