// services/auth.service.js

import { fetchClient } from "../lib/fetchClient";

export const loginUser = (body) => {
  return fetchClient("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export async function registerUser(body) {
  return fetchClient("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
}

export const logoutUser = () =>
  fetchClient("/api/logout", {
    method: "POST",
  });