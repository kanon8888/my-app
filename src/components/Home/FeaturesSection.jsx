"use client";

import React from "react";
import { FaThumbsUp, FaHeadphones, FaTruck, FaCreditCard } from "react-icons/fa";

const features = [
  {
    icon: <FaThumbsUp size={30} />,
    title: "High-quality Goods",
    description: "Enjoy top quality items for less",
  },
  {
    icon: <FaHeadphones size={30} />,
    title: "24/7 Live chat",
    description: "Get instant assistance whenever you need it",
  },
  {
    icon: <FaTruck size={30} />,
    title: "Express Shipping",
    description: "Fast & reliable delivery options",
  },
  {
    icon: <FaCreditCard size={30} />,
    title: "Secure Payment",
    description: "Multiple safe payment methods",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2"
            >
              <div className="bg-blue-700 text-white p-4 rounded-full mb-4 animate-bounce-slow">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
