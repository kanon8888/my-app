"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "./SocialLogin";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault();

    
    document.cookie = "auth=true; path=/";

   
    setSuccess(true);

    
    setTimeout(() => {
      router.replace("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="card shadow-xl bg-white rounded-lg">
        <div className="card-body p-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <button className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2">
            <FcGoogle size={20} /> Login with Google
          </button>

          <SocialLogin />

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="link link-primary font-medium">
              Register
            </Link>
          </p>
        </div>

        {/* ✅ Success Toast */}
        {success && (
          <div className="toast toast-top toast-center absolute mt-4">
            <div className="alert alert-success shadow-lg">
              <span>Login Successful! Redirecting...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
