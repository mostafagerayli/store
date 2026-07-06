import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import type { InputHTMLAttributes } from "react";

interface InputFieldProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: Path<T>;
  register?: UseFormRegister<T>;
  rules?: RegisterOptions<T>;
  error?: string;
}

export default function InputField<T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  inputMode,
  register,
  rules,
  error,
  maxLength,
  ...rest
}: InputFieldProps<T>) {
  const inputClass =
    "w-full rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-900 placeholder-gray-700 outline-none focus:ring-2 focus:ring-green-500";

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-bold text-gray-600"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        className={inputClass}
        {...(register ? register(name, rules) : {})}
        {...rest}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}