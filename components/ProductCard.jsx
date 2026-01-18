"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ id, name, price, image }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
      <Link href={`/products/${id}`}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="rounded object-cover cursor-pointer"
        />
      </Link>
      <h3 className="mt-2 font-semibold text-lg">{name}</h3>
      <p className="text-green-700 font-bold">₦{price.toLocaleString()}</p>
      <button
        className="mt-2 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
        onClick={() => addToCart({ id, name, price, image })}
      >
        Add to Cart
      </button>
    </div>
  );
}
