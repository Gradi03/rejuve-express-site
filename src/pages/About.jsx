import React from 'react';
import { motion } from 'framer-motion';
import ladyMassage from '../assets/images/ladymassage.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  return (
    <section
      id="about"
      className="bg-[#F9FAFB] py-20 px-4 sm:px-8 lg:px-16"
      aria-labelledby="about-heading"
      role="region"
    >
      {/* Section Title */}
      <motion.header
        className="text-center mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          id="about-heading"
          className="text-4xl sm:text-5xl font-bold text-[#2D6A4F]"
        >
          Who We Are
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Passionate about wellness. Committed to convenience.
        </p>
      </motion.header>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.div
          className="text-lg text-gray-700 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-6">
            <strong>Rejuve Express</strong> is Cape Town’s trusted mobile massage and wellness partner. We specialize
            in bringing relaxation and therapeutic care directly to you — whether you're in the office, at home, or hosting an event.
          </p>
          <p>
            Our certified therapists are passionate professionals who tailor each session to your needs. We're here to help
            you destress, revitalize, and feel your best — on your schedule, in your space.
          </p>
        </motion.div>

        <motion.figure
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <img
            src={ladyMassage}
            alt="Certified mobile massage therapist performing a soothing massage on a client"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.figure>
      </div>

      {/* Why Choose Us */}
      <motion.section
        className="text-center mb-20"
        aria-labelledby="why-choose-us-heading"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          id="why-choose-us-heading"
          className="text-2xl sm:text-3xl font-semibold text-[#2D6A4F] mb-6"
        >
          Why Choose Rejuve Express?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[ 
            {
              title: 'Experienced Therapists',
              description:
                'All our therapists are fully certified and bring years of hands-on experience in therapeutic and workplace massage.',
            },
            {
              title: 'Tailored Wellness Packages',
              description:
                'We design personalized massage experiences for individuals, teams, and events. No two sessions are the same.',
            },
            {
              title: 'Convenient & Reliable',
              description:
                'We come to you — with all equipment included — and ensure every detail is handled professionally and on time.',
            },
          ].map((item, index) => (
            <motion.article
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-left"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
            >
              <h3 className="text-xl font-semibold text-[#2D6A4F] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Final CTA / Statement */}
      <motion.div
        className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>
          At Rejuve Express, we make wellness effortless. Our goal is to help you feel revitalized, whether you're
          unwinding at home or boosting morale at work. Let us bring the calm to your chaos — anytime, anywhere in Cape Town.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutPage;
