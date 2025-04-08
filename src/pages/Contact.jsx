import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="bg-[#F9FAFB] py-20 px-4 sm:px-8 lg:px-16"
      aria-labelledby="contact-heading"
    >
      {/* Heading */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          id="contact-heading"
          className="text-4xl sm:text-5xl font-bold text-[#2D6A4F]"
        >
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
          We're here to answer your questions and help you feel your best — at home, work, or events.
        </p>
      </motion.header>

      {/* Contact Info */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 text-center mb-16 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <div>
          <h3 className="font-semibold text-lg text-[#2D6A4F]">
            <FaMapMarkerAlt className="inline-block mr-2" />
            Location
          </h3>
          <p className="text-gray-600">Cape Town, South Africa</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-[#2D6A4F]">
            <FaPhoneAlt className="inline-block mr-2" />
            Phone
          </h3>
          <p className="text-gray-600">+27 65 123 4567</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-[#2D6A4F]">
            <FaEnvelope className="inline-block mr-2" />
            Email
          </h3>
          <p className="text-gray-600">hello@rejuveexpress.co.za</p>
        </div>
      </motion.div>

      {/* Form */}
      <motion.form
        className="bg-white shadow-xl rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jane Doe"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="jane@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="How can we help you?"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
          ></textarea>
        </div>
        <div className="text-center pt-2">
          <button
            type="submit"
            className="bg-[#2D6A4F] text-white font-semibold py-3 px-10 rounded-full hover:bg-[#245C43] transition duration-300"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactPage;
