// services/auth.service.js

import { ForgotPasswordDto, LoginDto, LoginResponse, RegisterDto, ResetPasswordDto } from "@/types/auth";
import { fetchClient } from "../lib/fetchClient";


export const loginUser = (body: LoginDto) => {
  return fetchClient<LoginResponse>("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export async function registerUser(body: RegisterDto) {
  return fetchClient("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export const logoutUser = () =>
  fetchClient("/api/logout", {
    method: "POST",
  });

  export const forgotPassword = (body: ForgotPasswordDto) =>
  fetchClient("/api/forget-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  export const resetPassword = (body: ResetPasswordDto) =>
  fetchClient("/api/reset-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });