"use client";

import Link from "next/link";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-pink-900 bg-opacity-30 top-0">
        <h1 className="text-5xl font-bold mb-4">Welcome to Dior</h1>
        <p className="mt-4 text-lg">
          Explore the elegance and luxury of Dior's latest collections.
        </p>
        <div className="mt-6">
          <Link
            href="/collections"
            className="text-pink-200 hover:underline font-bold"
          >
            Discover Our Collections
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-between items-center">
        <button className="bg-white text-pink-600 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          ❮
        </button>
        <button className="bg-white text-pink-600 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Home;
