"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/Rectangle 615 (1).png')" }} // Replace with your hero image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl text-white">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">
          Discover Your Style
        </h1>

        {/* Subheading */}
        <p className="mb-10 text-lg md:text-2xl">
          Shop the finest Jewelry in Nigeria and elevate your elegance.
        </p>

        {/* Shop Now Button */}
        <Link
          href="/products"
          className="inline-block bg-green-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-green-800 hover:scale-105 transition transform duration-300"
        >
          Shop Now
        </Link>

        {/* Optional Note */}
        <p className="mt-6 text-gray-200 text-xl">
          Free delivery on all orders above ₦20,000
        </p>
      </div>
    </div>
  );
}
