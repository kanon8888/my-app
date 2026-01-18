'use client';

import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please enter your email!');
            return;
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email!');
            return;
        }

        setMessage('Subscribed successfully! 🎉');
        setEmail('');

        
    };

    return (
        <div className="bg-blue-50 py-16">
            <div className="max-w-3xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 mb-6">Stay updated with the latest deals and offers from Explor Smart Shop.</p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 rounded-md border border-gray-300 w-full sm:w-auto flex-1"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                    >
                        Subscribe
                    </button>
                </form>

                {message && <p className="mt-4 text-gray-700">{message}</p>}
            </div>
        </div>
    );
};

export default Newsletter;
