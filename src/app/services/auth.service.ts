// services/auth.service.js

import { ForgotPasswordDto, LoginDto, LoginResponse, RegisterDto, ResetPasswordDto } from "@/types/auth";
import { fetchClient } from "../lib/fetchClient";


export const loginUser = (body: LoginDto) => {
  return fetchClient<LoginResponse>("/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export async function registerUser(body: RegisterDto) {
  return fetchClient("/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export const logoutUser = () =>
  fetchClient("/api/v1/logout", {
    method: "POST",
  });

  export const forgotPassword = (body: ForgotPasswordDto) =>
  fetchClient("/api/v1/forget-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  export const resetPassword = (body: ResetPasswordDto) =>
  fetchClient("/api/v1/reset-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });