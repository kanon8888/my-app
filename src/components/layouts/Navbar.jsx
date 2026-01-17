"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import NavLink from "../Buttons/NavLink";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check login state on mount
  useEffect(() => {
    const auth = document.cookie.includes("auth=true");
    setIsLoggedIn(auth);
  }, []);

  const handleLogout = () => {
    // remove cookie
    document.cookie =
      "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    router.replace("/"); 
  };

  const nav = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink href={"/add item"}>Add Item</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
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
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>

      <div className="navbar-end">
        {!isLoggedIn ? (
          <Link href={"/login"}>
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
