import {
  FaGlobe,
  FaChartLine,
  FaComments,
  FaHandHoldingUsd,
  FaRoute,
  FaMapMarkedAlt,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaGlobe />,
    title: "Global Career Exposure",
    desc: "Work in recognized job markets and gain experience valued across countries and industries.",
  },
  {
    icon: <FaChartLine />,
    title: "Skill Enhancement",
    desc: "Develop advanced technical and managerial skills that align with global work standards.",
  },
  {
    icon: <FaComments />,
    title: "Adaptability",
    desc: "Build strong cross-cultural skills by working in diverse, international environments.",
  },
  {
    icon: <FaHandHoldingUsd />,
    title: "Higher Income",
    desc: "Access competitive salaries, structured benefits, and better work conditions worldwide.",
  },
  {
    icon: <FaRoute />,
    title: "Career Mobility",
    desc: "International experience improves long-term prospects across global markets.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Long-Term Pathways",
    desc: "Work visas may offer pathways to permanent residency in selected countries.",
  },
];

export default function BenefitsSection() {
  return (
    <section className=" py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0c5364]">
            Benefits of Working Abroad
          </h2>

          <div className="w-28 h-1 bg-[#7dd5e8] rounded-full mx-auto mt-3" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-8 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#eaf7fb] flex items-center justify-center text-[#80d8ea] text-2xl mb-6">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-[22px] font-bold text-[#0c5364] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-[17px] leading-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}