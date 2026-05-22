import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-input-2/lib/style.css";
import PathwaySection from "../Components/PathwaySection";
import States from "../Components/States";
import { Helmet } from "react-helmet-async";
import wave2 from "../assets/wave2.jpg";
import krunal2 from "../assets/krunal2.png";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import r1 from "../assets/r1.svg";
import r2 from "../assets/r2.svg";
import r3 from "../assets/r3.svg";

const France = () => {
  const url = "https://www.growmoreglobalvisa.com/france";
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
            <title>France to France | Skilled Occupation List with GrowMore Immigration</title>
    
            <meta
              name="description"
              content="Growmore Immigration can assist you in migrating to France. Check the latest Skilled Occupation List, eligibility criteria, and expert migration support to start your journey today."
            />
    
            {/* ✅ Canonical for homepage */}
            <link rel="canonical" href={url} />
    
            {/* ✅ OG */}
            <meta
              property="og:title"
              content="France to France | Skilled Occupation List with GrowMore Immigration"
            />
            <meta
              property="og:description"
              content="Growmore Immigration can assist you in migrating to France. Check the latest Skilled Occupation List, eligibility criteria, and expert migration support to start your journey today."
            />
            <meta property="og:url" content={url} />
            <meta property="og:image" content="https://growmoreglobalvisa.com/logo.jpg" />
          </Helmet>
    <div>
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            How to Move to France Permanently?
          </h1>
          <p className="text-white font-semibold">
            Home &gt; France to France
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-10 items-center">
          {/* ================= LEFT IMAGE COLLAGE ================= */}
          <div className="grid grid-cols-2 gap-5 max-w-xl">
            {/* Big Family Image */}
            <div className="row-span-2">
              <img
                src={f1}
                alt="Family Immigration"
                className="w-full h-94 object-cover rounded-2xl"
              />
            </div>

            {/* City Image */}
            <div>
              <img
                src={f2}
                alt="France City"
                className="w-full h-32 object-cover rounded-2xl shadow-sm"
              />
            </div>

            {/* Consultant Image */}
            <div>
              <img
                src={f3}
                alt="Consultant"
                className="w-full h-57 object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>
          <div>
            {/* Small Heading */}
            <p className="text-[#8FD07C] font-[14px] font-semibold tracking-widest mb-3">
              Why France?       
            </p>

            {/* Main Heading */}
            <h2 className="text-xl md:text-4xl normal text-gray-900 leading-tight mb-6 mt-6">
              <span className="text-[#8FD07C] font-[40px] font-semibold">
                Benefits
              </span>{" "}
              of Moving to France
            </h2>

            <p className="text-[#727272] font-medium leading-relaxed  max-w-xl text-justify">
              France is a land of endless opportunities, known for its high
              standard of living, multicultural society, and breathtaking
              landscapes. If you’re wondering about the{" "}
              <b>best way to get PR in France</b>, exploring the country’s
              skilled migration pathways, family sponsorships, or student visas
              can open doors to permanent residency and a prosperous future.
              Discover why France could be the perfect destination for your
              next big move.
            </p>

            <div className="flex items-center gap-5 mt-8">
              <Link to="/points-calculator">
                <button className="bg-[#6dc7d1] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#333333] transition whitespace-nowrap">
                  Explore the option →
                </button>
              </Link>
            </div>
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
                France’s Migration <br />
                Highlights 2024–25
              </h2>
            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* CARD 1 */}
              <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
                <img
                  src={r1}
                  alt=""
                  className="w-10 h-10 shrink-0"
                />
                <div>
                  <h3 className="text-xl md:text-xl font-semibold text-white">
                    4,46,000
                  </h3>
                  <p className="text-sm md:text-base text-white mt-1">
                    With 4,46,000 net overseas migrations
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
                <img
                  src={r2}
                  alt=""
                  className="w-10 h-10 shrink-0"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    27.1 million
                  </h3>
                  <p className="text-sm md:text-base text-white mt-1">
                    France's population has reached 27.1 million
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition sm:col-span-2">
                <img
                  src={r3}
                  alt=""
                  className="w-10 h-10 shrink-0"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    185,000
                  </h3>
                  <p className="text-sm md:text-base text-white mt-1">
                    Supported by a migration program of 185,000 places for
                    skilled professionals and families.
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
                  <option>Australia</option>
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

export default France;

