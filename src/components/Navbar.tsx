"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent z-10 w-11/12 mx-auto">
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/images/logoo-removebg-preview (1).png"
            alt="Dior Logo"
            className="h-20 mr-2 w-24"
          />
        </Link>
      </div>
      <div className="space-x-8">
        <Link href="/">Home</Link>
        <Link href="/Collections">Collections</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
