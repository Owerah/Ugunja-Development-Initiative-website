"use client"; // Ensures animations work in Next.js App Router

import { motion } from "framer-motion";

export default function OurTeam() {
  const teamMembers = [
    { name: "Mr. Cornel Onyango Onyimbo", image: "/CORNEL-1.webp" },
    { name: "Miss. Ruth Atieno Okoth", image: "/ruth.webp" },
    { name: "Mr. David Oduor Pedo", image: "/pedo.webp" },
  ];

  return (
    <section className="py-6 bg-black text-white text-center" id="our-team">
      <motion.h1
        className="text-4xl font-bold text-green-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Team
      </motion.h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-lg mb-16"
            />
            <h3 className="text-lg font-bold text-green-400">{member.name}</h3>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="#"
        className="inline-block mt-24 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Read More
      </motion.a>
    </section>
  );
}
