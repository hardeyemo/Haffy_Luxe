"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

// Updated products list
const products = [

  { id: 1, name: "Bracelet", price: 3000, image: "/images/1.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
    { id: 2, name: "Bracelet", price: 3000, image: "/images/2.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
    { id: 3, name: "Bracelet", price: 3000, image: "/images/3.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
    { id: 4, name: "Bracelet", price: 3000, image: "/images/4.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
    { id: 5, name: "Bracelet", price: 3000, image: "/images/5.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
    { id: 6, name: "Bracelet", price: 3000, image: "/images/6.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
    { id: 7, name: "Bracelet", price: 3000, image: "/images/7.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
    { id: 8, name: "Bracelet", price: 3000, image: "/images/8.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
    { id: 17, name: "Bracelet", price: 3000, image: "/images/17.jpeg", category: "bracelet", description: "Stylish silver bracelet to complement any outfit." },
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
  const { id } = useParams(); // dynamic id from URL
  const { addToCart } = useCart();

  // Find product by id
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="p-8 text-center text-red-500">Product not found</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6 flex flex-col md:flex-row gap-6">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded object-cover"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-green-700 font-bold text-xl mb-4">₦{product.price.toLocaleString()}</p>
          <p className="mb-6">{product.description}</p>
          <button
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
          >
            Add to Cart
          </button>
          <Link href="/products" className="ml-4 text-green-700 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
