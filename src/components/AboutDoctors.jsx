import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import conoceme1 from "../assets/conocenos-1.jpg";
import conoceme2 from "../assets/conocenos-2.jpg";
import conoceme3 from "../assets/conocenos-3.jpg";
import conoceme4 from "../assets/conocenos-4.jpg";
import conoceme5 from "../assets/conocenos-5.jpg";
import ilumina1 from "../assets/ilumina-1.jpg";
import ilumina2 from "../assets/ilumina-2.jpg";
import ilumina3 from "../assets/ilumina-3.jpg";
import ilumina4 from "../assets/ilumina-4.jpg";
import ilumina5 from "../assets/ilumina-5.jpeg";
import descubre1 from "../assets/descubre-1.png";
import descubre2 from "../assets/descubre-2.png";
import descubre3 from "../assets/descubre-3.png";
import descubre4 from "../assets/descubre-4.png";
import descubre5 from "../assets/descubre-5.png";

// eslint-disable-next-line react/prop-types

export const AboutDoctors = () => {
  const slides = [
    {
      image: conoceme1,
      image2: conoceme2,
      image3: conoceme3,
      image4: conoceme4,
      image5: conoceme5,
      title: "Conóceme",
      subtitle: "Transformando Sonrisas",
      button: {
        text: "Agenda tu cita",
        link: "#cita",
      },
    },
    {
      image: ilumina1,
      image2: ilumina2,
      image3: ilumina3,
      image4: ilumina4,
      image5: ilumina5,
      title: "Ven y descubre una nueva forma de cuidar tu sonrisa",
      subtitle: "Recupera tu confianza",

      button: {
        text: "Agenda tu cita",
        link: "#implantes",
      },
    },
    {
      image: descubre1,
      image2: descubre2,
      image3: descubre3,
      image4: descubre4,
      image5: descubre5,
      title: "Ilumina tu sonrisa y recupera la confianza que mereces",
      subtitle: "Vuelve a ser tú mismo",

      button: {
        text: "Agenda tu cita",
        link: "#ortodoncia",
      },
    },
  ];

  const options = {
    type: "fade",
    rewind: true,
    arrows: true,
    pagination: true,
    autoplay: true,
    speed: 800,
    interval: 5000,
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      <Splide aria-label="Odontólogos" options={options}>
        {slides.map((slide, idx) => (
          <SplideSlide key={idx}>
            <div className="flex flex-col md:flex-row items-center justify-center md:max-w-7xl mx-auto  gap-8 px-4">
              {/* Texto y botón a la izquierda */}
              <div className="flex-1 flex flex-col justify-center items-start md:items-start z-10">
                <h2 className="font-semibold text-3xl font-serif text-primary mb-2 drop-shadow-lg md:text-5xl">
                  {slide.title}
                </h2>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 italic">
                  {slide.subtitle}
                </h3>
                <p className="text-gray-200 text-base  text-justify mb-8 max-w-md md:text-lg">
                  {slide.description}
                </p>
                <a
                  href={slide.button.link}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-primary/80 transition"
                >
                  {slide.button.text}
                </a>
              </div>
              {/* Imagen grande a la derecha */}
              <div className="flex-1 flex justify-center items-center relative">
                <div className="grid grid-cols-12 grid-rows-5 gap-4 w-full h-full max-w-md max-h-[600px] ">
                  {/* Doctor 1 */}
                  <div className="col-start-1 col-end-5 row-start-1 row-end-4 p-[2px]  rounded-2xl">
                    <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={slide.image}
                        alt="Doctor 1"
                        className="h-full w-full object-cover block"
                      />
                    </div>
                  </div>

                  {/* Doctor 2 */}
                  <div className="col-start-1 col-end-5 row-start-4 row-end-6 p-[2px]  rounded-2xl">
                    <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={slide.image2}
                        alt="Doctor 2"
                        className="h-full w-full object-cover block"
                      />
                    </div>
                  </div>

                  {/* Doctor 3 */}
                  <div className="col-start-5 col-end-13 row-start-1 row-end-3 p-[2px] rounded-2xl">
                    <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={slide.image3}
                        alt="Doctor 3"
                        className="h-full w-full object-cover block"
                      />
                    </div>
                  </div>

                  {/* Doctor 4 */}
                  <div className="col-start-5 col-end-9 row-start-3 row-end-6 p-[2px] rounded-2xl">
                    <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={slide.image4}
                        alt="Doctor 4"
                        className="h-full w-full object-cover block"
                      />
                    </div>
                  </div>

                  {/* Doctor 5 */}
                  <div className="col-start-9 col-end-13 row-start-3 row-end-6 p-[2px] rounded-2xl">
                    <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={slide.image5}
                        alt="Doctor 5"
                        className="h-full w-full object-cover block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
