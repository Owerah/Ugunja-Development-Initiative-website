"use client";

import React, { useState } from 'react';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // success or error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mjkwzqjl', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start p-6 lg:p-16 gap-10 bg-white">
      {/* Google Map for Ugunja */}
      <div className="w-full lg:w-1/2 h-[450px]">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.048735102875!2d34.296580649999996!3d0.35380094999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a20db6b0e8d8d%3A0x8c94b2ffdb0d60cf!2sUgunja!5e0!3m2!1sen!2ske!4v1716288000000!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-semibold text-purple-800 mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-6">Drop us a line...</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="" disabled>
                Select Service
              </option>
              <option value="consultation">Champions Training</option>
              <option value="community">Community Engagement</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition"
          >
            Send Message
          </button>

          {/* Success or error message */}
          {status === 'success' && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-2">Oops! Something went wrong.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contacts;
