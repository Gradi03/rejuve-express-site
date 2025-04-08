import React from 'react';
import { motion } from 'framer-motion';
import seatedMassage from '../assets/images/ladymassage.webp';
import vipMassage from '../assets/images/footmassage.webp';
import wellnessMassage from '../assets/images/massagingback.webp';

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-[#F9FAFB] py-20 px-4 sm:px-8 lg:px-16"
      aria-labelledby="services-heading"
    >
      <motion.header
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeVariant}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2
          id="services-heading"
          className="text-4xl sm:text-5xl font-bold text-[#2D6A4F]"
        >
          Our Services
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Experience wellness that fits into your lifestyle — whether at work, at home, or during your next big event.
        </p>
      </motion.header>

      {/* Service 1 */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeVariant}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-[#2D6A4F] mb-4">
            Workplace Seated Massages
          </h3>
          <p className="text-gray-700 text-lg">
            Energize your team and reduce stress with our on-site seated massage services. Designed for the office, our therapists bring everything needed to provide 15–30 minute sessions that help boost morale, productivity, and mental clarity.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={seatedMassage}
            alt="Therapist providing a seated massage in a corporate office"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Service 2 */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeVariant}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="md:w-1/2 w-full">
          <img
            src={vipMassage}
            alt="VIP receiving a luxury mobile massage"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-[#2D6A4F] mb-4">
            Executive & VIP Wellness
          </h3>
          <p className="text-gray-700 text-lg">
            Designed for decision-makers and high-performers, our VIP sessions offer discreet, luxurious treatment at your preferred location. Whether in the boardroom or at home, we help leaders reset, recharge, and stay sharp.
          </p>
        </div>
      </motion.div>

      {/* Service 3 */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeVariant}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-[#2D6A4F] mb-4">
            Full-Body Wellness for Staff
          </h3>
          <p className="text-gray-700 text-lg">
            Show your team they matter with full-body relaxation and recovery sessions. Whether it’s a special staff appreciation day or part of a recurring wellness plan, our therapists create a calming, restorative experience everyone will love.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={wellnessMassage}
            alt="Staff member enjoying a relaxing full-body massage"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        className="text-center max-w-2xl mx-auto mt-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeVariant}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h4 className="text-2xl font-semibold text-[#2D6A4F] mb-4">
          Tailored Wellness Packages
        </h4>
        <p className="text-gray-700 text-lg mb-6">
          Whether it’s a once-off retreat or a recurring weekly visit, we offer packages to fit your team's needs and budget. Let’s build a wellness routine that works for you.
        </p>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
