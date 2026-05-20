import { Link } from "react-router-dom";
import cardImg1 from "../assets/card-img1.svg";
import cardImg2 from "../assets/card-img2.svg";
import cardImg3 from "../assets/card-img3.svg";
import cardImg4 from "../assets/card-img4.svg";
import cardImg5 from "../assets/card-img5.svg";

const cards = [
  {
    title1: "Study",
    title2: "Visa",
    description:
      "Study abroad and build your future with confidence.",
    image: cardImg1,
    link: "/study-visa",
  },
  {
    title1: "Work",
    title2: "Visa",
    description:
      "Stay close to your loved ones abroad with ease.",
    image: cardImg2,
    link: "/work-visa",
  },
  {
    title1: "Migration",
    title2: "Visa",
    description:
      "Move abroad and start a new life with ease.",
    image: cardImg3,
    link: "/migration-visa",
  },
  {
    title1: "Dependent",
    title2: "Visa",
    description:
      "Live with your family abroad without worries.",
    image: cardImg4,
    link: "/dependent-visa",
  },
  {
    title1: "Visitor",
    title2: "Visa",
    description:
      "Travel abroad and explore new places with ease.",
    image: cardImg5,
    link: "/visitor-visa",
  },
];

const Card = () => {
  return (
    <div className="max-w-[1350px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#EFF9FB] rounded-xl p-4 h-[250px] flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            {/* Top */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={card.image}
                  alt={`${card.title1} ${card.title2}`}
                  className="w-10 h-12 mt-2"
                />

                <h3 className="text-[20px] mt-2 font-bold text-gray-800 leading-snug">
                  {card.title1}<br /> {card.title2}
                </h3>
              </div>

              <p className="text-gray-600 text-[16px] leading-relaxed text-justify ml-12">
                {card.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="mt-4">
              <Link to={card.link}>
                <span className="inline-flex items-center justify-center w-16 h-16 ml-8 ">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;