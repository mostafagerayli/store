"use client";
import { useForm } from "react-hook-form";
import Button from "@/app/components/button/Button";
import InputField from "../input/InputField";
import useLogin from "@/app/hooks/useLogin";

function LoginForm() {
  const { login } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <InputField
        name="phone"
        placeholder="Mobile Number"
        inputMode="numeric"
        maxLength={11}
        register={register}
        error={errors.phone?.message}
      />

      <InputField
        name="password"
        type="password"
        placeholder="Password"
        register={register}
        error={errors.password?.message}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
