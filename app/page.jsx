"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/Rectangle 615 (1).png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl text-white">
        
        {/* Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100"
        >
          Discover Your Style
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-10 text-lg md:text-2xl"
        >
          Shop the finest Jewelry in Nigeria and elevate your elegance.
        </motion.p>

        {/* Shop Now Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/products"
            className="inline-block bg-green-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition transform hover:bg-green-800"
          >
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              Shop Now
            </motion.span>
          </Link>
        </motion.div>

        {/* Optional Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-gray-200 text-xl"
        >
          Free delivery on all orders above ₦20,000
        </motion.p>
      </div>
    </motion.div>
  );
}
