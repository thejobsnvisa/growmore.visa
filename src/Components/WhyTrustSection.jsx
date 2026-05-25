import {
  FaUserShield,
  FaCheckCircle,
} from "react-icons/fa";

const trustData = [
  {
    title: "Global Knowledge",
    description:
      "Support for Australia, Canada, UK, USA, NZ, and more.",
  },
  {
    title: "Complete Assistance",
    description:
      "From assessment to submission and follow-ups.",
  },
  {
    title: "Employer-Sponsored",
    description:
      "Ensuring all sponsorship rules are met perfectly.",
  },
  {
    title: "Error-Free Process",
    description:
      "Aligning with laws to avoid any application delays.",
  },
];

export default function WhyTrustSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[50px] bg-[#0f5b61] shadow-2xl px-8 py-14 lg:px-16">
          {/* Decorative circle */}
          <div className="absolute top-0 right-0 w-[280px] h-[100px] bg-[#2f7a81]/30 rounded-full translate-x-24 -translate-y-12" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Why Trust Growmore <br />
                Global Visa?
              </h2>

              {/* underline */}
              <div className="w-24 h-1 bg-[#6dd9f0] rounded-full mt-4 mb-10" />

              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-[28px] p-7 max-w-lg">
                <div className="flex items-center gap-4 mb-4">
                  <FaUserShield className="text-[#6dd9f0] text-4xl" />

                  <h3 className="text-[#6dd9f0] text-2xl font-bold">
                    Registered MARA Agent
                  </h3>
                </div>

                <p className="text-white/90 text-lg italic leading-8">
                  Guidance that meets professional and legal
                  immigration standards worldwide for a work visa.
                </p>
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-[28px] p-6"
                >
                  <FaCheckCircle className="text-[#6dd9f0] text-2xl mb-4" />

                  <h3 className="text-white text-3xl font-bold leading-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/75 text-base leading-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}