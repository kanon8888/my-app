import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        
        <div className="space-y-4">
          <Logo />
          <h6 className="footer-title">About Us</h6>
          <p className="text-sm text-gray-300">
            Explor Smart Shop is your trusted destination for smart gadgets,
            offering quality products with reliable service.
          </p>
        </div>

        
        <div>
          <h6 className="footer-title mb-3">Quick Links</h6>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="link link-hover">Home</Link></li>
            <li><Link href="/products" className="link link-hover">Products</Link></li>
            <li><Link href="/login" className="link link-hover">Login</Link></li>
            <li><Link href="/contact" className="link link-hover">Contact</Link></li>
          </ul>
        </div>

        
        
        <div>
          <h6 className="footer-title mb-3">Contact Info</h6>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@explorsmartshop.com
            </li>
          </ul>
        </div>

      </div>

     
      <div className="border-t border-neutral-content/20 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Explor Smart Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

