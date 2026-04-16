import LoginFrom from "@/components/auth/LoginFrom";
import React from "react";

const LoginPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')",
      }}
    >
      <div className="">
        <LoginFrom />
      </div>
    </div>
  );
};

export default LoginPage;