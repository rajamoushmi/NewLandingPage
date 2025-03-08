"use client";

import { motion } from "framer-motion";
import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
  },
  {
    icon: <Radar size={34} />,
    name: "We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.",
  },
  {
    icon: <Radar size={34} />,
    name: "We specialize in serving specific industries, such as healthcare, finance, and offer tailored solutions that meet your unique needs.",
  },
  {
    icon: <Radar size={34} />,
    name: "Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        What We Do?
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {sponsors.map(({ icon, name }, index) => (
          <motion.div
            key={name}
            className="flex items-center gap-2 text-muted-foreground/80 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.3, // Delays each item for a sequential effect
              ease: "easeOut",
            }}
            viewport={{ once: true }} // Triggers only once when in view
          >
            <span>{icon}</span>
            <h3 className="text-lg md:text-xl font-semibold">{name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
