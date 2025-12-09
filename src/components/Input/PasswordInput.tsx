import React, { useState } from "react";
import Input from "./Input";
import type { InputProps } from "./Input.types";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface PasswordInputProps extends Omit<InputProps, "type"> {}

const PasswordInput: React.FC<PasswordInputProps> = ({
  rightIcon,
  onRightIconClick,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...rest}
      type={showPassword ? "text" : "password"}
      rightIcon={rightIcon ?? (
        showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />
      )}
      onRightIconClick={() => {
        setShowPassword((prev) => !prev);
        onRightIconClick?.();
      }}
    />
  );
};

export default PasswordInput;
