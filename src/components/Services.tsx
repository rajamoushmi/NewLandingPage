import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewProps {
  rating: number;
  review: string;
  author: string;
}

const reviews: ReviewProps[] = [
  {
    rating: 5.0,
    review:
      "They know what they're doing, and the team is prompt and well-organized.",
    author: "Business Operations Coordinator, Pharmaceutical",
  },
  {
    rating: 5.0,
    review:
      "Even though we gave them short notice, they jumped in and helped us move mountains to set up our office equipment.",
    author: "Analyst, Fitness Company",
  },
  {
    rating: 5.0,
    review:
      "They do their very best to make sure you succeed. If there’s an issue, they step in .",
    author: "Vice President Marketing Communications",
  },
  {
    rating: 5.0,
    review:
      "We’re 100% satisfied with their work, and Tecnologia has exceeded our expectations.",
    author: "Litigation Support Associate, Kennedy Berg LLP",
  },
  {
    rating: 5.0,
    review: "Their responsiveness is really great — they resolve issues promptly and usefull.",
    author: "Deputy Director, National Academy of Design",
  },
  {
    rating: 5.0,
    review:
      "They recognize that our success is in everyone's, and they work hard to help us .",
    author: "Head of IT, Restaurant Product Supplier",
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What our clients say about working with{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Finolity
        </span>
      </h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map(({ rating, review, author }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 shadow-2xl border border-gray-300 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                {/* Star Ratings */}
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="text-xl font-bold">{rating}</span>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={18} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </CardHeader>

              {/* Review Text */}
              <CardDescription className="text-lg italic text-gray-700 dark:text-gray-300">
                "{review}"
              </CardDescription>

              {/* Author Name */}
              <CardTitle className="mt-6 font-semibold text-gray-800 dark:text-gray-200">
                {author}
              </CardTitle>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
