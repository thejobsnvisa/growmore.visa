import wave2 from "../assets/wave2.jpg";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4">
      {/* Rounded Background Container */}
      <div className="max-w-8xl mx-auto bg-[#EFF9FB] rounded-[40px] md:rounded-[60px] px-6 md:px-16 py-16 md:py-20 relative overflow-hidden">
        {/* ===== Top Content ===== */}
        {/* Background Image */}
        <img
          src={wave2}
          alt="wave background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        {/* Content Wrapper */}
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-14">
            {/* LEFT */}
            <div>
              <p className="text-[#7CC576] text-sm font-semibold tracking-widest mb-3">
                WHAT SETS US APART
              </p>

              <h2 className="text-xl md:text-4xl font-semibold text-[#1D2B2E] leading-tight">
                Expert Guidance for
                <br />
                <span className="text-[#7CC576]">Your</span> Overseas{" "}
                <span className="text-[#7CC576]">Plans</span>
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-gray-600 leading-relaxed text-justify">
                We offer expert advice, transparent visa processes, and
                personalised solutions to help students, professionals, and
                families pursue international opportunities. Our ethical
                approach,support and results driven methodology establish us as
                a trusted consultant for clients seeking study, work, travel,
                dependent, or migration visas in multiple countries around the
                world.
              </p>
            </div>
          </div>

          {/* ===== Cards ===== */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
              <img
                src={t1}
                alt=""
                className="w-24 h-24  rounded-xl flex flex-col items-center justify-center text-white shrink-0"
              />

              <div>
                <h3 className="text-lg font-semibold text-[#1D2B2E]">
                  Streamlined Process
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Effortless solutions for all visa needs.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
              <img
                src={t2}
                alt=""
                className="w-24 h-24 bg-[#333333] rounded-xl flex flex-col items-center justify-center text-white shrink-0"
              />

              <div>
                <h3 className="text-lg font-semibold text-[#1D2B2E]">
                 Professional Support
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                 Trusted advice from migration specialists.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
              <img
                src={t3}
                alt=""
                className="w-24 h-24 bg-[#333333] rounded-xl flex flex-col items-center justify-center text-white shrink-0"
              />

              <div>
                <h3 className="text-lg font-semibold text-[#1D2B2E]">
                 Customer-Centric
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                 Customized solutions for every client .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
