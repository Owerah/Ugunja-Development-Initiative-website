"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const images = [
    {
      src: "/logophoto.jpg",
      description: "UDI Volunteers",
    },
     {
      src: "/netballcarol.jpg",
      description: "Netball for health",
    },
    {
      src: "/Carol1.jpg",
      description: "Carol giving out presents to the winners",
    },
    {
      src: "/championstraining.jpg",
      description: "Champions training at Savannah Hohel",
    },
    {
      src: "/meetings.jpg",
      description: "Community engagement and inclusive planning",
    },
    {
      src: "/champions.jpg",
      description: "Peer leadership in action through our champions program",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, 4000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentImageIndex, isPaused]);

  return (
    <header className="w-full bg-blue-200">
      <div className="flex flex-col md:flex-row items-stretch min-h-[600px]">
        {/* Left Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 leading-tight">
              Our Vision & Mission
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              <strong className="text-pink-800">Vision:</strong> A well-informed and empowered society.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              <strong className="text-pink-800">Mission:</strong> To empower marginalized populations by enhancing their capacity to effectively use available resources for their own development.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition">
                <h3 className="text-lg font-bold text-purple-700">Education</h3>
                <p className="text-sm text-gray-600">Mentorship and life skills education</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition">
                <h3 className="text-lg font-bold text-purple-700">Healthcare</h3>
                <p className="text-sm text-gray-600">Water, Sanitation, and Hygiene</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition">
                <h3 className="text-lg font-bold text-purple-700">Empowerment</h3>
                <p className="text-sm text-gray-600">
                  Support for women, youth & small businesses
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Slideshow */}
        <div
          className="md:w-1/2 w-full relative h-[400px] md:h-auto overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={images[currentImageIndex].src}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images[currentImageIndex].src})`,
                filter: "brightness(65%)",
              }}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute bottom-8 w-full text-center px-6"
              >
                <p className="text-lg md:text-2xl font-medium bg-black bg-opacity-40 text-white px-4 py-3 rounded-lg inline-block max-w-xl mx-auto">
                  {images[currentImageIndex].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
