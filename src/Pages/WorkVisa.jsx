import { Link } from "react-router-dom";
import a1 from "../assets/a1.jpg";
const WorkVisa = () => {
  return (
    <div>
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            Work Visa
          </h1>
          <p className="text-white font-semibold">
            Home &gt; Visa Services &gt; Work Visa Requirements
          </p>
        </div>
      </section>
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-2 items-center">
          {/* LEFT IMAGE */}
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2">
              <img
                src={a1}
                alt="Family Immigration"
                className="w-[440px] h-[380px] rounded-xl rounded-tl-[95px] rounded-br-[95px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-xl md:text-4xl text-gray-900 leading-tight mb-6 mt-6">
              Professional Work Visa Services for Global Destinations
            </h2>

            <p className="text-[#727272] font-medium leading-relaxed max-w-xl text-justify">
              Securing a work visa is more than just a simple regulated process.
              Each country has its own employment laws, sponsorship rules,
              occupation requirements, and compliance standards that you must
              meet if you want to get a work visa for that country. At Growmore
              Global Visa, we offer expert work visa services for global
              destinations by ensuring that each visa application is strictly
              prepared based on the current immigration law and individual
              eligibility criteria.
            </p>

            <div className="flex items-center gap-5 mt-8">
              <Link to="/contact-us">
                <button className="bg-[#6dc7d1] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#333333] transition whitespace-nowrap">
                  Contact Us →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="gm-section-wrapper max-w-7xl mx-auto px-6 py-12 space-y-16 font-sans ">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col lg:flex-row overflow-hidden">
          <div className="lg:w-1/3 bg-[#1A4D53] p-10 md:p-14 flex flex-col justify-center text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5dc2d3] opacity-10 rounded-bl-[4rem] -mr-16 -mt-16"></div>

            <h2 className="text-xl md:text-3xl font-bold leading-tight text-white">
              General Requirements for Work Visa
            </h2>

            <p className="mt-6 text-teal-100 text-lg opacity-90">
              Ensuring your documentation aligns with global immigration
              standards.
            </p>
          </div>

          <div className="lg:w-2/3 p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12">
              {[
                {
                  icon: "fas fa-passport",
                  title: "Valid Passport",
                  desc: "Must have sufficient validity beyond the intended period of stay.",
                },
                {
                  icon: "fas fa-graduation-cap",
                  title: "Education",
                  desc: "Degrees and certifications relevant to your specific occupation.",
                },
                {
                  icon: "fas fa-briefcase",
                  title: "Job Offer",
                  desc: "Required sponsorship or confirmed offer from an authorized employer.",
                },
                {
                  icon: "fas fa-language",
                  title: "Language",
                  desc: "Proof of proficiency through IELTS, PTE, or equivalent tests.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5dc2d3]/10 flex items-center justify-center text-[#5dc2d3] text-xl">
                    <i className={item.icon}></i>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1A4D53] uppercase text-sm tracking-widest mb-2">
                      {item.title}
                    </h4>

                    <p className="text-base text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4 text-[#5dc2d3] font-bold italic text-base">
                <i className="fas fa-notes-medical text-xl"></i>

                <span>
                  Health and character clearances are mandatory per destination
                  standards.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-10 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 bg-gray-50/50">
            <h2 className="text-3xl font-bold text-[#1A4D53]">
              How We Proceed with Applications
            </h2>

            <div className="px-8 py-3 bg-[#5dc2d3] text-white text-base font-extrabold rounded-full tracking-wide">
              4-STEP SUCCESS PROCESS
            </div>
          </div>

          <div className="p-10 md:p-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
              {[
                {
                  step: 1,
                  title: "Assessment",
                  subtitle: "Profile Eligibility",
                  rotate: "rotate-3",
                },
                {
                  step: 2,
                  title: "Selection",
                  subtitle: "Pathway Matching",
                  rotate: "-rotate-3",
                },
                {
                  step: 3,
                  title: "Guidance",
                  subtitle: "Document Review",
                  rotate: "rotate-6",
                },
                {
                  step: 4,
                  title: "Submission",
                  subtitle: "Final Processing",
                  rotate: "",
                },
              ].map((item) => (
                <div key={item.step} className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div
                      className={`w-20 h-20 bg-[#1A4D53] rounded-2xl ${item.rotate} group-hover:rotate-0 transition-all duration-300 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:bg-[#5dc2d3]`}
                    >
                      {item.step}
                    </div>

                    <div className="absolute -bottom-2 -right-2 w-20 h-20 border-2 border-[#5dc2d3] rounded-2xl -z-10"></div>
                  </div>

                  <h4 className="text-xl font-bold text-[#1A4D53] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-[#1A4D53] rounded-3xl p-10 text-center shadow-xl">
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto italic">
                "We follow a structured and lawful approach to ensure every
                application is properly prepared, reducing the risk of refusal."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkVisa;
