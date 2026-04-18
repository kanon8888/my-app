"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "./SocialLogin";
import { postUser } from "@/actions/server/auth";

const RegisterForm = () => {
    const callback = "/dashboard";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !name ||
            !email ||
            !contactNo ||
            !password ||
            !image ||
            !bloodGroup
        ) {
            setError("All fields are required!");
            setSuccess("");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format!");
            setSuccess("");
            return;
        }

        setError("");

        const userData = {
            name,
            email,
            contactNo,
            password,
            image,
            bloodGroup,
        };

        console.log("User Registered:", userData);

        setSuccess("Registration successful!");

        const result = await postUser(userData);
        alert(result.message);

        setName("");
        setEmail("");
        setContactNo("");
        setPassword("");
        setImage("");
        setBloodGroup("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="card shadow-xl bg-white rounded-lg w-full max-w-md">
                <div className="card-body p-8 flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Register
                    </h2>

                    {error && <p className="text-red-500 mb-2">{error}</p>}
                    {success && <p className="text-green-500 mb-2">{success}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="input input-bordered w-full"
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
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
                        <input
                            type="file"
                            accept="image/*"
                            className="file-input file-input-bordered w-full"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />

                        <select
                            className="select select-bordered w-full"
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                            required
                        >
                            <option value="">Select Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>

                        <button type="submit" className="btn btn-primary w-full">
                            Register
                        </button>
                    </form>

                    <button className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2">
                        <FcGoogle size={20} /> Register with Google
                    </button>

                    <SocialLogin />

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <Link
                            href={`/login?callbackUrl=${callback}`}
                            className="link link-primary font-medium"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;