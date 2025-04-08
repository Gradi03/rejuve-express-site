import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'We provide mobile massage services throughout Cape Town and surrounding suburbs. If you’re unsure whether we cover your area, just reach out!',
  },
  {
    question: 'Do I need to provide any equipment?',
    answer:
      'Not at all. Our therapists bring everything – massage chair or table, oils, sanitizers, and relaxing music if needed.',
  },
  {
    question: 'How long are the sessions?',
    answer:
      'Sessions typically range from 15 to 60 minutes, depending on your needs. We also offer custom packages for events or recurring wellness days.',
  },
  {
    question: 'Are your therapists qualified?',
    answer:
      'Yes, all our therapists are certified professionals with extensive experience in various massage techniques.',
  },
  {
    question: 'Can I book for multiple people or teams?',
    answer:
      'Absolutely. We cater to small and large groups – perfect for team-building events, corporate wellness days, and more.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-white py-20 px-4 sm:px-8 lg:px-16"
      aria-labelledby="faq-heading"
    >
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          id="faq-heading"
          className="text-4xl sm:text-5xl font-bold text-[#2D6A4F]"
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
          Got questions? We’ve got answers. Here’s everything you need to know about our mobile wellness services.
        </p>
      </motion.header>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-[#2D6A4F] font-semibold text-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              {faq.question}
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  id={`faq-${index}`}
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: 'auto', opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="px-6 pb-4 text-gray-700 text-base overflow-hidden"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
