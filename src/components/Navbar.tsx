"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent z-10 w-11/12 mx-auto">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logoo-removebg-preview (1).png"
            alt="Dior Logo"
            className="h-20 mr-2 w-24"
            width={96}
            height={80}
          />
        </Link>
      </div>
      <div className="space-x-8">
        <Link
          href="/"
          className={`font-bold transition duration-300 transform text-lg ${
            pathname === "/" ? "text-black" : "text-pink-500"
          } hover:text-gray-200`}
        >
          Home
        </Link>
        <Link
          href="/Collections"
          className={`font-bold transition duration-300 transform text-lg ${
            pathname === "/Collections" ? "text-black" : "text-pink-500"
          } hover:text-gray-200`}
        >
          Collections
        </Link>
        <Link
          href="/blog"
          className={`font-bold transition duration-300 transform text-lg ${
            pathname === "/blog" ? "text-black" : "text-pink-500"
          } hover:text-gray-200`}
        >
          Blog
        </Link>
        <Link
          href="/about"
          className={`font-bold transition duration-300 transform text-lg ${
            pathname === "/about" ? "text-black" : "text-pink-500"
          } hover:text-gray-200`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`font-bold transition duration-300 transform text-lg ${
            pathname === "/contact" ? "text-black" : "text-pink-500"
          } hover:text-gray-200`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
