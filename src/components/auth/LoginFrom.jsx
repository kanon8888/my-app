"use client";

import Link from "next/link";
import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const ADMIN_EMAIL = "admin@gmail.com";
  const ADMIN_PASSWORD = "123456";

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      document.cookie = "auth=true; path=/";
      setSuccess(true);

      setTimeout(() => {
        router.replace("/");
      }, 1500);
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gray-100">
      <div className="card shadow-xl bg-white rounded-lg w-full max-w-md">
        <div className="card-body p-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          {/* Admin Email/Password Login */}
          <form onSubmit={handleLogin} className="space-y-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          {/* Social Login using NextAuth */}
          <SocialLogin />

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="link link-primary font-medium"
            >
              Register
            </Link>
          </p>
        </div>

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
