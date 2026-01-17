"use client";

import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-100 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text */}
        <div className="flex-1 space-y-6 animate-text">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Explore <span className="text-blue-600">Smart Shop</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Buy every toy with up to <span className="font-semibold">15% discount</span>.
          </p>

          <button className="btn btn-primary btn-outline px-8 hover:scale-105 transition-transform duration-300">
            Explore Products
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 animate-image">
          <Image
            src="/image-678.jpg"
            alt="Smart Shop Banner"
            width={520}
            height={420}
            className="rounded-xl shadow-xl floating-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
