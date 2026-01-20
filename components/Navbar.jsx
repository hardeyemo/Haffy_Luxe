"use client";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useState, useRef, useEffect } from "react";

const productCategories = [
  { name: "Ring", href: "/products?category=ring", image: "/images/r1.jpeg" },
  { name: "Bracelet", href: "/products?category=bracelet", image: "/images/1.jpeg" },
  { name: "Necklace", href: "/products?category=necklace", image: "/images/n1.jpeg" },
  { name: "Wristwatch", href: "/products?category=wristwatch", image: "/images/w1.jpeg" },
];

export default function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo.png"
              alt="Haffy Luxe Logo"
              width={60}
              height={15}
              priority
              className="object-contain md:w-16 md:h-16 w-12 h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-200">
            <Link href="/" className="hover:text-green-300 transition">Home</Link>

            {/* Desktop Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDesktopProductsOpen(!desktopProductsOpen)}
                className="hover:text-green-300 transition cursor-pointer flex items-center gap-1"
              >
                Products
              </button>

              {desktopProductsOpen && (
                <div className="absolute top-12 left-0 w-72 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-lg py-4 z-50 grid grid-cols-2 gap-4 p-4">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="flex flex-col items-center gap-2 hover:bg-white/20 p-2 rounded-lg transition transform hover:scale-105"
                      onClick={() => setDesktopProductsOpen(false)}
                    >
                      <Image src={cat.image} alt={cat.name} width={64} height={64} className="object-cover rounded-full"/>
                      <span className="font-medium text-sm text-gray-200">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-green-300 transition">About</Link>
            <Link href="/contact" className="hover:text-green-300 transition">Contact</Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/checkout" className="relative">
              <FiShoppingCart size={24} className="cursor-pointer text-gray-200 hover:text-green-300 transition"/>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">{totalQuantity}</span>
              )}
            </Link>

            <button
              className="md:hidden p-2 rounded-md hover:bg-white/20 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={24} className="text-gray-200"/> : <FiMenu size={24} className="text-gray-200"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl px-2 pt-2 pb-4 space-y-1 text-gray-200">
          <Link href="/" className="block px-3 py-2 rounded hover:bg-white/20 transition">Home</Link>

          {/* Mobile Products Dropdown */}
          <button
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            className="w-full text-left px-3 py-2 rounded hover:bg-white/20 transition flex justify-between items-center"
          >
            Products
            <span>{mobileProductsOpen ? "-" : "+"}</span>
          </button>

          {mobileProductsOpen && (
            <div className="pl-4 grid grid-cols-2 gap-2">
              {productCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="flex flex-col items-center hover:bg-white/20 p-2 rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  <Image src={cat.image} width={48} height={48} className="rounded-full"/>
                  <span className="text-sm text-gray-200">{cat.name}</span>
                </Link>
              ))}
            </div>
          )}

          <Link href="/about" className="block px-3 py-2 rounded hover:bg-white/20 transition">About</Link>
          <Link href="/contact" className="block px-3 py-2 rounded hover:bg-white/20 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
