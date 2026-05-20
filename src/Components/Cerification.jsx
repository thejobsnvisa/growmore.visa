import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import mara from "../assets/mara-card.png";
import bg18 from  "../assets/bg18.svg";
import icef from "../assets/icef.png";
import qeac from "../assets/qeac.svg";
import isana from "../assets/isana.svg";
import "swiper/css";
import "swiper/css/pagination";

const certifications = [
  { id: 1, image: `${mara}` },
  { id: 2, image: `${bg18}` },
  { id: 3, image: `${icef}` },
  { id: 4, image: `${qeac}` },
  { id: 5, image: `${isana}` },
];

export default function CertificationSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
      
      <h2 className="text-3xl md:text-5xl font-medium text-[#163c3d] mb-14">
        Certification{" "}
        <span className="text-[#8fd07c] font-semibold">And</span>{" "}
        <span className="font-semibold">Accreditation</span>
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {certifications.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[280px] flex items-center justify-center">
              <img
                src={item.image}
                alt="certification"
                className="max-h-[200px] object-contain transition duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}