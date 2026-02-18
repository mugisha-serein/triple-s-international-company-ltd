import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import Input from "../components/Input/Input";
import PasswordInput from "../components/Input/PasswordInput";
import Button from "../components/Button/Button";
import HeroSection from "../features/auth/components/HeroSection";

const loginSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Login data:", data);
    // API call placeholder
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Hero Section */}
      <HeroSection />

      {/* Login Form Section */}
      <div className="flex flex-1 justify-center items-center px-6 py-16 md:py-24 bg-gray-50">
        <div className="w-full max-w-md flex flex-col justify-center space-y-6">

          {/* Heading */}
          <div className="text-center space-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Sign In
            </h2>
            <p className="text-gray-500 text-sm md:text-base">

            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              error={errors.email?.message}
            />

            <PasswordInput
              label="Password"
              placeholder="••••••••"
              {...register("password")}
              error={errors.password?.message}
            />

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          {/* Links */}
          <div className="flex justify-between text-sm text-gray-500 px-1">
            <a
              href="/forgot-password"
              className="hover:text-primary-600 transition-colors"
            >
              Forgot password?
            </a>
            <a
              href="/register"
              className="hover:text-primary-600 font-medium transition-colors"
            >
              Create account
            </a>
          </div>

          {/* Social login */}
          <div className="mt-6">
            <p className="text-center text-gray-400 mb-3">Or continue with</p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center justify-center flex-1 py-3 border rounded-xl hover:bg-gray-100 transition font-medium text-gray-700 space-x-2">
                <FcGoogle size={20} />
                <span>Google</span>
              </button>

              <button className="flex items-center justify-center flex-1 py-3 border rounded-xl hover:bg-gray-100 transition font-medium text-gray-700 space-x-2">
                <FaFacebookF size={18} className="text-blue-600" />
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
