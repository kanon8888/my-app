'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import SocialLogin from './SocialLogin';

const RegisterForm = () => {
    const callback = "/dashboard";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !password) {
            setError('All fields are required!');
            setSuccess('');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format!');
            setSuccess('');
            return;
        }
        setError('');
        const userData = {
            name,
            email,
            password
        };

        console.log('User Registered:', userData);
        setSuccess('Registration successful!');
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="card shadow-xl bg-white rounded-lg">
                <div className="card-body p-8 flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>

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
                            type="password" 
                            placeholder="Password" 
                            className="input input-bordered w-full" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button type="submit" className="btn btn-primary w-full">Register</button>
                    </form>

                    <button className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2">
                        <FcGoogle size={20} /> Register with Google
                    </button>
                    <SocialLogin />

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <Link href={`/login?callbackUrl=${callback}`} className="link link-primary font-medium">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
