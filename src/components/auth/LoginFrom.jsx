"use client";
import { signIn } from "next-auth/react"
import Link from "next/link";
import React from 'react';

const LoginFrom = () => {
  return <button className='btn' onClick={() => signIn()}>Login</button>
     
};

export default LoginFrom;





























// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import SocialLogin from "./SocialLogin";
// import { useRouter } from "next/navigation";

// const LoginForm = () => {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const ADMIN_EMAIL = "admin@gmail.com";
//   const ADMIN_PASSWORD = "123456";

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError("");

//     if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
//       document.cookie = "auth=true; path=/";
//       setSuccess(true);

//       setTimeout(() => {
//         router.replace("/");
//       }, 1500);
//     } else {
//       setError("Invalid email or password!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100">
//         <div className="p-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//             Welcome Back 👋
//           </h2>
//           <p className="text-center text-gray-500 mb-6">
//             Login to continue your journey
//           </p>

//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="input input-bordered w-full rounded-xl"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="input input-bordered w-full rounded-xl"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             {error && (
//               <p className="text-red-500 text-sm text-center">{error}</p>
//             )}

//             <button
//               type="submit"
//               className="btn btn-primary w-full rounded-xl hover:scale-105 transition duration-300"
//             >
//               Login
//             </button>
//           </form>

//           <div className="divider my-6">OR</div>

//           <SocialLogin />

//           <p className="text-center text-sm text-gray-600 mt-6">
//             Don’t have an account?{" "}
            // <Link
            //   href="/register"
            //   className="text-blue-600 font-semibold hover:underline"
            // >
            //   Register
            // </Link>
//           </p>
//         </div>

//         {success && (
//           <div className="toast toast-top toast-center absolute mt-4">
//             <div className="alert alert-success shadow-lg">
//               <span>Login Successful! Redirecting...</span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginForm;