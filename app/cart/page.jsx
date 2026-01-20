"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-center px-6">
        <h2 className="text-3xl font-extrabold mb-4 animate-fadeIn">
          Your Cart is Empty
        </h2>
        <p className="text-gray-600 mb-8 animate-slideUp">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          href="/products"
          className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-800 hover:scale-105 transition duration-300"
        >
          Start Shopping
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:p-10">
      <h2 className="text-3xl font-extrabold mb-8 animate-fadeIn">
        Your Cart
      </h2>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            style={{ animationDelay: `${index * 100}ms` }}
            className="flex items-center bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-4 animate-slideUp hover:shadow-xl transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={90}
              height={90}
              className="rounded-xl object-cover"
            />

            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">
                ₦{item.price.toLocaleString()} × {item.quantity}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:scale-105 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center animate-fadeIn">
        <p className="font-extrabold text-xl mb-4 md:mb-0">
          Total: ₦{totalPrice.toLocaleString()}
        </p>

        <div className="flex gap-3">
          <button
            onClick={clearCart}
            className="bg-gray-400 text-white px-5 py-3 rounded-xl hover:bg-gray-500 transition"
          >
            Clear Cart
          </button>

          <button className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-800 hover:scale-105 transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
