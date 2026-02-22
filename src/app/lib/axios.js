import axios from "axios";

// Axios instance برای همه پروژه
const API = axios.create({
  baseURL: "https://cartoons-oven-herb-arising.trycloudflare.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 🔑 ارسال cookie های HttpOnly
});

// interceptor برای اضافه کردن Authorization header در سمت سرور
API.interceptors.request.use(
  async (config) => {
    if (typeof window === "undefined") {
      // 🧠 Server Component
      const { cookies } = await import("next/headers");
      const token = cookies().get("token")?.value;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    // سمت Client نیازی نیست، مرورگر خودش cookie را ارسال می‌کند
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
