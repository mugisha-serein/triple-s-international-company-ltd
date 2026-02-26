import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});


const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async () => {
    return new Promise((resolve) => setTimeout(resolve, 800));
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 flex items-center">
      <div className="max-w-md mx-auto w-full bg-white p-8 rounded-3xl border border-slate-100 shadow-sm animate-fade-in-up">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-600 mb-3">Account Recovery</p>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Forgot your password?</h1>
        <p className="text-slate-500 mb-6">Enter your email and we’ll send reset instructions.</p>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            error={errors.email?.message}
          />

          <Button type="submit" className="w-full" loading={isSubmitting} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default ForgotPassword;
