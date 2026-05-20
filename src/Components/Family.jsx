import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import mara from "../assets/mara-card.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";
import family from "../assets/family.jpg";
import g1 from "../assets/g1.svg";
import g2 from "../assets/g2.svg";

const Famliy = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-10 items-center">
        {/* ================= LEFT IMAGE COLLAGE ================= */}
        <div className="grid grid-cols-2 gap-5 max-w-xl">
          {/* Big Family Image */}
          <div className="row-span-2">
            <img
              src={`${family}`}
              alt="Family Immigration"
              className="w-full h-117 object-cover rounded-2xl"
            />
          </div>

          {/* City Image */}
          <div>
            <img
              src={`${img3}`}
              alt="Australia City"
              className="w-full h-48 object-cover rounded-2xl shadow-sm"
            />
          </div>

          {/* Consultant Image */}
          <div>
            <img
              src={`${img4}`}
              alt="Consultant"
              className="w-full h-120 object-cover rounded-2xl shadow-sm"
            />
          </div>

          {/* MARA Card */}
          <div className="mt-[-220px]">
            <img
              src={`${mara}`}
              alt="MARA Registration"
              className="w-full h-full object-cover rounded-2xl shadow-sm "
            />
          </div>
        </div>
        <div className="text-center lg:text-left lg:mt-[-100px]">
          {/* Small Heading */}
          <p className="text-[#8FD07C] text-xl font-semibold tracking-widest mb-3">
            Why Growmore Global Visa?
          </p>

          {/* Main Heading */}
          <h2 className="text-xl md:text-4xl font-normal text-gray-900 leading-tight mb-6">
            <span className="text-[#8FD07C] font-semibold">
              Your Expert Guide
            </span>{" "}
            for All Global Immigration Solutions
            <br className="hidden md:block" />
          </h2>

          {/* Description */}
          <p className="text-[#727272] font-medium leading-relaxed mb-6 max-w-lg text-justify">
            Growmore Global Visa offers professional advice and complete
            assistance for every immigration goal, including study, work,
            travel, or settling overseas. From planning your move to securing
            your visa, our experienced team ensures a smooth, simple and
            trustworthy immigration journey across multiple countries.
          </p>
          {/* ================= FEATURE CARDS ================= */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Proven Integrity */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div>
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={g2}
                    alt="Proven Integrity Icon"
                    className="w-12 h-12"
                  />

                  <h3 className="text-xl font-bold text-gray-800 leading-snug">
                    Proven Integrity
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 text-gray-600 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#6dc7d1] font-bold">✓</span>
                  <span>Instant query resolution</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6dc7d1] font-bold">✓</span>
                  <span>Expert and reliable direction</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6dc7d1] font-bold">✓</span>
                  <span>Accurate documentation</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6dc7d1] font-bold">✓</span>
                  <span>Confidential Service</span>
                </li>
              </ul>
            </div>

            {/* Trusted Expertise */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 max-w-md">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={g1}
                  alt="Trusted Expertise Icon"
                  className="w-12 h-12"
                />
                <h3 className="text-xl text-justify font-bold text-gray-800 leading-snug">
                  Trusted Expertise
                </h3>
              </div>

              <ul className="space-y-3 text-gray-600 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#6dc7d1] font-semibold">✓</span>
                  <span>QIEC , ISANA and ICEF Certified</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6dc7d1] font-semibold">✓</span>
                  <span>British Council Certified</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6dc7d1] font-semibold">✓</span>
                  <span>Registered Migration Agent</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6dc7d1] font-semibold">✓</span>
                  <span>Authorized Visa Consultants</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-9">
            <Link to="/contact-us">
              <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-lg text-base">
               Contact Us →
              </button>
            </Link>
            <div className="bg-[#6dc7d1] hover:bg-black p-3 rounded-full  cursor-pointer">
              <FaPhoneAlt className="h-8 w-8 text-white" />
            </div>
            <div>
              Need Help?
              <br />
              <span className="text-black font-bold text-lg">
              (+91) 9081899668 / (+91) 9081899669
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Famliy;
