import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import dra from '../assets/example.png';
import dra2 from "../assets/example-2.png";
import dra3 from "../assets/example-3.png";

export const AboutDoctors = () => {
  const slides = [
    {
      image: dra,
      title: "Hola soy la Dra. Claudia Olmos",
      subtitle: "Transformando Sonrisas",
      description:
        "Ofrezco atención odontológica profesional y personalizada en colonia del Valle. Mi compromiso es brindarte un cuidado humano con resultados de excelencia, apoyada con especialistas de sólida trayectoria y tecnología avanzada.",
      button: {
        text: "Agenda tu cita",
        link: "#cita",
      },
    },
    {
      image: dra2,
      title: "Mi Trayectoria Profesional",
      subtitle: "Recupera tu confianza",
      description:
        "Cuento con más de 15 años de experiencia en la odontología, brindando atención integral y personalizada a cada paciente. Mi formación continua y pasión por la salud bucal me permiten ofrecer tratamientos modernos y efectivos, siempre enfocados en el bienestar y la confianza de quienes nos visitan.",
      button: {
        text: "Agenda tu cita",
        link: "#implantes",
      },
    },
    {
      image: dra3,
      title: "Tecnología de Vanguardia",
      subtitle: "Vuelve a ser tú mismo",
      description:
        "Cuento con equipo y material de primer nivel para atenderte, lo que me permite garantizar procedimientos seguros, cómodos y eficaces. Mi consultorio está equipado con tecnología avanzada para ofrecerte diagnósticos precisos y tratamientos de alta calidad, siempre enfocados en tu bienestar y tranquilidad.",
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
            <div className="flex flex-col md:flex-row items-center justify-center md:max-w-6xl mx-auto min-h-[500px] gap-8 px-4">
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
                <img
                  src={slide.image}
                  alt="Odontólogo"
                  className="w-full max-w-md h-[400px] object-contain rounded-2xl shadow-2xl transition-all duration-700"
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
