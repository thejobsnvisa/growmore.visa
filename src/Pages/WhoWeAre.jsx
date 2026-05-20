import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import WhyChooseUs from "../Components/WhyChooseUs";
import Teams from "../Components/Teams";

const WhoWeAre = () => {
  const url = "https://growmoreglobalvisa.com/who-we-are"; // ✅ clean canonical

  return (
    <>
      <Helmet>
        {/* ✅ Title */}
        <title>Who We Are - Growmore Immigration</title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="GrowMore Immigration — your trusted partner for Australian visa and migration services. Learn about our mission, expert team, and commitment to client success."
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href={url} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Who We Are - Growmore Immigration" />
        <meta
          property="og:description"
          content="Growmore Immigration in Melbourne provides expert support for Australia PR, skilled migration, and visa services. Meet our team and mission."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.growmoreglobalvisa.com/assets/g1.png"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Who We Are - Growmore Immigration"
        />
        <meta
          name="twitter:description"
          content="Australia PR consultants in Melbourne helping with skilled migration and visa services. Learn about Growmore Immigration."
        />
        <meta
          name="twitter:image"
          content="https://www.growmoreglobalvisa.com/assets/g1.png"
        />
      </Helmet>
      <div className="w-full bg-white">
        {/* ================= HEADER BANNER ================= */}
        <section className="bg-[#28535B] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-15">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
              Who We Are
            </h1>
            <p className="text-white font-semibold">Home &gt; Who We Are</p>
          </div>
        </section>

        {/* ================= MAIN SECTION ================= */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE WITH BORDER FRAME */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Teal Border Frame */}
              <div className="absolute -bottom-6 -left-6 w-full h-full  rounded-3xl"></div>

              {/* Image */}
              <img
                src={g1}
                alt="Team Discussion"
                className="relative rounded-3xl w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-[#8FD07C] font-semibold tracking-widest text-sm mb-4">
                OUR VISION
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-10">
                Transforming Dreams{" "}
                <span className="text-[#8FD07C]">into Destinations</span>
              </h2>

              {/* POINT 1 */}
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-[#6dc7d1] text-white p-2 rounded-full">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Building International Futures
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    To provide trusted, lawful, and professionally managed
                    immigration solutions that allow students, professionals,
                    and families to study, work, travel, and settle abroad with
                    confidence and long-term certainty.
                  </p>
                </div>
              </div>

              {/* POINT 2 */}
              <div className="flex items-start gap-4 mb-10">
                <div className="bg-[#6dc7d1] text-white p-2 rounded-full">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Worldwide Credibility
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    To position Growmore Global Visa as a reputable,
                    trustworthy, and client-centred immigration consultancy that
                    consistently provides positive results for migration, work,
                    student, visitor, and dependent visas worldwide.
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <Link to="/contact-us">
                <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
                  Talk to Us →
                </button>
              </Link>
            </div>
          </div>
        </section>
        <WhyChooseUs />
        {/* ================= MAIN SECTION ================= */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE WITH BORDER FRAME */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Teal Border Frame */}
              <div className="absolute -bottom-6 -left-6 w-full h-full  rounded-3xl"></div>

              {/* Image */}
              <img
                src={g2}
                alt="Team Discussion"
                className="relative rounded-3xl w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-[#8FD07C] font-semibold tracking-widest text-sm mb-4">
                LEADERSHIP
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-10">
                Led by <span className="text-[#8FD07C]">Expertise</span>
                <br />
                and <span className="text-[#8FD07C]">Excellence</span>
              </h2>

              {/* POINT 1 */}
              <div className="flex items-start gap-4 mb-8">
                <p className="text-gray-600 leading-relaxed text-justify">
                  Growmore Global Visa is led by Krunal Nayak, our founder and
                  CEO, whose deep knowledge of international student, work,
                  dependent, visitor, and migration visas sets the standard for
                  our services. Our team works under his supervision to provide
                  accurate counselling and thorough visa application support
                  based on each client’s needs.
                </p>
              </div>

              {/* POINT 2 */}
              <div className="flex items-start gap-4 mb-10">
                <p className="text-gray-600 leading-relaxed text-justify">
                  His leadership keeps all of us up to date on global visa
                  regulations and country-specific requirements. Based on that
                  knowledge, we provide accurate advice and customized
                  strategies to individuals, families, and professionals who
                  want to confidently navigate international opportunities.
                </p>
              </div>

              {/* BUTTON */}
              <Link to="/contact-us">
                <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
                  Talk to Us →
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Teams />
      </div>
    </>
  );
};

export default WhoWeAre;
