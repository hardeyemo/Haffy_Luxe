"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const products = [
  { id: 1, name: "Bracelet", price: 3000, image: "/images/1.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
  { id: 2, name: "Bracelet", price: 3000, image: "/images/2.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
  { id: 3, name: "Bracelet", price: 3000, image: "/images/3.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
  { id: 4, name: "Bracelet", price: 3000, image: "/images/4.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
  { id: 5, name: "Bracelet", price: 3000, image: "/images/5.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
  { id: 6, name: "Bracelet", price: 3000, image: "/images/6.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
  { id: 7, name: "Bracelet", price: 3000, image: "/images/7.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
  { id: 8, name: "Bracelet", price: 3000, image: "/images/8.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
  { id: 9, name: "Necklace", price: 3000, image: "/images/n1.jpeg", category: "necklace", description: "Shiny diamond necklace for special occasions." },
  { id: 10, name: "Necklace", price: 3000, image: "/images/n2.jpeg", category: "necklace", description: "Shiny diamond necklace for special occasions." },
  { id: 11, name: "Necklace", price: 3000, image: "/images/n3.jpeg", category: "necklace", description: "Shiny diamond necklace for special occasions." },
  { id: 12, name: "Necklace", price: 3000, image: "/images/n4.jpeg", category: "necklace", description: "Shiny diamond necklace for special occasions." },
  { id: 13, name: "Wristwatch", price: 3000, image: "/images/w4.jpeg", category: "wristwatch", description: "Premium wristwatch with elegant design." },
  { id: 14, name: "Wristwatch", price: 3000, image: "/images/w3.jpeg", category: "wristwatch", description: "Premium wristwatch with elegant design." },
  { id: 15, name: "Wristwatch", price: 3000, image: "/images/w2.jpeg", category: "wristwatch", description: "Premium wristwatch with elegant design." },
  { id: 16, name: "Wristwatch", price: 3000, image: "/images/w1.jpeg", category: "wristwatch", description: "Premium wristwatch with elegant design." },
  { id: 18, name: "Ring", price: 3000, image: "/images/r3.jpeg", category: "ring", description: "Elegant gold ring for all occasions." },
  { id: 19, name: "Ring", price: 3000, image: "/images/r2.jpeg", category: "ring", description: "Elegant gold ring for all occasions." },
  { id: 20, name: "Ring", price: 3000, image: "/images/r1.jpeg", category: "ring", description: "Elegant gold ring for all occasions." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <p className="p-10 text-center text-red-500 font-semibold">
        Product not found
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-10 animate-slideUp">

        {/* Image */}
        <div className="flex-1 overflow-hidden rounded-2xl group">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-2xl object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* Details */}
        <div className="flex-1 animate-fadeIn">
          <h2 className="text-4xl font-extrabold mb-4">
            {product.name}
          </h2>

          <p className="text-green-700 font-extrabold text-2xl mb-6">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                })
              }
              className="bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-green-800 hover:scale-105 transition duration-300 animate-pulse"
            >
              Add to Cart
            </button>

            <Link
              href="/products"
              className="text-green-700 font-semibold hover:underline"
            >
              Back to Products
            </Link>
          </div>

          {/* Trust note */}
          <p className="mt-6 text-sm text-gray-500">
            ✔ Quality checked · ✔ Nationwide delivery
          </p>
        </div>
      </div>
    </div>
  );
}
