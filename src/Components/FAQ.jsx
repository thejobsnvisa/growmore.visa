import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [active, setActive] = useState("");

  const data = [
    {
      id: "Can Growmore Global Visa assist with all types of visa queries?",
      title: "Can Growmore Global Visa assist with all types of visa queries?",
      content: [
        "Yes, whether it’s a student, work, dependent, visitor, or migration visa, our team provides end-to-end support. From document preparation to submission and updates, we help you at every step and also offer RMA consultation when needed.",
      ],  
    },
      {
      id: "Can my spouse or children come with me as a dependent?",
      title: "Can my spouse or children come with me as a dependent?",
      content: [
        "Most countries allow students to bring their spouse and children on dependent visas. We help you in securing a dependent visa by guiding you on requirements, preparing your paperwork, and managing the dependent visa application from start to finish."],},
      {
      id: "For which country does Growmore Global Visa offer student visa services?",
      title: "For which country does Growmore Global Visa offer student visa services?",
      content: [
        "We provide student visa services for all the top study destinations worldwide, including Australia, Canada, Dubai, the UK, USA, New Zealand, Europe and more."
      ],
    },
      {
      id: "What are the chances of approval for a visitor visa?",
      title: "What are the chances of approval for a visitor visa?",
      content: [
        "Approval of a visitor visa depends on factors like your travel purpose, financial stability, ties to your home country, and accuracy of your documents. Growmore Global Visa guides you through each step to ensure your application is complete, compliant, and has the highest possible chance of approval."
      ],
    },
      {
      id: "What type of services does Growmore Global Visa offer for student visas?",
      title: "What type of services does Growmore Global Visa offer for student visas?",
      content: [
        "We offer comprehensive support for students who are planning to study abroad. This includes guidance on selecting the right country & course, and complete assistance with student visa applications. We also help with accommodation, health insurance, pre-departure briefings, and post-arrival support."
      ],
    },
      {
      id: "Does Growmore Global Visa handle refused visa cases?",
      title: "Does Growmore Global Visa handle refused visa cases?",
      content: [
        "Absolutely. We review refusal letters, identify the issues, and help you rebuild a stronger, fully compliant application for student, work, dependent, or migration visas."
      ],
    },
       {
      id: "What support is available for work visas?",
      title: "What support is available for work visas?",
      content: [
        "Our team helps professionals secure work visas, including employer sponsorship guidance, document preparation, application submission, and ongoing assistance until approval."
      ],
    },
      {
      id: "What documents are required for visa applications?",
      title: "What documents are required for visa applications?",
      content: [
        "Requirements differ by country and visa type, but usually include your passport, academic or professional records, financial proof, offer letters (if applicable), and other supporting documents. You can contact us for country-specific details."
      ],
    },
      {
      id: "How can I apply for a visa with Growmore Global Visa?",
      title: "How can I apply for a visa with Growmore Global Visa?",
      content: [
     "Simply contact us via +91 90818 99668 / +91 90818 99669, or email us at study@growmore.one, and our team will guide you through the complete visa application process for your chosen country and visa type."
    ],
    },
      {
      id: "When is an RMA consultation recommended for visa applications?",
      title: "When is an RMA consultation recommended for visa applications?",
      content: [
        "Yes, we provide detailed guidance and assistance for those looking to apply for Australia’s Permanent Residency (PR). Our consultants specialize in Australian skilled migration pathways and can help you navigate the complex process for PR approval. ",
      ],
    },
      
  ];

  return (
    <section className=" py-10 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[40px] px-10 py-16">
        <p className="text-[#8FD07C] text-sm font-bold tracking-widest mb-3">
           FAQS
          </p>
        {/* Heading */}
        <h2 className="text-lg md:text-4xl font-medium text-[#163c3d] mb-14">Frequently {" "}
         <span className="text-[#8fd07c] font-semibold">Asked Questions</span>{" "}
          That Support Your<br/><b>Migration Goals Journey</b>
        </h2>
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 ">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {data
              .filter((_, index) => index % 2 === 0)
              .map((item) => (
                <div key={item.id}>
                  <div
                    onClick={() =>
                      setActive(active === item.id ? null : item.id)
                    }
                    className={`flex items-center justify-between px-2 py-2 text-sm font-semibold p-2  rounded-2xl cursor-pointer transition border-gray-200 border-1
            ${
              active === item.id
                ? "bg-[#1f5257] text-white"
                : "bg-white text-[#163c3d]"
            }`}
                  >
                    <span className="text-base md:text-base font-semibold tracking-wide p-2 ">{item.title}</span>

                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full 
              ${active === item.id ? "bg-[#2d6f74]" : "bg-[#eff9fb]"}`}
                    >
                      {active === item.id ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </div>
                  </div>

                  {active === item.id && item.content && (
                    <div className="bg-white border border-[#1f5257] border-t-0 rounded-b-2xl px-8 py-6">
                      <ul className="space-y-3  text-[#163c3d] ">
                        {item.content.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {data
              .filter((_, index) => index % 2 !== 0)
              .map((item) => (
                <div key={item.id}>
                  <div
                    onClick={() =>
                      setActive(active === item.id ? null : item.id)
                    }
                    className={`flex items-center justify-between px-2 py-2 rounded-2xl cursor-pointer transition border-gray-200 border-1
            ${
              active === item.id
                ? "bg-[#1f5257] text-white"
                : "bg-white text-[#163c3d]"
            }`}
                  >
                    <span className="text-base md:text-base font-semibold tracking-wide p-2 ">{item.title}</span>

                    <div
                      className={`w-9 h-9 flex items-center justify-center rounded-full 
              ${active === item.id ? "bg-[#2d6f74]" : "bg-[#eff9fb]"}`}
                    >
                      {active === item.id ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </div>
                  </div>

                  {active === item.id && item.content && (
                    <div className="bg-white border border-[#1f5257] border-t-0 rounded-b-2xl px-10 py-8">
                      <ul className="space-y-3  text-[#163c3d]">
                        {item.content.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
