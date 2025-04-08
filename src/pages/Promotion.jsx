import React from 'react';
import { motion } from 'framer-motion';
import promoImage from '../assets/images/ladymassage.webp'; // Use a relevant relaxing image

const PromotionPage = () => {
  return (
    <section
      id="promotion"
      className="bg-[#F0FDF4] py-20 px-4 sm:px-8 lg:px-16"
      aria-labelledby="promotion-heading"
    >
      {/* Header */}
      <motion.header
        className="text-center mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          id="promotion-heading"
          className="text-4xl sm:text-5xl font-bold text-[#2D6A4F]"
        >
          Special Offer – Limited Time Only!
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Experience the benefits of mobile wellness with our exclusive promotion — perfect for first-timers, HR managers, and event planners!
        </p>
      </motion.header>

      {/* Promo Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-[#2D6A4F] mb-4">
            First-Time Client Deal 🎉
          </h2>
          <p className="mb-4">
            Book your first corporate or private session and receive <strong>20% off</strong> your total booking. Whether it’s a staff treat day, wellness event, or home visit — we bring the calm, you keep the savings.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Valid for any massage type</li>
            <li>Minimum of 3 clients per session</li>
            <li>Available in Cape Town & surrounds</li>
            <li>Valid until: <strong>30 June 2025</strong></li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-[#2D6A4F] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1B4332] transition"
          >
            Book Now & Save
          </a>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={promoImage}
            alt="Relaxing promotional massage"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.figure>
      </div>
    </section>
  );
};

export default PromotionPage;
