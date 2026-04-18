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
      // className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')",
      // }}
    >
      <UserCard></UserCard>

      <AuthButtons></AuthButtons>

      <div>
        <h2 className="font-bold">User- Server</h2>
        <div className="border-2 p-4 rounded">{JSON.stringify(session)}</div>
      </div>
    </div>
  );
};

export default LoginPage;