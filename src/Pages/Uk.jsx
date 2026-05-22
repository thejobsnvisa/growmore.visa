import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import PathwaySection from "../Components/PathwaySection";
import { Helmet } from "react-helmet-async";
import wave2 from "../assets/wave2.jpg";
import krunal2 from "../assets/krunal2.png";
import uk1 from "../assets/uk1.jpg";
import uk2 from "../assets/uk2.jpg";
import uk3 from "../assets/uk3.jpg";
import r1 from "../assets/r1.svg";
import r2 from "../assets/r2.svg";
import r3 from "../assets/r3.svg";

const States = () => {
  const [active, setActive] = useState("");

  const data = [
    {
      id: "london",
      title: "London",
      content: [
        "Popular Universities: University College London (UCL)",
        "King’s College London",
        "London School of Economics and Political Science",
        "Imperial College London",
        "Job Opportunities: Massive demand in finance, tech, media, & healthcare",
        "Strong part-time job market (hospitality, retail, admin)",
        "Key Industries: Finance & banking",
        "Technology",
        "Media & film",
        "Fashion",
        "Business & consulting",
        "City Highlights: A global hub with unmatched networking opportunities",
        "Access to top internships across multiple industries",
        "Diverse communities with endless events",
        "High cost of living compared to other UK cities",
      ],
    },
    {
      id: "birmingham",
      title: "Birmingham",
      content: [
        "Popular Universities: University of Birmingham",
        "Aston University",
        "Birmingham City University",
        "Job Opportunities: Plenty in engineering, business, logistics, & healthcare",
        "Consistent part-time opportunities",
        "Key Industries: Engineering",
        "Manufacturing",
        "Logistics",
        "Finance",
        "City Highlights: Centrally located (easy travel anywhere)",
        "Lower cost of living",
        "Good cultural diversity",
        "Not as many global corporate HQs",
      ],
    },
   {
  id: "edinburgh",
  title: "Edinburgh",
  content: [
    "Popular Universities:University of Edinburgh",
    "Edinburgh Napier University",
    "Heriot-Watt University",
    "Job Opportunities:Solid openings in tech, finance, education, and tourism",
    "Good part-time roles due to high tourist traffic",
    "Key Industries:Tech & AI",
    "Finance",
    "Education",
    "Tourism",
    "City Highlights:Safe, clean, historic environment",
    "More affordable than London",
    "Strong student culture",
    "Home to several major corporate headquarters",
  ],
},
{
  id: "glasgow",
  title: "Glasgow",
  content: [
    "Popular Universities:University of Glasgow",
    "University of Strathclyde",
    "Glasgow Caledonian University",
    "Job Opportunities:Strong opportunities in healthcare, engineering, finance, and IT",
    "Good availability of part-time jobs in retail, hospitality, and customer service",
    "Key Industries:Finance",
    "Engineering",
    "Healthcare",
    "Technology",
    "Creative Industries",
    "City Highlights:Affordable cost of living compared to London",
    "Large student population and vibrant nightlife",
    "Strong public transport and cultural scene",
    "Friendly and diverse community",
  ],
},
{
  id: "manchester",
  title: "Manchester",
  content: [
    "Popular Universities:University of Manchester",
    "Manchester Metropolitan University",
    "University of Salford",
    "Job Opportunities:Strong demand in tech, business, healthcare, media, and finance",
    "Excellent part-time job opportunities in retail, hospitality, and logistics",
    "Key Industries:Technology",
    "Media & Digital",
    "Finance",
    "Healthcare",
    "Business & Consulting",
    "City Highlights:Major student city with excellent career opportunities",
    "Home to MediaCityUK and growing tech startups",
    "More affordable than London",
    "Strong transport connectivity and vibrant social life",
  ],
},
{
  id: "cambridge",
  title: "Cambridge",
  content: [
    "Popular Universities:University of Cambridge",
    "Anglia Ruskin University (Cambridge Campus)",
    "Job Opportunities:Strong opportunities in research, technology, education, and healthcare",
    "Good part-time jobs in hospitality, retail, cafes, and university services",
    "Key Industries:Technology & AI",
    "Research & Biotechnology",
    "Education",
    "Healthcare",
    "Science & Innovation",
    "City Highlights:World-renowned academic environment",
    "Home to major research parks and tech startups",
    "Safe, student-friendly, and scenic city",
    "Strong networking and graduate career opportunities",
    "Higher cost of living compared to many UK cities",
  ],
}
  ];

  const toggleAccordion = (id) => {
    setActive((prev) => (prev === id ? "" : id));
  };

  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.id}>
        <button
          onClick={() => toggleAccordion(item.id)}
          className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl border transition
          ${
            active === item.id
              ? "bg-[#1f5257] text-white border-[#1f5257]"
              : "bg-white text-[#163c3d] border-gray-200"
          }`}
        >
          <span className="text-[16px] font-medium">{item.title}</span>

          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full
            ${active === item.id ? "bg-[#2d6f74]" : "bg-[#eff9fb]"}`}
          >
            {active === item.id ? <FaChevronDown /> : <FaChevronRight />}
          </div>
        </button>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            active === item.id ? "max-h-[600px] mt-2" : "max-h-0"
          }`}
        >
          <div className="bg-white border border-[#1f5257] rounded-b-2xl px-6 py-6">
            <ul className="space-y-2 list-disc pl-5 text-[#163c3d]">
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
      <div className="max-w-8xl mx-auto rounded-[40px] px-6 md:px-12 py-12 md:py-16">
        <div className="relative z-10 px-12">
          <h2 className="text-3xl md:text-[40px] font-medium text-[#163c3d] mb-12">
            <span className="text-[#7cc576] font-semibold md:text-[40px]">Top UK</span> Study Destinations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">{renderItems(leftColumn)}</div>
            <div className="space-y-6">{renderItems(rightColumn)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Uk = () => {
  const url = "https://www.growmoreglobalvisa.com/uk";
  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      alert("Please verify the captcha");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      const payload = {
        name: data.name,
        email: data.email,
        phone: phoneNumber,
        visaType: data.visaType,
        message: data.message,
        captchaToken: token,
        source: "Website Form",
      };

      const BASE_URL = "https://growmore-1.vercel.app";

      const response = await fetch(`${BASE_URL}/api/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!result.success) throw new Error("Submission failed");

      alert("Thank you! Our team will contact you shortly.");

      e.target.reset();
      setPhoneNumber("");
      recaptchaRef.current.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          UK to UK | Skilled Occupation List with GrowMore Immigration
        </title>

        <meta
          name="description"
          content="Growmore Immigration can assist you in migrating to the UK. Check the latest Skilled Occupation List, eligibility criteria, and expert migration support to start your journey today."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Uk to Uk | Skilled Occupation List with GrowMore Immigration"
        />
        <meta
          property="og:description"
          content="Growmore Immigration can assist you in migrating to Uk. Check the latest Skilled Occupation List, eligibility criteria, and expert migration support to start your journey today."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
      </Helmet>
      <div>
        <section className="bg-[#28535B] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-15">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
              Begin Your Study Abroad Journey in the UK
            </h1>
            <p className="text-white font-semibold">Home &gt; Uk</p>
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-10 items-center">
            {/* ================= LEFT IMAGE COLLAGE ================= */}
            <div className="grid grid-cols-2 gap-5 max-w-xl">
              {/* Big Family Image */}
              <div className="row-span-2">
                <img
                  src={uk1}
                  alt="Family Immigration"
                  className="w-full h-94 object-cover rounded-2xl"
                />
              </div>

              {/* City Image */}
              <div>
                <img
                  src={uk2}
                  alt="Uk City"
                  className="w-full h-32 object-cover rounded-2xl shadow-sm"
                />
              </div>

              {/* Consultant Image */}
              <div>
                <img
                  src={uk3}
                  alt="Consultant"
                  className="w-full h-57 object-cover rounded-2xl shadow-sm"
                />
              </div>
            </div>
            <div>
              {/* Small Heading */}
              <p className="text-[#8FD07C] font-[14px] font-semibold tracking-widest mb-3">
                Why Uk
              </p>

              {/* Main Heading */}
              <h2 className="text-xl md:text-4xl normal text-gray-900 leading-tight mb-6 mt-6">
                <span className="text-[#8FD07C] font-[40px] font-semibold">
                  Benefits
                </span>{" "}
                of Studying in the UK
              </h2>

              <p className="text-[#727272] font-medium leading-relaxed  max-w-xl text-justify">
                The UK remains one of the most in-demand study destinations for
                international students by offering globally recognised degrees
                and excellent job opportunities. Its universities are known for
                short-duration, career-focused courses that allow students to
                complete qualifications faster while also maintaining a high
                academic standard. Students can benefit from part-time work and
                also get access to post-study work opportunities that truly
                support long-term career growth.In short, the country provides
                students with an education that is both academically respected
                and professionally relevant.
              </p>
            </div>
          </div>
        </section>
        <section className="py-14 px-4 bg-white ">
          {/* Rounded Background Container */}
          <div className="max-w-8xl  mx-auto md:h-120 lg:h-100 bg-[#333333] rounded-[30px] md:rounded-[40px] px-6 md:px-10 py-12 relative overflow-hidden">
            {/* Background wave */}
            <img
              src={wave2}
              alt="wave background"
              className="absolute inset-0 w-full h-full  object-cover opacity-20 pointer-events-none"
            />

            {/* Content */}
            <div className="relative max-w-7xl  mx-auto mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
              {/* LEFT */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-white leading-tight">
                  UK– Key <br />
                  Highlights
                </h2>
              </div>

              {/* RIGHT */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* CARD 1 */}
                <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
                  <img src={r1} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-xl font-semibold text-white">
                      7,00,000+
                    </h3>
                    <p className="text-sm md:text-base text-white mt-1">
                      International students studying in the UK
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
                  <img src={r2} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      1,40,000+
                    </h3>
                    <p className="text-sm md:text-base text-white mt-1">
                      PSW visas approved yearly
                    </p>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition sm:col-span-2">
                  <img src={r3} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                     35,000+
                    </h3>
                    <p className="text-sm md:text-base text-white mt-1">
                     Jobs available across Dubai with strong demand in Technology & AI, Real Estate & Construction, and Healthcare
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PathwaySection />
        <States />
        {/* Contact Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src={krunal2}
                alt="MARA Registration"
                className="w-full max-w-sm h-[680px] object-cover rounded-2xl"
              />
            </div>

            {/* FORM */}
            <div className="w-full lg:w-1/2 flex flex-col">
              {/* Heading */}
              <div className="w-full mb-6 text-left">
                <p className="text-[#8fd07c] text-sm font-semibold">
                  Contact Information
                </p>
                <h2 className="text-[#8fd07c] text-3xl md:text-4xl font-semibold">
                  Get in Touch with Us
                </h2>
              </div>

              {/* Form Card */}
              <div className="bg-[#EFF9FB] rounded-3xl shadow-2xl w-full max-w-xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-white rounded-lg px-4 py-2 w-full border border-gray-300"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      required
                      className="bg-white rounded-lg px-4 py-2 w-full border border-gray-300"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="w-full sm:w-28 bg-white rounded-lg border border-gray-300">
                      <div>Phone Input</div>
                    </div>

                    <input
                      type="tel"
                      placeholder="Contact Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 bg-white rounded-lg px-4 py-2 border border-gray-300 w-full"
                      required
                    />
                  </div>

                  <select
                    name="visaType"
                    required
                    className="bg-white rounded-lg px-4 py-2 w-full border border-gray-300"
                  >
                    <option value="">Inquiry For</option>
                    <option>Study Visa</option>
                    <option>Work Visa</option>
                    <option>Migration Visa</option>
                  </select>
                  <select
                    name="Country"
                    required
                    className="bg-white rounded-lg px-4 py-2 w-full border border-gray-300"
                  >
                    <option value="">Country</option>
                    <option>Uk</option>
                    <option>Canada</option>
                    <option>Dubai</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>New Zealand</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Comments"
                    className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
                  ></textarea>

                  <div className="flex justify-center sm:justify-start">
                    <ReCAPTCHA sitekey={"test"} ref={recaptchaRef} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#6dc7d1] hover:border-[#6dc7d1] hover:border-2 px-8 py-2 text-white rounded-full hover:bg-black transition disabled:opacity-50 w-full sm:w-auto"
                  >
                    {loading ? "Submitting..." : "Submit →"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Uk;
