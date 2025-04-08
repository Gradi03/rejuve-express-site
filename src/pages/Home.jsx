import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/footmassage.webp'; // replace with your image

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-white py-24 px-6 sm:px-12 lg:px-20 relative"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl font-bold text-[#2D6A4F] leading-tight mb-6"
          >
            Wellness Delivered To Your Doorstep
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md">
            Rejuve Express brings certified mobile massage therapy to your home, office, or event — so you can relax, recharge, and feel your best anytime, anywhere in Cape Town.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#2D6A4F] text-white px-6 py-3 rounded-full shadow hover:bg-[#245d42] transition"
            >
              Book Now
            </a>
            <a
              href="#about"
              className="text-[#2D6A4F] border border-[#2D6A4F] px-6 py-3 rounded-full hover:bg-[#2D6A4F] hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImage}
            alt="Relaxing mobile massage service"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
