import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[1500px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" onClick={closeAll} className="cursor-pointer">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-8 text-[17px] font-medium text-[#1F4E55]">
            
            {/* Home */}
            <li>
              <Link
                to="/"
                onClick={closeAll}
                className="hover:text-[#8FD07D] transition cursor-pointer"
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("about")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => toggleMenu("about")}
                className="flex items-center gap-1 hover:text-[#8FD07D] transition cursor-pointer"
              >
                About Us
                <ChevronDown
                  size={16}
                  className={`transition duration-200 ${
                    openMenu === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-10 w-52 bg-white rounded-xl shadow-xl py-2 transition-all duration-200 ${
                  openMenu === "about"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/who-we-are"
                  onClick={closeAll}
                  className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Who We Are
                </Link>

                <Link
                  to="/who-we-are#teams"
                  onClick={closeAll}
                  className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Teams
                </Link>
              </div>
            </li>

            {/* Services */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => toggleMenu("services")}
                className="flex items-center gap-1 hover:text-[#8FD07D] transition cursor-pointer"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition duration-200 ${
                    openMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-10 w-64 bg-white rounded-xl shadow-xl py-2 transition-all duration-200 ${
                  openMenu === "services"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {[
                  { to: "/study-visa", label: "Study Visa" },
                  { to: "/work-visa", label: "Work Visa" },
                  { to: "/migration-visa", label: "Migration Visa" },
                  { to: "/visitor-visa", label: "Visitor Visa" },
                  { to: "/dependent-visa", label: "Dependent Visa" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    onClick={closeAll}
                    className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
            
              <li
              className="relative"
              onMouseEnter={() => setOpenMenu("countries")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => toggleMenu("countries")}
                className="flex items-center gap-1 hover:text-[#8FD07D] transition cursor-pointer"
              >
                Countries
                <ChevronDown
                  size={16}
                  className={`transition duration-200 ${
                    openMenu === "countries" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-10 w-64 bg-white rounded-xl shadow-xl py-2 transition-all duration-200 ${
                  openMenu === "countries"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {[
                  { to: "/australia", label: "Australia" },
                  { to: "/uk", label: "United Kingdom" },
                  { to: "/uae", label: "Dubai" },
                  { to: "/usa", label: "United States" },
                  { to: "/canada", label: "Canada" },
                  { to: "/new-zealand", label: "New Zealand" },
                  { to: "/germany", label: "Germany" },
                  { to: "/france", label: "France" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    onClick={closeAll}
                    className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* English Test */}
            <li>
              <Link
                to="/english-test"
                onClick={closeAll}
                className="hover:text-[#8FD07D] transition cursor-pointer"
              >
                English Test
              </Link>
            </li>

            {/* Migration Assessment */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("migration")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => toggleMenu("migration")}
                className="flex items-center gap-1 hover:text-[#8FD07D] transition cursor-pointer"
              >
                Migration Assessment
                <ChevronDown
                  size={16}
                  className={`transition duration-200 ${
                    openMenu === "migration" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-10 w-64 bg-white rounded-xl shadow-xl py-2 transition-all duration-200 ${
                  openMenu === "migration"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/Australia-points-calculator"
                  onClick={closeAll}
                  className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Australia Points Calculator
                </Link>

                <Link
                  to="/Canada-points-calculator"
                  onClick={closeAll}
                  className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Canada Points Calculator
                </Link>

                <Link
                  to="/Canada-crs-calculator"
                  onClick={closeAll}
                  className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Canada CRS Calculator
                </Link>
              </div>
            </li>

            {/* Updates */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("updates")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => toggleMenu("updates")}
                className="flex items-center gap-1 hover:text-[#8FD07D] transition cursor-pointer"
              >
                Latest Updates
                <ChevronDown
                  size={16}
                  className={`transition duration-200 ${
                    openMenu === "updates" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-10 w-52 bg-white rounded-xl shadow-xl py-2 transition-all duration-200 ${
                  openMenu === "updates"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/videos"
                  onClick={closeAll}
                  className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Videos
                </Link>

                <Link
                  to="/news"
                  onClick={closeAll}
                  className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  News
                </Link>

                <Link
                  to="/blogs"
                  onClick={closeAll}
                  className="block px-4 py-3 hover:bg-gray-100 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Blogs
                </Link>
              </div>
            </li>
          </ul>

          {/* Desktop Button */}
          <Link
            to="/contact-us"
            className="hidden xl:block bg-black text-white px-7 py-3 rounded-full font-semibold hover:bg-[#6dc7d1] transition cursor-pointer"
          >
            Contact Us →
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t px-5 py-5 text-[#1F4E55] font-medium shadow-lg h-[90vh] overflow-y-auto space-y-2">

          {/* Home */}
          <Link
            to="/"
            onClick={closeAll}
            className="block py-3 hover:text-[#8FD07D] transition cursor-pointer"
          >
            Home
          </Link>

          {/* About */}
          <div>
            <button
              onClick={() => toggleMenu("mobile-about")}
              className="w-full flex items-center justify-between py-3 hover:text-[#8FD07D] transition cursor-pointer"
            >
              About Us

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openMenu === "mobile-about" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "mobile-about" && (
              <div className="pl-4 pb-3 space-y-2">
                <Link
                  to="/who-we-are"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Who We Are
                </Link>

                <Link
                  to="/who-we-are#teams"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Teams
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <button
              onClick={() => toggleMenu("mobile-services")}
              className="w-full flex items-center justify-between py-3 hover:text-[#8FD07D] transition cursor-pointer"
            >
              Services

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openMenu === "mobile-services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "mobile-services" && (
              <div className="pl-4 pb-3 space-y-2">
                {[
                  { to: "/study-visa", label: "Study Visa" },
                  { to: "/work-visa", label: "Work Visa" },
                  { to: "/migration-visa", label: "Migration Visa" },
                  { to: "/visitor-visa", label: "Visitor Visa" },
                  { to: "/dependent-visa", label: "Dependent Visa" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    onClick={closeAll}
                    className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
           <div>
            <button
              onClick={() => toggleMenu("mobile-countries")}
              className="w-full flex items-center justify-between py-3 hover:text-[#8FD07D] transition cursor-pointer"
            >
              Countries

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openMenu === "mobile-countries" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "mobile-countries" && (
              <div className="pl-4 pb-3 space-y-2">
                {[
                  { to: "/australia", label: "Australia" },
                  { to: "/uk", label: "United Kingdom" },
                  { to: "/uae", label: "Dubai" },
                  { to: "/usa", label: "United States" },
                  { to: "/canada", label: "Canada" },
                  { to: "/new-zealand", label: "New Zealand" },
                  { to: "/germany", label: "Germany" },
                  { to: "/france", label: "France" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    onClick={closeAll}
                    className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* English Test */}
          <Link
            to="/english-test"
            onClick={closeAll}
            className="block py-3 hover:text-[#8FD07D] transition cursor-pointer"
          >
            English Test
          </Link>

          {/* Migration Assessment */}
          <div>
            <button
              onClick={() => toggleMenu("mobile-migration")}
              className="w-full flex items-center justify-between py-3 hover:text-[#8FD07D] transition cursor-pointer"
            >
              Migration Assessment

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openMenu === "mobile-migration" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "mobile-migration" && (
              <div className="pl-4 pb-3 space-y-2">
                <Link
                  to="/Australia-points-calculator"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Australia Points Calculator
                </Link>

                <Link
                  to="/Canada-points-calculator"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Canada Points Calculator
                </Link>

                <Link
                  to="/Canada-crs-calculator"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Canada CRS Calculator
                </Link>
              </div>
            )}
          </div>

          {/* Latest Updates */}
          <div>
            <button
              onClick={() => toggleMenu("mobile-updates")}
              className="w-full flex items-center justify-between py-3 hover:text-[#8FD07D] transition cursor-pointer"
            >
              Latest Updates

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openMenu === "mobile-updates" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "mobile-updates" && (
              <div className="pl-4 pb-3 space-y-2">
                <Link
                  to="/videos"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Videos
                </Link>

                <Link
                  to="/news"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  News
                </Link>

                <Link
                  to="/blogs"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#8FD07D] transition cursor-pointer"
                >
                  Blogs
                </Link>
              </div>
            )}
          </div>

          {/* Contact Button */}
          <Link
            to="/contact-us"
            onClick={closeAll}
            className="block text-center bg-black text-white py-3 rounded-full mt-5 hover:bg-[#6dc7d1] transition cursor-pointer"
          >
            Contact Us →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;