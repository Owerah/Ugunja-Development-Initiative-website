"use client"; // Ensures animations work in Next.js App Router

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { image: "pads.jpg", title: "Menstrual Hygiene Management" },
    { image: "champions.jpg", title: "Champions Program" },
    { image: "cleaning.jpg", title: "Environmental Conservation" },
    { image: "parents.jpg", title: "Parents Outreach" }
  ];

  return (
    <section id="projects" className="bg-blue-200 py-10 px-6 text-center">
      {/* Projects Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-600">Our Projects</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">
          We are dedicated to making a positive impact through our projects.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Project Cards */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <img
              src={`/${project.image}`} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            {/* Title under the image */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center">
              <h3 className="text-sm font-bold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
