import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import test from "../assets/test.jpg";
import wave from "../assets/wave2.jpg";

const data = [
  {
    text: `We are very happy that my student dependent 500 visa was approved with Growmore Global Visa. Rubina Hajimohmed was very helpful and guided us well through the process. She made sure all documents were correct and sent on time. The communication was great with regular updates. The whole process was easy and stress-free. We recommend Growmore Global Visa to anyone needing visa help.`,
    title: "Akash Upadhya",
    subtitle: "SC500 - Australia student dependent visa",
    image: `${test}`,
  },
  {
    text: `We are delighted that my husband’s student dependent visa was successfully granted with the help of Growmore Global Visa. Throughout the entire process, the team demonstrated professionalism, expertise, and unwavering support. TThanks to their expertise, the process was smooth and stress-free. We highly recommend Growmore Global Visa to anyone seeking reliable and efficient visa assistance.`,
    title: "Shristi Timilsena",
    subtitle: "SC500 - Australia student visa",
    image: `${test}`,
  },
  {
    text: `Thank you to Growmore Global Visa for their prompt, genuine, and professional service. From the initial consultation and assessment, I felt confident I had the right guidance for my Australia journey. The team’s well-organised approach and strong preparation made the process smooth, and my student visa was approved incredibly quickly. I truly appreciate their dedication, transparency, and continuous support throughout.`,
    title: "Mansi Pandya",
    subtitle: "SC500 - Australia student visa",
    image: `${test}`,
  },
  {
    text: `I am extremely grateful to the entire team at Growmore Global Visa for their exceptional support and guidance throughout my visa process. A special thanks to Rubina Ma’am for her outstanding assistance, patience, and continuous support at every stage of the process. Ami Ma’am and Hiya Ma’am were also very professional, responsive, and helpful.The team’s honest advice, clear communication, and dedication made the entire visa process smooth and stress-free. Their professionalism and commitment to clients truly stand out. I highly recommend Growmore Global Visa to anyone looking for trustworthy and reliable visa consultation services.`,
    title: "Prince Modi",
    subtitle: "SC500 - Australia student dependent visa",
    image: `${test}`,
  },

  {
    text: `I have had an wonderful experience with Growmore Global Visa. Especially Mr. Dev and team they were very helpful and informative throughout the process. And also kept me updated throughout the process and guided through each and every step, and I was fully aware where my process was heading and what will be next step. All in all it was a very smooth and easy process. Will definitely recommend Growmore Global visa to others as well who are looking for smooth and hazzel-free process.Once again Thank you Growmore Global visa and team.`,
    title: "Chirag Modi",
    subtitle: "Dubai student visa",
    image: `${test}`,
  },
  {
    text: `Amazing services. Excellent solutions with keeping customer’s interest at first before anything. Helping customer with all they can and understanding all the priorities and situations.`,
    title: "Dhrumin Patel",
    subtitle: "SC500 - Australia student visa",
    image: `${test}`,
  },
  {
    text: `Very reliable migration agent. Very supportive staff.`,
    title: "Urvish Pathak",
    subtitle: "SC500 - Australia student visa",
    image: `${test}`,
  },
  {
    text: `Grow More team is highly professional and very helpful. Special thanks to Kunal who really gave us the correct guidance and helped us to get the parents visa for our parents. I would highly recommend Kunal and his team for immigration services and to get your visa granted easily and without any hassle.`,
    title: "Student Visa",
    subtitle: "SC600 VisitorVisa/SC500 - Student Visa",
    image: `${test}`,
  },
  {
    text: `I am extremely thankful to Growmore Global Visa for helping me secure my Australia student visa smoothly, despite my case being slightly complex. The team provided clear guidance at every step, especially with documentation and SOP preparation. A special thanks to the Growmore Global Visa team for their continuous support and guidance throughout the process, even after admission. `,
    title: "Hiya Bhatt",
    subtitle: "SC500 - Student Visa",
    image: `${test}`,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const item = data[index];

  return (
    <section className="relative py-20 px-4 bg-[#eff9fb] overflow-hidden rounded-[60px] m-3">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${wave})`,
        }}
      ></div>
      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#8fd07c] text-sm font-bold tracking-widest mb-4">
            CLIENT TESTIMONIALS
          </p>

          <h2 className="text-xl md:text-4xl">
            Escape to <span className="text-[#8fd07c]">Extraordinary</span>
            <br />
            Where Every <span className="font-bold">Journey</span> Finds Its
            Voice
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CARD */}
          <div className="bg-white rounded-3xl p-10 shadow-lg relative min-h-[350px]">
            <p className="text-[#164750] text-lg leading-relaxed whitespace-pre-line mb-8">
              {item.text}
            </p>

            <div>
              <h4 className="text-xl font-semibold text-[#1F4E55]">
                {item.title}
              </h4>
              <p className="text-gray-500">{item.subtitle}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 right-8 flex gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#eff9fb] flex items-center justify-center transition"
              >
                <ChevronLeft size={20} className="text-[#164750] font-bold" />
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#eff9fb] flex items-center justify-center  transition"
              >
                <ChevronRight size={20} className="text-[#164750] font-bold" />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt="testimonial"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
