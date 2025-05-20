"use client"; // Ensures this component is client-side

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon for mobile menu toggle

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const links = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Organization Name */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.jpg" alt="Logo" width={48} height={48} />
          <h1 className="text-lg font-bold">
            <span className="ugunja">UGUNJA</span> 
            <span className="development-initiative">  DEVELOPMENT INITIATIVE</span>
          </h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex space-x-6 md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-40`}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block md:inline-block px-2 py-1 rounded md:rounded-none hover:bg-blue-500 hover:underline"
              onClick={() => setMobileMenuOpen(false)} // Close menu on link click
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
