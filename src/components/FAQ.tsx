import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Collaboration",
    answer:
      "Despite modern cloud technology, your users operate in a familiar Microsoft Office environment and benefit from broad compatibility and low-threshold access.\n\n- Exchange Online\n- SharePoint Online\n- Defender for 365\n- Autopilot\n- Office Apps\n- Windows 365\n\nMicrosoft 365",
    value: "item-1",
  },
  {
    question: "Cloud Platform",
    answer:
      "Customized cloud platform designed to improve performance, lower IT costs, and provide secure and reliable access to your company data from any device, anytime, anywhere.\n\n- Amazon Web Services (AWS)\n- Microsoft Azure\n- Google Cloud Platform (GCP)\n- Oracle Cloud\n- IBM Cloud (Kyndryl)\n- Linode (Akamai)",
    value: "item-2",
  },
  
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32 space-y-16">
      {/* Contact Section with Image */}
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        {/* Left Side - Image */}
        <div className="h-full rounded-xl overflow-hidden">
          <img 
            src="https://nsfasteners.in/wp-content/uploads/2023/03/contact-us-Mod-3.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-900 p-8 shadow-lg rounded-xl text-white flex flex-col justify-center">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-100">
            Schedule a Free Consultation
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Company / Organization"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded"
            />
            <input
              type="email"
              placeholder="Company email"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded"
            />
            <select className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded">
              <option>Select Option</option>
              <option>IT Consultation</option>
              <option>Software Development</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="To better assist you, please describe how we can help..."
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded h-24"
            ></textarea>
            <button className="w-full bg-primary text-white py-3 rounded hover:bg-primary/80 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Bringing the best IT vendors to you.{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Our IT Challenges
          </span>
        </h2>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left font-medium text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent>
                {answer.split("\n").map((line, index) => (
                  <p key={index} className="mb-2 text-grey">{line}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h3 className="font-medium mt-6 text-center">
          Still have questions?{" "}
          <a
            rel="noreferrer noopener"
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </div>
    </section>
  );
};
