import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg",
    name: "Managed Services",
    comment: "Free up your internal resources to focus on the business by letting us handle day-to-day support services, management, and monitoring of your IT.",
  },
  {
    image: "https://www.keenesystems.com/hubfs/blog-images/bigstock-It-Consultant-Presenting-Tag-C-435713942.jpg",
    name: "IT Consulting & Advisory",
    comment:
"The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth of the company."  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTKYYgFO2WEBmASo3NVlFZov96GvkmH_WNw&s",
    name: "Cyber Security",
    comment:
"Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data."  },
  {
    image: "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    name: "Web Development",
    comment:
"Our web development services can help you establish an impactful online presence and reach your target audience effectively."  },
  {
    image: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
    name: "Mobile Development",
    comment:
    "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms."
  },
  {
    image: "https://assets.datamation.com/uploads/2023/12/dm_20231220-cloud-service-providers.png",
    name: "Cloud Services",
    comment:
    "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals."
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Solutions
        </span>
      </h2>
      <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto pb-10">
        Finolity is your reliable partner for IT solutions, software development, and digital transformation. Our goal is to streamline your business operations, enhance efficiency, and drive growth through innovative technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto">
        {testimonials.map(({ image, name, comment }: TestimonialProps, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-[550px] w-full mx-auto overflow-hidden shadow-2xl rounded-2xl transition-transform transform hover:scale-105 hover:shadow-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
              <CardHeader className="flex flex-row items-center gap-6 pb-4 bg-gray-100 dark:bg-gray-900 p-6 rounded-t-2xl">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    alt=""
                    src={image}
                    className="rounded-full object-cover"
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300 text-lg p-6 leading-relaxed">
                {comment}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
