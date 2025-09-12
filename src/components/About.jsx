import { Parallax } from "react-parallax";
import team from "../assets/prueba-3.jpg";
import { CardColor } from "./CardColor";
import { Certificate } from "./Certificate";
import { Star } from "./Star";
import { TitleSection } from "./TitleSection";
import { Tool } from "./Tool";
import { Tooth } from "./Tooth";
// eslint-disable-next-line react/prop-types
export const About = ({ divRef }) => {
  const valuePoints = [
    {
      id: 1,
      icon: <Star className="w-7 h-7 text-white mr-2" />,
      title: "Excelentes Servicios",
    },
    {
      id: 2,
      icon: <Tool className="w-7 h-7 mr-2 text-white" />,
      title: "Tecnología Avanzada",
    },
    {
      id: 3,
      icon: <Tooth className="w-7 h-7 mr-2 text-white" />,
      title: "Atención Profesional",
    },
    {
      id: 4,
      icon: <Certificate className="w-7 h-7 mr-2 text-white" />,
      title: "Confianza y Calidad",
    },
  ];

  return (
    <>
      <div
        className="w-full flex justify-center items-center py-0 md:py-8 md:bg-[linear-gradient(to_right,#111827_60%,#fff_40%)] md:mt-0"
        id="about"
        ref={divRef}
      >
        <section className="section-parallax flex flex-col justify-center items-center overflow-hidden  pt-12 md:gap-16 md:pb-20 md:pt-20 md:pl-5 relative md:grid md:grid-cols-2 md:max-w-[1280px]">
          <article className="w-full text-center  flex flex-col px-4 lg:text-start lg:mb-0  md:text-white md:pr-0 ">
           

            <p className="text-base mt-4 md:text-xl text-justify ">
              Con más de 10 años de experiencia la {" "} 
              <span className="font-semibold text-2xl font-serif text-primary md:text-3xl md:text-white ">
                Dra. Claudia Olmos
              </span>{" "}
             ofrece atención odontológica profesional y
              personalizada en Colonia del Valle. Su compromiso es brindarte un
              cuidado humano con resultados de excelencia, apoyada con
              especialistas de sólida trayectoria y tecnología avanzada.
            </p>

            <h2 className="font-semibold text-xl font-serif text-primary mt-4  md:text-2xl md:text-white text-center ">
              ¡Ven y descubre una nueva forma de cuidar tu sonrisa!
            </h2>
            <ul className="grid w-full grid-cols-1 place-content-center mb-4 place-items-center gap-3 mt-7 lg:grid-cols-2 md:mb-0">
              {valuePoints.map((item) => (
                <CardColor key={item.id}>
                  {item.icon}
                  <h3 className="text-white font-semibold text-base lg:text-base xl:text-xl">
                    {item.title}
                  </h3>
                </CardColor>
              ))}
            </ul>
          </article>
          <div className="w-full md:w-[90%] custom-shadow ">
            <Parallax
              bgImage={team}
              strength={300}
              bgImageStyle={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            >
              <div
                style={{
                  height: "600px",
                  boxShadow: "0px 8px 28px -9px rgba(0,0,0,0.45)",
                }}
              >
                {/* Puedes poner contenido encima si lo deseas */}
              </div>
            </Parallax>
          </div>
        </section>
      </div>
    </>
  );
};
