"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const teamList = [
  {
    imageUrl: "https://i.postimg.cc/j5J0FtF3/Samriti-finolity-1.jpg",
    name: "Kumar Abhishek",
    position: "Founder & CEO",
    url: "https://finolity.com/team/money-khanna/",
  },
  {
    imageUrl: "https://i.postimg.cc/QdbXQ82p/moneykhanna-finolity.jpg",
    name: "Money Khanna",
    position: "Board Member",
    url: "https://finolity.com/team/money-khanna/",
  },
  {
    imageUrl: "https://i.postimg.cc/GmqCBMDK/drvivek-jain-finolity-1.jpg",
    name: "Dr. Vivek Jain",
    position: "Advisory Board Member",
    
    url: "https://finolity.com/team/vivek-jain/",
  },
  {
    imageUrl: "https://i.postimg.cc/QMzZmH0W/boss.jpg",
    name: "Gyanender Kumar Singh",
    position: "Director and Co-President",
    url: "https://finolity.com/team/vivek-jain/",
  },
];

export const Team = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 2 < teamList.length ? prevIndex + 2 : 0));
  };
  
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : teamList.length - 2));
  };

  return (
    <section id="team" className="container py-24 sm:py-32 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated Companies
        </span>
        <span className="text-white ml-2">Crew</span>
      </h2>
      <p className="text-center text-xl text-muted-foreground mb-10">Get to know us better</p>
      
      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button onClick={prevSlide} className="absolute left-0 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700">
          <ChevronLeft size={30} className="text-white" />
        </button>

        {/* Team Cards */}
        <div className="flex overflow-hidden w-full max-w-3xl">
          <AnimatePresence mode="wait">
            {teamList.slice(index, index + 2).map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-1/2 px-3"
              >
                <Card className="bg-muted/50 flex flex-col justify-center items-center text-center p-6 shadow-lg rounded-xl">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="rounded-full w-24 h-24 object-cover border-4 border-primary"
                  />
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary">{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={member.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                      View Profile
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button onClick={nextSlide} className="absolute right-0 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700">
          <ChevronRight size={30} className="text-white" />
        </button>
      </div>
    </section>
  );
};