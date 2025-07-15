// TestimonialsCarousel.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Claire Dubois",
    text: "Nous avons fait appel à LK pour structurer et automatiser plusieurs de nos processus marketing et opérationnels. L’intervention de Lukasz, en tant qu’exécutant principal sur ce projet, a été fluide, rigoureuse et particulièrement impactante.\nCe qui nous a marqué, c’est son écoute active, sa vision stratégique et sa réactivité tout au long de la mission. Il ne s’est pas contenté d’exécuter : il a proposé des solutions concrètes, adaptées à notre réalité terrain, avec une vraie logique de performance derrière chaque automatisation.\nRésultat : nous avons rapidement observé un gain de temps significatif, une meilleure organisation d’équipe, et surtout, une plus grande fluidité dans nos actions. Certaines tâches répétitives ont été totalement éliminées, ce qui nous permet aujourd’hui de nous concentrer sur la croissance.\nNous recommandons LK à toutes les entreprises souhaitant professionnaliser leurs process sans alourdir leur organisation. Lukasz a su nous livrer des systèmes efficaces, simples à prendre en main, et parfaitement intégrés à notre manière de travailler.\nUn partenaire fiable, proactif, et tourné vers le résultat. Bravo 👏",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jean-Marc",
    text: "Nous avons sollicité LK dans un moment de croissance où tout allait trop vite et où nos process internes commençaient à freiner notre efficacité. L’intervention de Lukasz a été un vrai game changer.\nIl a su identifier en un temps record les points de friction dans notre organisation, puis déployer des automatisations ultra pertinentes qui nous ont libéré des heures de travail chaque semaine. Le tout sans complexifier nos outils : au contraire, tout a été simplifié.\nCe que j’ai particulièrement apprécié, c’est la capacité de Lukasz à rendre les choses claires et accessibles, même pour les membres de l’équipe peu à l’aise avec la tech. C’est un vrai facilitateur, à la fois stratégique et opérationnel.\nJe recommande LK à toutes les structures qui veulent automatiser sans se perdre dans la technique. Ici, tout est orienté efficacité et fluidité.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Nora",
    text: "Travailler avec Lukasz a été une excellente expérience, à la fois sur le fond et sur la forme. Au-delà de son expertise technique pointue, ce qui fait vraiment la différence, c’est son engagement, sa pédagogie et son sens du service.\nDès les premiers échanges, on a senti qu’on n’était pas face à un simple prestataire, mais à un véritable partenaire. Lukasz s’est pleinement impliqué dans notre projet, avec une vision claire et des solutions parfaitement adaptées à notre activité.\nNous avons pu automatiser plusieurs actions clés dans notre parcours client, tout en renforçant la cohérence de notre système. Cela a eu un impact direct sur notre productivité, mais aussi sur notre expérience utilisateur.\nSi vous cherchez quelqu’un de fiable, bienveillant et orienté résultats, LK est une valeur sûre.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

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
              <div
                className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center h-full cursor-pointer hover:bg-gray-50 transition"
                onClick={() => openModal(t)}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-neutral-600 italic mb-4 line-clamp-3">
                  "{t.text}"
                </p>
                <div className="flex justify-center mb-2 text-yellow-500">
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

      {/* Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <div className="text-center">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <p className="text-neutral-600 italic mb-4 whitespace-pre-line">
                "{selectedTestimonial.text}"
              </p>
              <div className="flex justify-center mb-2 text-yellow-500">
                {"★".repeat(selectedTestimonial.stars)}
                {"☆".repeat(5 - selectedTestimonial.stars)}
              </div>
              <p className="text-sm font-semibold text-neutral-800">
                {selectedTestimonial.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
