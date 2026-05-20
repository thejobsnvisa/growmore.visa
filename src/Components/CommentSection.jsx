import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function CommentSection() {
  const recaptchaRef = useRef(null);

  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Captcha Token
  const onCaptchaChange = (value) => {
    setToken(value);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please complete the captcha.");
      return;
    }

    const payload = {
      ...formData,
      captchaToken: token,
    };

    try {
      console.log("Submitting:", payload);

      // Example API Call
      /*
      const response = await fetch("YOUR_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      */

      alert("Comment posted successfully!");

      // Reset Form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });

      setToken("");

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    }
  };

  const pageUrl = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Check this out!");

  return (
    <div className="bg-white flex flex-col items-start px-4 py-10">
      <div className="w-full max-w-5xl border-t border-gray-300 pt-8">
        
        {/* Social Share */}
        <div className="flex justify-end gap-6 mb-6 text-gray-600 text-xl">
          
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href={`https://api.whatsapp.com/send?text=${pageUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          <a
            href={`https://t.me/share/url?url=${pageUrl}&text=${text}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <i className="fab fa-telegram-plane"></i>
          </a>

          <a
            href={`https://pinterest.com/pin/create/button/?url=${pageUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>

        {/* Comment Form */}
        <div className="w-full lg:w-2/3 bg-[#E6EBDD] rounded-2xl p-8 shadow-sm">
          
          <h2 className="text-2xl font-semibold text-[#1E3A3A] mb-4">
            Add a Comment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="px-4 py-2 rounded-full bg-white outline-none"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="px-4 py-2 rounded-full bg-white outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="px-4 py-2 rounded-full bg-white outline-none"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={4}
              required
              className="w-full px-4 py-3 bg-white rounded-xl outline-none"
            />

            {/* Google reCAPTCHA */}
            <div className="py-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="test"
                onChange={onCaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="bg-[#2E2E2E] text-white px-8 py-3 rounded-full hover:bg-black transition font-bold"
            >
              Post Comment
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}