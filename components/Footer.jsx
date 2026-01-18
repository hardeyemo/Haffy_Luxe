"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 p-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-3">
            <Image
              src="/images/Logo.png"
              alt="Haffy Luxe Logo"
              width={60}
              height={15}
              priority
              className="object-contain md:w-16 md:h-16 w-12 h-12"
            />
          </Link>
          <p className="text-sm text-gray-400">
            Luxury jewelry crafted to elevate your style.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-green-500">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-green-500">Products</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <FaFacebookF className="hover:text-green-500 cursor-pointer" />
            <FaInstagram className="hover:text-green-500 cursor-pointer" />
            <FaTwitter className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>

      </div>

      <p className="text-center mt-8 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Haffy Luxe. All rights reserved.
      </p>
    </footer>
  );
}
