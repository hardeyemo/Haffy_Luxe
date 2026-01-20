"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Bracelet", category: "bracelet", price: 3000, image: "/images/1.jpeg" },
  { id: 2, name: "Bracelet", category: "bracelet", price: 3000, image: "/images/2.jpeg" },
  { id: 3, name: "Bracelet", category: "bracelet", price: 3000, image: "/images/3.jpeg" },
  { id: 4, name: "Bracelet", category: "bracelet", price: 3000, image: "/images/4.jpeg" },
  { id: 5, name: "Bracelet", category: "bracelet", price: 3000, image: "/images/5.jpeg" },
  { id: 6, name: "Bracelet", category: "bracelet", price: 3000, image: "/images/6.jpeg" },
  { id: 7, name: "Bracelet", category: "bracelet", price: 3000, image: "/images/7.jpeg" },
  { id: 8, name: "Bracelet", category: "bracelet", price: 3000, image: "/images/8.jpeg" },

  { id: 9, name: "Necklace", category: "necklace", price: 3000, image: "/images/n1.jpeg" },
  { id: 10, name: "Necklace", category: "necklace", price: 3000, image: "/images/n2.jpeg" },
  { id: 11, name: "Necklace", category: "necklace", price: 3000, image: "/images/n3.jpeg" },
  { id: 12, name: "Necklace", category: "necklace", price: 3000, image: "/images/n4.jpeg" },

  { id: 13, name: "Wristwatch", category: "wristwatch", price: 3000, image: "/images/w4.jpeg" },
  { id: 14, name: "Wristwatch", category: "wristwatch", price: 3000, image: "/images/w3.jpeg" },
  { id: 15, name: "Wristwatch", category: "wristwatch", price: 3000, image: "/images/w2.jpeg" },
  { id: 16, name: "Wristwatch", category: "wristwatch", price: 3000, image: "/images/w1.jpeg" },

  { id: 17, name: "Bracelet", category: "bracelet", price: 3000, image: "/images/17.jpeg" },

  { id: 18, name: "Ring", category: "ring", price: 3000, image: "/images/r3.jpeg" },
  { id: 19, name: "Ring", category: "ring", price: 3000, image: "/images/r2.jpeg" },
  { id: 20, name: "Ring", category: "ring", price: 3000, image: "/images/r1.jpeg" },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter((p) => p.category === category.toLowerCase())
    : products;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-8 min-h-screen bg-gray-100"
    >
      {/* Title */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-green-700 mb-8"
      >
        {category ? `${category.toUpperCase()} Collection` : "All Products"}
      </motion.h2>

      {/* Products Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={card}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href={`/products/${product.id}`}
              className="bg-white rounded-xl shadow hover:shadow-xl transition block overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-green-700 font-bold">
                  ₦{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
