"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "beginning",
    title: "The Beginning",
    content:
      "Finolity Consultancy Service, driven by a vision to improve education, Our Founder Kumar Abhishek identifying gaps in the education system, he secured his first client—his own college—ushering in transformative solutions for education.",
  },
  {
    id: "mission",
    title: "Our Mission",
    content:
      "Finolity is dedicated to crafting and delivering innovative solutions to customers, ensuring complete client success. We pioneer technology, providing cutting-edge digital experiences, fostering financial inclusion, and transforming the industry through technology-driven excellence for sustainable growth and global impact.",
  },
  {
    id: "vision",
    title: "Our Vision",
    content:
      "We pioneer technology, providing cutting-edge digital experiences, fostering financial inclusion, and transforming the industry through technology-driven excellence.",
  },
  {
    id: "global",
    title: "We Are Global",
    content:
      "Our national network allows us to offer best-in-class services like dedicated vCIOs, specialized security and compliance advisory services, a 24/7 help desk, and more. Call Us on 1800 203 9983",
  },
];

export const Cta = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = sections[0].id;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full py-20 flex flex-col items-center">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

      {/* Moving Red Dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green rounded-full shadow-lg"
        animate={{
          y: sections.findIndex((s) => s.id === activeSection) * 200,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />

      {/* Timeline Sections */}
      <div className="w-full max-w-5xl mx-auto flex flex-col space-y-32">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className={`flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`w-1/2 px-6 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <h2 className="text-4xl font-bold text-green">{section.title}</h2>
              <p className="text-lg text-green mt-2">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
