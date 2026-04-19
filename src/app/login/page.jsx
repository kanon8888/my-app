import LoginFrom from "@/components/auth/LoginFrom";
import UserCard from "@/components/UserCard";
import { getServerSession } from "next-auth";
import React from "react";
import RegisterForm from "@/components/auth/RegisterFrom";
import AuthButtons from "@/components/AuthButtons";
import { authOptions } from "@/lib/authOptions";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6 px-4 sm:px-6 py-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')",
      }}
    >
      <div className="w-full max-w-md">
        <UserCard />
      </div>

      <div className="w-full max-w-md flex justify-center">
        <AuthButtons />
      </div>

      <div className="w-full max-w-md backdrop-blur-md rounded-xl p-4 shadow-lg">
        <h2 className="font-bold text-center mb-3">User - Server</h2>
        <div className="border-2 p-4 rounded break-words text-sm overflow-auto">
          {JSON.stringify(session)}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;