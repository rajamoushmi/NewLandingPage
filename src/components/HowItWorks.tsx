import { useEffect, useState, useRef } from "react";

const partners = [
  { name: "Intel", logo: "https://finolity.com/wp-content/uploads/2023/03/ND-ty6SkWNaiYy3I6E9J3lgFJJIeuHzzcdx74aHvaQ-9PFabsPmUhe_uKKqItjbtrcbw.png" },
  { name: "Microsoft", logo: "https://finolity.com/wp-content/uploads/2023/03/kisspng-microsoft-certified-partner-microsoft-partner-netw-partner-5b13fff40de7b5.358475291528037364057.png" },
  { name: "Lenovo", logo: "https://finolity.com/wp-content/uploads/2023/03/LenovoBP-POS-color.png" },
  { name: "Cisco", logo: "https://finolity.com/wp-content/uploads/2023/03/5b7d7d3778a94.png" },
  { name: "Dell", logo: "https://finolity.com/wp-content/uploads/2023/03/pngfind.com-registered-logo-png-2230159.png" },
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
          <img src="https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS-1.jpg" alt="FCS" className="w-full h-full object-contain" />
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
