"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: "/images/bgm.jpg", alt: "Dior Collection 1" },
    { src: "/images/ji.webp", alt: "Dior Collection 2" },
    { src: "/images/3bg.webp", alt: "Dior Collection 3" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-screen transition-opacity duration-500
            ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-pink-900 bg-opacity-30 top-0">
        <h1 className="text-5xl font-bold mb-4">Welcome to Dior</h1>
        <p className="mt-4 text-lg">
          Explore the elegance and luxury of Dior&apos;s latest collections.
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
        <button
          onClick={prevSlide}
          className="bg-white text-pink-600 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-pink-600 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Home;
