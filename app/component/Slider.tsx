"use client";

import React, { useState } from "react";
import { banners } from "../../data/BannerItems";
import Image from "next/image";

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[300px]">
      {/* Slider Content */}
      <div className="overflow-hidden relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === activeIndex ? "translate-x-0" : "translate-x-full"
            } ${index < activeIndex ? "-translate-x-full" : ""}`}
          >
            <Image
              src={banner.imageSrc}
              alt={banner.description || "Banner image"}
              fill
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded"
      >
        Next
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
