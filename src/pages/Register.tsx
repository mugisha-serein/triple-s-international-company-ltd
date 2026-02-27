import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import Input from "../components/Input/Input";
import PasswordInput from "../components/Input/PasswordInput";
import Button from "../components/Button/Button";

// Validation schema
const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Invalid email").nonempty("Email required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    return new Promise((resolve) =>
      setTimeout(() => {
        setLoading(false);
        resolve(true);
      }, 1000)
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Register Form */}
      <div className="flex flex-1 justify-center items-center px-6 py-16 md:py-24 bg-gray-50">
        <div className="w-full max-w-md flex flex-col justify-center space-y-6">
          {/* Heading */}
          <div className="text-center space-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Sign Up
            </h2>
            <p className="text-gray-500 text-sm md:text-base"></p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              {...register("fullName")}
              error={errors.fullName?.message}
            />

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

            <PasswordInput
              label="Confirm Password"
              placeholder="••••••••"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              loading={loading || isSubmitting}
              disabled={loading || isSubmitting}
            >
              {loading || isSubmitting ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>

          {/* Links */}
          <div className="flex justify-between text-sm text-slate-500 px-1">
            <a
              href="/login"
              className="hover:text-primary-600 font-medium transition-colors"
            >
              Already have an account?
            </a>
          </div>

          {/* Social login */}
          <div className="mt-6">
            <p className="text-center text-gray-400 mb-3">Or sign up with</p>
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

export default Register;
