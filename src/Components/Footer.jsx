import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

import img1 from "../assets/img1.svg";
import footerBg from "../assets/footer.jpg";
import logo1 from "../assets/logo1.png";
import maraCard from "../assets/mara-card.png";
import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#154C54] text-white overflow-hidden relative">
      {/* BACKGROUND OVERLAY */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "luminosity",
          opacity: 0.08,
        }}
      ></div>

      {/* CTA SECTION */}
      <div className="border-b border-white/20 py-8 px-4 sm:px-6 relative z-10">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-4 text-center md:text-left">
            <div className="bg-[#6dc7d1] rounded-full p-2">
              <img
                src={img1}
                alt="logo"
                className="h-8 lg:h-9 xl:h-10 w-auto"
              />
            </div>

            <h2 className="text-[22px] sm:text-[25px] text-left font-semibold leading-snug">
              {" "}
              Looking for Professional Visa Support?{" "}
            </h2>
          </div>

          <div className="flex sm:flex-row items-start gap-4 mt-4 md:mt-0">
            {[
              { Icon: FaEnvelope, href: "mailto:india@growmore.one" },
              { Icon: FaWhatsapp, href: "https://wa.me/+61434202021" },
              { Icon: FaPhoneAlt, href: "tel:(03)87643334" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="bg-[#6dc7d1] p-3 sm:p-4 rounded-full text-white hover:bg-white hover:text-[#28535B] transition shadow-sm cursor-pointer flex items-center justify-center"
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-[1350px] lg:w-[1400px] mx-auto py-12 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 relative z-10">
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <img
            src={logo1}
            alt="Growmore"
            className="h-10 sm:h-12 mb-4 sm:mb-6"
          />

          <p className="text-white text-[15px] font-semibold leading-relaxed mb-4 sm:mb-6 w-70 text-justify">
            We guide clients globally through student, work, visitor, dependent,
            and migration visa applications with trusted expertise.
          </p>

          <div className="flex gap-3 mb-4 sm:mb-6 text-lg">
            {[
              {
                icon: FaFacebookF,
                link: "https://www.facebook.com/growmoreglobalvisa/",
              },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/growmoreglobalvisa/",
              },
              {
                icon: FaLinkedinIn,
                link: "https://www.linkedin.com/company/growmore-global-visa/",
              },
              {
                icon: FaPinterest,
                link: "https://www.pinterest.com/growmoreglobalvisa/",
              },
              {
                icon: FaYoutube,
                link: "https://www.youtube.com/@growmoreglobalvisa",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="hover:text-gray-400 cursor-pointer transition" />
                </a>
              );
            })}
          </div>

          <Link to="/brochures" className="w-full sm:w-auto">
            <button className="bg-[#6dc7d1] px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium hover:bg-black transition w-full sm:w-auto">
              Download Brochures →
            </button>
          </Link>
        </div>

        {/* Services */}
        <div className="md:ml-12 lg:ml-22">
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-4 sm:mb-6">
            Services
          </h3>

          <ul className="space-y-2 sm:space-y-3 text-[15px] text-white font-semibold">
            <li>
              <Link to="/study-visa" className="hover:text-gray-400 transition">
                <span className="text-white font-semibold">✓</span> study visa
              </Link>
            </li>

            <li>
              <Link to="/work-visa" className="hover:text-gray-400 transition">
                <span className="text-white font-semibold">✓</span> work visa
              </Link>
            </li>
            <li>
              <Link
                to="/migration-visa"
                className="hover:text-gray-400 transition"
              >
                <span className="text-white font-semibold">✓</span>migration
                visa
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-4 sm:mb-6">
            Quick Links
          </h3>

          <ul className="space-y-2 sm:space-y-3 text-[15px] text-white font-semibold">
            <li>
              <Link
                to="/english-test"
                className="hover:text-gray-400 transition"
              >
                <span className="text-white font-semibold">›</span> English Test
              </Link>
            </li>

            <li>
              <Link to="/blogs" className="hover:text-gray-400 transition">
                <span className="text-white font-semibold">›</span> Latest Updates
              </Link>
            </li>

            <li>
              <Link to="/contact-us" className="hover:text-gray-400 transition">
                <span className="text-white font-semibold">›</span> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-4 sm:mb-6">
            Useful Links
          </h3>

          <ul className="space-y-2 sm:space-y-3 text-[15px] text-white font-semibold">
            <li>
              <Link
                to="/terms-services"
                className="hover:text-gray-400 transition"
              >
                Terms & Services
              </Link>
            </li>

            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-gray-400 transition"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <a
                href="https://www.legislation.gov.au/F2021L01856/latest/text"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                Code of Conduct
              </a>
            </li>

            <li>
              <Link
                to="/cancellation-and-refund-policy"
                className="hover:text-gray-400"
              >
                Cancellation And <br /> Refund Policy
              </Link>
            </li>

            <li>
              <Link
                to="/artificial-intelligence-use-policy"
                className="hover:text-gray-400"
              >
                Artificial Intelligence <br /> Use Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* MARA Card */}
        <div className="flex justify-start lg:justify-end mt-6 md:mt-0">
          <img
            src={maraCard}
            alt="MARA Registration"
            className="rounded-xl max-h-48 sm:max-h-52 md:max-h-60 object-contain"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 py-6 px-4 relative z-10">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[15px] text-white gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Growmore Immigration | All Rights
            Reserved
          </p>

          <div className="flex items-center gap-2">
            <img src={logo2} alt="WebMotion" className="h-5 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
