"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="relative container py-24 sm:py-32">
      <div className="relative w-full h-auto overflow-hidden rounded-3xl shadow-xl">
        {/* Background Image with Zoom Effect */}
        <motion.img
          src="https://www.shutterstock.com/image-photo/closeup-businessman-hand-typing-on-600nw-2393859393.jpg"
          alt="Company"
          className="w-full h-auto object-cover rounded-3xl"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the section is in view
        />

        {/* Text Overlay with Animation */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 bg-black/50 backdrop-blur-sm rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading Animation */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
              About
            </span>
            <span className="text-white ml-2">Company</span>
          </motion.h2>

          {/* Paragraphs with Staggered Fade-in */}
          <motion.p
            className="text-lg md:text-xl max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
           AboutCompany

In a world where technology advances at lightning speed, choose a partner that stays ahead of the curve. We are pioneers in innovation, redefining the IT landscape with groundbreaking solutions. With a legacy of success, we empower businesses to thrive in the digital era, crafting strategies that drive growth and efficiency.



          </motion.p>

          <motion.p
            className="mt-4 text-lg md:text-xl max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Transform your business with our bespoke IT solutions, meticulously designed to blend excellence with reliability. Our expertise spans across industries, delivering tailor-made technology that seamlessly integrates into your operations. Whether it's cloud computing, cybersecurity, or AI-driven advancements, we provide future-ready solutions that keep you ahead of the competition.

          </motion.p>
          
        </motion.div>
      </div>
    </section>
  );
};
