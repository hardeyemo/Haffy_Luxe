"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center px-6 py-16
      bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl
        border border-white/20 shadow-2xl rounded-3xl p-10"
      >
        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-6
          text-green-300 tracking-wide"
        >
          Haffy Luxe
        </motion.h1>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-6 text-gray-200 leading-relaxed text-lg"
        >
          Haffy Luxe is a modern jewelry brand focused on delivering high-quality
          rings, bracelets, necklaces, and wristwatches to customers across
          Nigeria.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6 text-gray-200 leading-relaxed text-lg"
        >
          We believe jewelry is more than an accessory — it’s a statement of
          style, confidence, and personality. Our collections are carefully
          selected to suit both everyday elegance and special occasions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-gray-200 leading-relaxed text-lg"
        >
          Whether you’re shopping for yourself or choosing the perfect gift,
          Haffy Luxe is committed to quality, affordability, and exceptional
          customer service.
        </motion.p>

        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 h-1 bg-green-400 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
