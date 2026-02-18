import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="hidden md:flex flex-1 relative w-1/2 h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1612832021592-6d9c8d0b6f99?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full text-center px-8 md:pb-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Triple S International Company Ltd
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/90 drop-shadow-md mb-2">
          Welcome Back!
        </p>
        
        <p className="text-base md:text-lg text-white/80 drop-shadow-sm max-w-md">
          Login to access your account, track orders, and enjoy exclusive deals!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
