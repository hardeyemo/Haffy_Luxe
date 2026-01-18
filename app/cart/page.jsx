"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="min-h-screen p-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link
          href="/products"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Shop Now
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow rounded p-4"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p>
                ₦{item.price.toLocaleString()} x {item.quantity}
              </p>
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <p className="font-bold text-lg">Total: ₦{totalPrice.toLocaleString()}</p>
        <div className="space-x-2">
          <button
            onClick={clearCart}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Clear Cart
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
