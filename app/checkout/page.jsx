"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Checkout() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setOrderPlaced(true);
    clearCart();
  };

  const increment = (id) => {
    const item = cartItems.find((i) => i.id === id);
    updateQuantity(id, item.quantity + 1);
  };

  const decrement = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item.quantity > 1) updateQuantity(id, item.quantity - 1);
  };

  /* SUCCESS PAGE */
  if (orderPlaced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center px-6
        bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
      >
        <motion.div
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20
          p-10 rounded-3xl shadow-2xl text-center max-w-md"
        >
          <h2 className="text-4xl font-extrabold text-green-300 mb-4">
            Order Placed 🎉
          </h2>
          <p className="text-gray-200 text-lg">
            Thank you, {formData.name}. Your order has been received.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-16
      bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      <h2 className="text-4xl font-extrabold text-center text-green-300 mb-12">
        Secure Checkout
      </h2>

      {/* CART */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20
        rounded-3xl p-8 shadow-xl max-w-4xl mx-auto mb-12"
      >
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-300 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-between items-center border-b
                border-white/20 pb-4"
              >
                <div>
                  <p className="font-semibold text-lg text-white">
                    {item.name}
                  </p>
                  <p className="text-green-300 font-bold">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => decrement(item.id)}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                  >
                    <FiMinus className="text-white" />
                  </button>

                  <span className="w-10 text-center text-white font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increment(item.id)}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                  >
                    <FiPlus className="text-white" />
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-3 text-red-400 hover:text-red-500 transition"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </motion.div>
            ))}

            <p className="text-right text-3xl font-extrabold text-green-300">
              Total: ₦{totalPrice.toLocaleString()}
            </p>
          </div>
        )}
      </motion.div>

      {/* FORM */}
      <motion.form
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        onSubmit={handlePlaceOrder}
        className="bg-white/10 backdrop-blur-xl border border-white/20
        rounded-3xl p-10 shadow-xl max-w-xl mx-auto space-y-6"
      >
        <h3 className="text-3xl font-bold text-green-300 mb-4">
          Billing Information
        </h3>

        {["name", "email", "address", "phone"].map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
            value={formData[field]}
            onChange={handleChange}
            required
            className="w-full bg-white/90 text-gray-800
            px-5 py-3 rounded-xl focus:ring-2
            focus:ring-green-500 outline-none transition"
          />
        ))}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700
          text-white py-4 rounded-xl text-lg font-semibold
          shadow-lg hover:shadow-2xl transition"
        >
          Place Order
        </button>
      </motion.form>
    </motion.div>
  );
}
