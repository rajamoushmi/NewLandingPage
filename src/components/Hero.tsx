"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="relative container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 overflow-hidden">
      {/* Background image with zoom-in effect */}
      <motion.div
        className="absolute inset-0 bg-[url('/your-image.jpg')] bg-cover bg-center z-[-1]"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Text content with fade & slide-down effect */}
      <motion.div
        className="text-center lg:text-start space-y-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Your IT,
            </span>
            our responsibility
          </h1>{" "}
          —your business,{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              your
            </span>{" "}
            priority.
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          "Empower your business resilience with cutting-edge IT innovations."
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
        <Button className="w-full md:w-1/3" onClick={() => window.location.href = '/'}>
  Get Started
</Button>

         
        </div>
      </motion.div>

      {/* Hero cards section with delay animation */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        <HeroCards />
      </motion.div>

      {/* Subtle shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
