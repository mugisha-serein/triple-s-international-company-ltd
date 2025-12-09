import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
      {children}
    </div>
  );
};

export default AuthCard;
