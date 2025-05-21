import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-sky-200 py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">UGUNJA DEVELOPMENT INITIATIVE</h2>
          <p className="text-sm">
            Empowering communities through health, education, and advocacy.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-base">
            <li className="hover:text-purple-700 transition cursor-pointer">Adolescent Health</li>
            <li className="hover:text-purple-700 transition cursor-pointer">Community Empowerment</li>
            <li className="hover:text-purple-700 transition cursor-pointer">Youth Mentorship</li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-base">
            <li className="hover:text-purple-700 transition cursor-pointer">Home</li>
            <li className="hover:text-purple-700 transition cursor-pointer">Services</li>
            <li className="hover:text-purple-700 transition cursor-pointer">About</li>
            <li className="hover:text-purple-700 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="info@ugunjadevelopmentinitiative.org"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
              Go
            </button>
          </div>
          <div className="flex items-center space-x-4 text-2xl">
            <a href="https://chat.whatsapp.com/HyXDEtvH37jCiZts5BtUSB" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-600 transition" />
            </a>
            <a href="https://www.instagram.com/vincentowerah" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-600 transition" />
            </a>
            <a href="https://www.facebook.com/mister.vincent.2023" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-800 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-12 text-gray-600">
        &copy; {new Date().getFullYear()} Ugunja Development Initiative. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
