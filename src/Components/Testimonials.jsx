import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import test from "../assets/test.jpg";
import wave from "../assets/wave2.jpg";

const data = [
  {
    text: `I want to say thank you to you, which has been really helpful in managing my application from the beginning of doing the skill assessment until my visa is granted. You have been actively in communication with the DHA or VETASSESS to ensure that my application was done in a timely manner. I also kept updated throughout the entire process. Highly recommended`,
    title: "Jovita Indahsari",
    subtitle: "SC190 - PR Visa",
    image: `${test}`,
  },
   {
    text: `We are delighted that my husband’s student dependent visa was successfully granted with the help of Growmore Global Visa. Throughout the entire process, the team demonstrated professionalism, expertise, and unwavering support. TThanks to their expertise, the process was smooth and stress-free. We highly recommend Growmore Global Visa to anyone seeking reliable and efficient visa assistance.`,
    title: "Shristi Timilsena",
    subtitle: "SC500 - Student Visa",
    image: `${test}`,
  },  
   {
    text: `Thank you to Growmore Global Visa for their prompt, genuine, and professional service. From the initial consultation and assessment, I felt confident I had the right guidance for my Australia journey. The team’s well-organised approach and strong preparation made the process smooth, and my student visa was approved incredibly quickly. I truly appreciate their dedication, transparency, and continuous support throughout.`,
    title: "Mansi Pandya",
    subtitle:"SC500 - Student Visa",
    image: `${test}`,
  },
  {
    text: `First of all Mr KrunalBhai has vast knowledge of immigration process he provided me the right guidance according to my profile and always helps me to choose right path, and the best thing is he personally do all the process and take care of their clients. All over it was a best experience i would surely recommend to anyone for any kind of visa.`,
    title: "Rahi",
    subtitle: "SC491 - PR Visa",
    image: `${test}`,
  },

  {
    text: `Kunal and the entire team at Growmore were very efficient and professional in handling our file. They had excellent knowledge regarding the immigration matters and were always there to answer our questions whenever we had. Exceptional customer service and communication from the entire team. Thank you.`,
    title: "Kiran H Jani",
    subtitle: "SC - 804 Parents Visa",
    image: `${test}`,
  },
  {
    text: `Absolutely amazing service and coordination with the client. Within in a month I have got my approval. Staff is very helpful and cooperative all the time. Thank you so much for your support and help.`,
    title: "Clemy Robert bhai Christy",
    subtitle: "SC485 - Temporary Graduate visa",
    image: `${test}`,
  },
  {
    text: `Grow More team is highly professional and very helpful. Special thanks to Kunal who really gave us the correct guidance and helped us to get the parents visa for our parents. I would highly recommend Kunal and his team for immigration services and to get your visa granted easily and without any hassle.`,
    title: "Dhwanil Jani",
    subtitle: "SC - 804 Parents Visa",
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
