import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-input-2/lib/style.css";
import ContactSection from "../Components/ContactSection";
import { Helmet } from "react-helmet-async";
import krunal2 from "../assets/krunal2.png";

const ContactUs = () => {
  const url = "https://www.growmoreglobalvisa.com/contact-us";
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
        phone: data.phone,
        visaType: data.visaType,
        message: data.message,
        captchaToken: token,
        source: "Website Form",
      };

      const BASE_URL = "https://growmoreglobalvisa.com";

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
          Contact Growmore Immigration | Offices in Melbourne
        </title>

        <meta
          name="description"
          content="Get in touch with Growmore Immigration for expert Australian visa advice. Visit our Melbourne or Ahmedabad offices, call us, or book your consultation online."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Migrate to Australia | Skilled Occupation List with GrowMore Immigration"
        />
        <meta
          property="og:description"
          content="Get in touch with Growmore Immigration for expert Australian visa advice. Visit our Melbourne or Ahmedabad offices, call us, or book your consultation online."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.growmoreglobalvisa.com/logo.jpg" />
      </Helmet>
      <div className="w-full">
        {/* Hero Section */}
        <section className="bg-[#28535B] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
              Contact Us
            </h1>
            <p className="text-white font-semibold">Home &gt; Contact Us</p>
          </div>
        </section>

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

        <ContactSection />
      </div>
    </>
  );
};

export default ContactUs;
