import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

// ✅ BRAND METADATA
export const metadata = {
  title: "Haffy Luxe | Premium Jewelry & Accessories",
  description:
    "Haffy Luxe offers premium rings, bracelets, necklaces, and wristwatches. Elegant designs, affordable luxury, and trusted delivery across Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}