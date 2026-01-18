"use client";
import { useState } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-16 flex items-center">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 border border-gray-200">

        <h1 className="text-4xl font-extrabold mb-4 text-green-700 tracking-wide">
          Contact Us
        </h1>

        <p className="mb-8 text-gray-700 text-lg leading-relaxed">
          Have a question or need support? Fill the form below and we’ll get back
          to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-lg">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-lg">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-800 shadow-md hover:shadow-lg transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
