import React, { useState, useEffect } from "react";
import type { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconClick,
  className = "",
  wrapperClass = "",
  onChange,
  ...rest
}) => {
  const [localError, setLocalError] = useState<string | undefined>(error);

  // Remove error as user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (localError) setLocalError(undefined);
    onChange?.(e);
  };

  useEffect(() => {
    setLocalError(error);
  }, [error]);

  return (
    <div className={`flex flex-col w-full ${wrapperClass}`}>
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      )}

      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            {leftIcon}
          </span>
        )}

        <input
          {...rest}
          onChange={handleChange}
          className={`
            w-full border rounded-xl px-3 py-2 text-sm outline-none transition-all duration-200
            ${leftIcon ? "pl-10" : ""}
            ${rightIcon ? "pr-10" : ""}
            ${localError
              ? "border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-gray-300 focus:ring-2 focus:ring-sky-300"}
            ${className}
          `}
          aria-invalid={!!localError}
          aria-describedby={localError ? `${rest.id}-error` : undefined}
        />

        {rightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
          >
            {rightIcon}
          </button>
        )}
      </div>

      {/* Animated error */}
      {localError && (
        <p
          id={`${rest.id}-error`}
          className="mt-1 text-xs text-red-600 animate-fade-in"
        >
          {localError}
        </p>
      )}
    </div>
  );
};

export default Input;
