"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center px-6 py-16
      bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl
        border border-white/20 shadow-2xl rounded-3xl p-10"
      >
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4 text-green-300 tracking-wide">
          Contact Us
        </h1>

        <p className="mb-8 text-gray-200 text-lg leading-relaxed">
          Have a question or need support? Send us a message and we’ll respond
          promptly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl px-4 py-3 bg-black/40
              text-white border border-white/20
              focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl px-4 py-3 bg-black/40
              text-white border border-white/20
              focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl px-4 py-3 bg-black/40
              text-white border border-white/20
              focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-green-500 text-black py-3 rounded-xl
            text-lg font-bold shadow-lg hover:bg-green-400 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
