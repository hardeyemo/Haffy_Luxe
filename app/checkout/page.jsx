"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

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

    // Order Success Page
    if (orderPlaced)
        return (
            <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center max-w-md border border-gray-200">
                    <h2 className="text-4xl font-extrabold mb-4 text-green-700">Order Placed!</h2>
                    <p className="text-gray-700 text-lg">
                        Thank you, {formData.name}! Your order has been successfully received.
                    </p>
                </div>
            </div>
        );

    return (
        <div className="min-h-screen p-10 bg-gradient-to-br from-gray-100 to-gray-200">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-green-700 tracking-wide">
                Checkout
            </h2>

            {/* CART ITEMS CARD */}
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200 mb-12 max-w-4xl mx-auto">
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
                ) : (
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b pb-5">
                                <div>
                                    <p className="font-semibold text-xl">{item.name}</p>
                                    <p className="text-green-700 font-bold text-xl">
                                        ₦{item.price.toLocaleString()}
                                    </p>
                                </div>

                                <div className="flex items-center space-x-3">
                                    {/* Decrement */}
                                    <button
                                        onClick={() => decrement(item.id)}
                                        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition shadow-sm"
                                    >
                                        <FiMinus />
                                    </button>

                                    {/* Quantity */}
                                    <span className="w-12 text-center font-semibold text-lg">
                                        {item.quantity}
                                    </span>

                                    {/* Increment */}
                                    <button
                                        onClick={() => increment(item.id)}
                                        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition shadow-sm"
                                    >
                                        <FiPlus />
                                    </button>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="ml-4 text-red-500 hover:text-red-700 transition"
                                    >
                                        <FiTrash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* TOTAL */}
                        <p className="text-right font-extrabold text-3xl text-green-700 mt-4">
                            Total: ₦{totalPrice.toLocaleString()}
                        </p>
                    </div>
                )}
            </div>

            {/* CHECKOUT FORM */}
            <form
                onSubmit={handlePlaceOrder}
                className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-200 max-w-xl mx-auto space-y-6"
            >
                <h3 className="text-3xl font-bold mb-4 text-green-700">Billing Information</h3>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-5 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-green-700 focus:outline-none shadow-sm transition"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-5 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-green-700 focus:outline-none shadow-sm transition"
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Delivery Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-5 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-green-700 focus:outline-none shadow-sm transition"
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-5 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-green-700 focus:outline-none shadow-sm transition"
                />

                <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-800 shadow-md hover:shadow-xl transition"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
}
