"use client";

import React, { useState } from "react";
import { FaRunning, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Top Form Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-5xl font-extrabold text-center mb-3">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Any questions or remarks? Just write us a message!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              className="input input-bordered rounded-full w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input input-bordered rounded-full w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Write your message"
            className="textarea textarea-bordered w-full h-32 rounded-2xl mb-4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-bold bg-cyan-500 hover:scale-105 transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Bottom Info Section */}
      {/* Bottom Info Section */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-3 hover:scale-105 transition duration-300 cursor-pointer">
          <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-white text-3xl mb-4">
            <FaRunning />
          </div>
          <h2 className="text-2xl font-bold mb-2">ABOUT CLUB</h2>
          <p className="text-gray-600">Running Guide</p>
          <p className="text-gray-600">Workouts</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-3 hover:scale-105 transition duration-300 cursor-pointer">
          <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-white text-3xl mb-4">
            <FaPhoneAlt />
          </div>
          <h2 className="text-2xl font-bold mb-2">PHONE</h2>
          <p className="text-gray-600">+880 1234 567890</p>
          <p className="text-gray-600">+880 9876 543210</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-3 hover:scale-105 transition duration-300 cursor-pointer">
          <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-white text-3xl mb-4">
            <FaMapMarkerAlt />
          </div>
          <h2 className="text-2xl font-bold mb-2">OUR LOCATION</h2>
          <p className="text-gray-600">Dhaka, Bangladesh</p>
          <p className="text-gray-600">Your Office Address</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;