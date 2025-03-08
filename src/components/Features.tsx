"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/aerospace.webp";
import image3 from "../assets/iot.webp";
import image4 from "../assets/image.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Digital Campus",
    description:
      "Empower students with real-time 3D development skills for careers in gaming, AR, VR, and engineering through Unity 3D courses.",
    image: image4,
  },
  {
    title: "IOT",
    description:
      "Engineering and science education must integrate advanced manufacturing and IIoT skills to align with industry needs.",
    image: image3,
  },
  {
    title: "AeroSpace",
    description:
      "To meet industry expectations, engineers and scientists must gain expertise in advanced Data Science.",
    image: image,
  },
];

const featureList: string[] = [
  "Consumer Product Reports",
  "Packaging Industry Reports",
  "IT & Communications Technology Reports",
  "Food & Beverage Reports",
  "Services and Utilities Reports",
  "Oil and Gas Reports",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-12">
      {/* Section Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Services
        </span>
      </h2>

      {/* Scrollable Feature List */}
      <div className="overflow-hidden whitespace-nowrap py-4 relative">
        <motion.div
          className="flex gap-6"
          initial={{ x: "0%" }} // Start from the visible state
          animate={{ x: ["0%", "-100%"] }} // Start scrolling after displaying
          transition={{
            repeat: Infinity,
            duration: 20, // Slower speed
            ease: "linear",
            delay: 3, // Wait before scrolling starts
          }}
        >
          {featureList.map((feature: string, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm px-3 py-2"
            >
              {feature}
            </Badge>
          ))}
          {/* Duplicate for smooth looping */}
          {featureList.map((feature: string, index) => (
            <Badge
              key={`duplicate-${index}`}
              variant="secondary"
              className="text-sm px-3 py-2"
            >
              {feature}
            </Badge>
          ))}
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card
            key={title}
            className="group shadow-lg border border-gray-200 rounded-2xl p-4 hover:shadow-2xl transition-all"
          >
            {/* Card Header */}
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="black text-center">{description}</CardContent>

            {/* Card Footer with Zoom Effect on Image */}
            <CardFooter className="flex justify-center mt-4">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt="Feature"
                  className="w-[200px] lg:w-[300px] mx-auto rounded-xl transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
