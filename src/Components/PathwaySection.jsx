import  { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import wave2 from "../assets/wave2.jpg";
const PathwaySection = () => {
  const [active, setActive] = useState("");

  const data = [
    {
      id: "IT",
      title: "Information Technology & Computer Science",
      content: [
      "Software Engineering",
      "Cyber Security",
      "Data Science & Analytics",
      "Cloud Computing",
      "Artificial Intelligence & Machine Learning",
      "Network & System Administration",
      "Web Development",
      "Information Systems",
      "ICT Business Analyst",
      "UI/UX Design" 
         ],
    },
    {
      id: "engineering",
      title: "Engineering",
      content: [
        "Civil Engineering",
        "Structural Engineering",
        "Construction Management",
        "Transport & Highway Engineering",
        "Mechanical Engineering",
        "HVAC Engineering",
        "Automotive Engineering",
        "Robotics & Mechatronics",
        "Manufacturing Engineering",
        "Electrical Engineering",
        "Power Engineering",
        "Electronics Engineering",
        "Telecommunications Engineering",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare & Nursing",
      content: [
        "Nursing (RN, EN)",
        "Aged Care Nursing",
        "Mental Health Nursing",
        "Midwifery",
        "Medical Laboratory Science",
        "Pharmacy",
        "Physiotherapy",
        "Occupational Therapy",
        "Radiography & Medical Imaging",
        "Public Health",
      ],
    },
    {
      id: "education",
      title: "Education & Teaching",
      content: [
        "Early Childhood Education",
        "Primary School Teaching",
        "Secondary School Teaching",
        "Special Education",
        "TESOL / English Teaching",
        "Vocational & Training Teacher"
      ],
    },
    {
      id: "business",
      title: "Business & Management",
      content: [
        "Business Administration (MBA)",
        "Project Management",
        "Human Resource Management",
        "Accounting & Finance",
        "Marketing & Communication",
        "Supply Chain & Logistics",
        "Hospitality & Tourism Management"
      ],
    },
    {
      id: "other",
      title: "Other",
      content: [
      "Arts & Design",
      "Trades & Vocational Studies",
      "Agriculture & Environmental Science",
      "Science",
      "Media & Communication"
      ],
    },
  ];

  const toggleAccordion = (id) => {
    setActive((prev) => (prev === id ? "" : id));
  };

  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.id} className="rounded-2xl overflow-hidden">
        
        {/* Accordion Header */}
        <button
          onClick={() => toggleAccordion(item.id)}
          className={`flex items-center justify-between w-full px-5 py-3 transition
          ${
            active === item.id
              ? "bg-[#1f5257] text-white"
              : "bg-white text-[#163c3d] hover:bg-[#1f5257] hover:text-white"
          }`}
        >
          <span className="text-base md:text-[16px] font-medium">
            {item.title}
          </span>

          <div
            className={`w-9 h-9 flex items-center justify-center rounded-full transition
            ${
              active === item.id
                ? "bg-[#2d6f74] text-white"
                : "bg-[#eff9fb] text-[#163c3d]"
            }`}
          >
            {active === item.id ? <FaChevronDown /> : <FaChevronRight />}
          </div>
        </button>

        {/* Accordion Content */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            active === item.id
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border border-[#1f5257] border-t p-5">
            <ul className="space-y-2 list-disc pl-5 text-[#163c3d] text-sm md:text-[16px]">
              {item.content.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ));

  const leftColumn = data.filter((_, i) => i % 2 === 0);
  const rightColumn = data.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-8xl mx-auto bg-[#eff9fb] rounded-[40px] px-6 md:px-12 py-12 md:py-16 relative overflow-hidden">

        {/* Background Pattern */}
        <img
          src={wave2}
          alt="wave background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        <div className="relative z-10 px-12">

          {/* Heading */}
          <h2 className="text-3xl md:text-[40px] font-medium text-[#163c3d] mb-10 md:mb-14">
            Choose Your{" "}
            <span className="text-[#7cc576] font-semibold md:text-[40px]">
              Pathway
            </span>
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {renderItems(leftColumn)}
            </div>

            <div className="space-y-4">
              {renderItems(rightColumn)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PathwaySection;