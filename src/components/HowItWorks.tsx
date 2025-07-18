import { useEffect, useState, useRef } from "react";

const partners = [
  { name: "Intel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIrYIL7CV1mRAa3RY_MYerOZ1iIXx2Bdiug&s" },
  { name: "Microsoft", logo: "https://download.logo.wine/logo/Microsoft/Microsoft-Logo.wine.png" },
  { name: "Lenovo", logo: "https://radiant.in/wp-content/uploads/2024/06/Lenovo-Logo-1.png" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/800px-Cisco_logo_blue_2016.svg.png" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1200px-Dell_Logo.svg.png" },
];

export const HowItWorks = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
    >
      <h2 className="text-5xl font-extrabold mb-6 opacity-0 transition-opacity duration-700 ease-in-out delay-200" style={{ opacity: animate ? 1 : 0 }}>
        Recognized by the Best
      </h2>

      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Central Logo (FCS) */}
        <div className="absolute w-28 h-28 rounded-full bg-white p-2 flex items-center justify-center shadow-lg transition-all duration-1000 ease-out" style={{ opacity: animate ? 1 : 0, transform: animate ? "scale(1)" : "scale(0.5)" }}>
          <img src="https://thumbs.dreamstime.com/b/business-conference-meeting-people-formalwear-discussing-something-sitting-together-round-table-discussion-106328971.jpg" alt="FCS" className="w-full h-full object-contain" />
        </div>

        {/* Surrounding Logos */}
        {partners.map((partner, index) => {
          const angle = (index * 360) / partners.length;
          return (
            <div
              key={partner.name}
              className="absolute w-24 h-24 transition-transform ease-in-out duration-1000"
              style={{
                transform: animate
                  ? `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`
                  : "translate(0, 0)",
                opacity: animate ? 1 : 0,
                transitionDelay: `${index * 200}ms`, // Staggered effect
              }}
            >
              <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
