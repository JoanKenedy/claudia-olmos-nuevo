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
      image: ilumina4, // Nota: Las imágenes de este slide ya estaban reordenadas en tu último envío
      image2: ilumina2,
      image3: ilumina3,
      image4: ilumina1,
      image5: ilumina5,
      title: "Ven y descubre una nueva forma de cuidar tu sonrisa",
      subtitle: "Conoce los beneficios y agenda",

      button: {
        text: "Agenda tu cita",
        link: "#implantes",
      },
    },
    {
      image: descubre4,
      image2: descubre2,
      image3: descubre3,
      image4: descubre5,
      image5: descubre1,
      title:
        "Equipo de Alta Tecnología que cumple con los estándares más exigentes en higiene bucal",
      subtitle: "Vuelve a ser tú mismo",

      button: {
        text: "Agenda tu cita",
        link: "#ortodoncia",
      },
    },
  ];

  // --- ESTRUCTURA DE CONFIGURACIÓN DE GRIDS ACTUALIZADA ---
  const gridConfigs = [
    // Configuración 1: SLIDE 1 (Original)
    [
      { img: 1, classes: "col-start-1 col-end-5 row-start-1 row-end-3" }, // Pequeña Izq Top
      { img: 2, classes: "col-start-1 col-end-5 row-start-3 row-end-5" }, // Pequeña Izq Bottom
      { img: 3, classes: "col-start-5 col-end-13 row-start-1 row-end-3" }, // GRANDE Derecha Top
      { img: 4, classes: "col-start-5 col-end-9 row-start-3 row-end-5" }, // Mediana Derecha Bottom Izq
      { img: 5, classes: "col-start-9 col-end-13 row-start-3 row-end-5" }, // Mediana Derecha Bottom Der
    ],
    // 🎨 Configuración 2: SLIDE 2 (Diseño con 2 Grandes) 🖼️
    // Diseño con Imagen 3 y 4 grandes, en forma de "L" invertida, dejando dos columnas pequeñas a la izquierda y una a la derecha.
    [
      { img: 1, classes: "col-start-1 col-end-4 row-start-1 row-end-3" }, // Pequeña Izq Top (3/12 de ancho)
      { img: 2, classes: "col-start-1 col-end-4 row-start-3 row-end-5" }, // Pequeña Izq Bottom (3/12 de ancho)
      { img: 3, classes: "col-start-4 col-end-13 row-start-1 row-end-3" }, // GRANDE Derecha Top (9/12 de ancho)
      { img: 4, classes: "col-start-4 col-end-10 row-start-3 row-end-5" }, // GRANDE Centro Bottom (6/12 de ancho)
      { img: 5, classes: "col-start-10 col-end-13 row-start-3 row-end-5" }, // Pequeña Der Bottom (3/12 de ancho)
    ],
    // Configuración 3: SLIDE 3 (Central/Balanceada)
    [
      { img: 1, classes: "col-start-1 col-end-7 row-start-1 row-end-3" }, // Arriba Izq Mediana
      { img: 2, classes: "col-start-7 col-end-13 row-start-1 row-end-3" }, // Arriba Der Mediana
      { img: 3, classes: "col-start-1 col-end-4 row-start-3 row-end-5" }, // Abajo Izq Pequeña
      { img: 4, classes: "col-start-4 col-end-10 row-start-3 row-end-5" }, // Abajo Central GRANDE
      { img: 5, classes: "col-start-10 col-end-13 row-start-3 row-end-5" }, // Abajo Der Pequeña
    ],
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

  // Función para obtener la imagen correcta por índice
  const getImage = (slide, index) => {
    switch (index) {
      case 1:
        return slide.image;
      case 2:
        return slide.image2;
      case 3:
        return slide.image3;
      case 4:
        return slide.image4;
      case 5:
        return slide.image5;
      default:
        return slide.image;
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      <Splide aria-label="Odontólogos" options={options}>
        {slides.map((slide, idx) => {
          // Obtener la configuración de grid para el slide actual
          const config = gridConfigs[idx];

          return (
            <SplideSlide key={idx}>
              <div className="flex flex-col md:flex-row items-center justify-center md:max-w-7xl mx-auto gap-8 px-4">
                {/* Texto y botón a la izquierda (Sin cambios) */}
                <div className="flex-1 flex flex-col justify-center items-start md:items-start z-10">
                  <h2 className="font-semibold text-3xl font-serif text-white text  mb-2 drop-shadow-lg md:text-5xl">
                    {slide.title}
                  </h2>
                  <h3 className="text-2xl font-semibold text-white mb-4 italic ">
                    {slide.subtitle}
                  </h3>
                  <p className="text-gray-200 text-base text-justify mb-8 max-w-md md:text-lg">
                    {slide.description}
                  </p>
                  <a
                    href={slide.button.link}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-primary/80 transition"
                  >
                    {slide.button.text}
                  </a>
                </div>

                {/* Contenedor de las 5 imágenes a la derecha */}
                <div className="flex-1 flex justify-center items-center relative">
                  {/* Contenedor del Grid: Usamos grid-rows-4 para el balance */}
                  <div className="grid grid-cols-12 grid-rows-4 gap-4 w-full h-full max-h-[550px]">
                    {config.map((item, i) => (
                      <div
                        key={i}
                        // Aplicamos las clases de grid dinámicamente
                        className={`${item.classes} p-[2px] rounded-2xl`}
                      >
                        <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
                          <img
                            // Obtenemos la imagen correcta (image, image2, image3...)
                            src={getImage(slide, item.img)}
                            alt={`Doctor ${item.img}`}
                            className="h-full w-full object-cover block"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};
