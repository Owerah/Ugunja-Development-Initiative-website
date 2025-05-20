"use client"; // Ensures animations work in Next.js App Router

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const images = [
    "/logophoto.jpg", // Replace with your image paths
    "/meetings.jpg", // Second image
    "/champions.jpg", // Third image
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <header 
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-4 text-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out", // Smooth transition effect
      }}
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>

      {/* Vision & Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-lg inline-block max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-purple-800">Our Vision & Mission</h1>
        <p className="mt-4 text-lg text-gray-800">
          <strong className="text-pink-800">Vision:</strong> A well-informed and empowered society.
        </p>
        <p className="text-lg text-gray-800">
          <strong className="text-pink-800">Mission:</strong> To empower marginalized populations by enhancing their capacity to effectively use available resources for their own development.
        </p>
      </motion.div>

      {/* Focused Areas Section */}
      <motion.div
        className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Education</h3>
          <p>Mentorship and life skills education</p>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Healthcare</h3>
          <p>Water, Sanitation, and Hygiene</p>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Economic Empowerment</h3>
          <p>Supporting small businesses, vocational training, and women's empowerment.</p>
        </div>
      </motion.div>
    </header>
  );
}
