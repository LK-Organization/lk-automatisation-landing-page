// TestimonialsCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Claire Dubois",
    text: "Témoignage 1",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jean-Marc",
    text: "Témoignage 2",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Nora",
    text: "Témoignage 3",
    stars: 4,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Thomas",
    text: "Témoignage 4",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Élodie",
    text: "Témoignage 5",
    stars: 4,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section id="preuves" className="py-20 bg-white">
      <style>
        {`
          .swiper-wrapper {
            padding: 10px 0;
          }
        `}
      </style>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Ils m'ont fait confiance</h2>

        <Swiper
          className="py-[100px]"
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center h-full">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-neutral-600 italic mb-4">"{t.text}"</p>
                <div className="flex justify-center mb-2">
                  {"★".repeat(t.stars)}
                  {"☆".repeat(5 - t.stars)}
                </div>
                <p className="text-sm font-semibold text-neutral-800">
                  {t.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
