"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import NavLink from "../Buttons/NavLink";
import { useRouter } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    const auth = document.cookie.includes("auth=true");
    setIsLoggedIn(auth);

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleLogout = () => {
    document.cookie =
      "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    router.replace("/");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const nav = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/products">Products</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4">
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {nav}
          </ul>
        </div>
        <Logo />
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>

      
      <div className="navbar-end flex gap-2">
        
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          title="Toggle Theme"
        >
          {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
        </button>

        
        {!isLoggedIn ? (
          <Link href="/login">
            <button className="btn btn-primary btn-outline">Login</button>
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="btn btn-secondary btn-outline"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
