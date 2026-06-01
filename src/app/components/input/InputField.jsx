// /components/atoms/InputField.js
import React from "react";

const InputField = ({ 
  name, 
  type = "text", 
  placeholder, 
  inputMode, 
  register, 
  error, 
  maxLength, 
  ...rest 
}) => {
  const inputClass =
    " w-full rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-900 placeholder-gray-700 outline-none focus:ring-2 focus:ring-green-500";

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        {...(register ? register(name) : {})}
        className={inputClass}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;