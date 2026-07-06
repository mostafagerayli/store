import { JWTPayload } from "jose";

export interface LoginDto {
  phone: string;
  password: string;
}

export interface RegisterDto extends LoginDto {
  name: string;
}

export interface AccessTokenPayload extends JWTPayload{
  id: string;
  name: string;
  role: string;
}


export interface AuthUser {
  id: string;
  name: string;
  role: string;
}
export interface LoginResponse {
  user: AuthUser;
}
export interface ForgotPasswordDto {
  phone: string;
}
export interface ResetPasswordDto {
  token: string;
  newPassword: string;
}