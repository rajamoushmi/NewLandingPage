
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Calendar, Clock } from "lucide-react";

interface EventProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  benefitList: { type: "location" | "time" | "date"; text: string }[];
}

const eventList: EventProps[] = [
  {
    title: "AI Center of Excellence in Education",
    description:
      "Explore advancements in AI and education, featuring industry experts and real-world applications.",
    buttonText: "Register Today",
    imageUrl: "https://static.theprint.in/wp-content/uploads/2025/02/Illustration-Prajna-Ghosh-ThePrint-696x392.jpg?compress=true&quality=80&w=376&dpr=2.6", // Add image URL here
    benefitList: [
      { type: "location", text: "Mumbai" },
      { type: "date", text: "Saturday, March 29" },
      { type: "time", text: "11 AM – 1 PM" },
      
    ],
  },
  {
    title: "Finolity Green Horizons Summit 2025",
    description:
      "Join discussions on sustainability and green technology, with insights from industry expert leaders.",
    buttonText: "Register Today",
    imageUrl: "https://www.hopwood.ac.uk/wp-content/uploads/2025/03/Green-Summit-Logo_FINAL.png", // Add image URL here
    benefitList: [
      { type: "location", text: "New Delhi" },
      { type: "date", text: "Sunday, September 252" },
      { type: "time", text: "12 AM – 2 PM" },
    ],
  },
  {
    title: "Finolity Ecosystem Partnerships Summit",
    description:
      "Connect with industry leaders to explore collaborations and innovations in technology ecosystems.",
    buttonText: "Register Today",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZCNw49e30g4FeV2DhmPoW8bkEgBYLqXB3A&s", // Add image URL here
    benefitList: [
      { type: "location", text: "Bangalore" },
      { type: "date", text: "Sunday, September 14" },
      { type: "time", text: "4 PM – 8:30 PM" },
      
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="events" className="container py-24 sm:py-32">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary dark:text-white">
        Discover Upcoming Events<span className="text-secondary"></span>
      </h2>
      <h3 className="text-lg text-center text-muted-foreground dark:text-gray-300 pt-4 pb-8">
        Engage with industry leaders and professionals in exclusive events.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventList.map((event: EventProps) => (
          <Card
            key={event.title}
            className="transition-transform transform hover:scale-105 drop-shadow-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700"
          >
            <CardHeader>
              <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                {event.title}
              </CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-300 text-md leading-relaxed">
                {event.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full transition-all duration-300 hover:bg-primary/80 text-lg py-3">
                {event.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4 border-gray-300 dark:border-gray-600" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {event.benefitList.map((benefit, index) => (
                  <span key={index} className="flex items-center text-gray-900 dark:text-white">
                    {benefit.type === "location" && (
                      <MapPin className="text-blue-500 w-5 h-5" />
                    )}
                    {benefit.type === "time" && (
                      <Clock className="text-green-500 w-5 h-5" />
                    )}
                    {benefit.type === "date" && (
                      <Calendar className="text-red-500 w-5 h-5" />
                    )}
                    <h3 className="ml-2 text-lg font-medium">{benefit.text}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
