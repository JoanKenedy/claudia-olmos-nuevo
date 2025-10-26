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
      image: conoceme1, // 1
      image2: conoceme2, // 2 <-- Usaremos esta como Foto 1 en móvil
      image3: conoceme3, // 3
      image4: conoceme4, // 4 <-- Usaremos esta como Foto 3 en móvil
      image5: conoceme5, // 5
      title: "Conóceme",
      subtitle: "Transformando Sonrisas",
      button: {
        text: "Agenda tu cita",
        link: "#cita",
      },
    },
    {
      image: ilumina4,
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
  ]; // --- ESTRUCTURA DE CONFIGURACIÓN DE GRIDS (Solo se aplica en MD en adelante) ---

  const gridConfigs = [
    // ... (Se mantiene igual para desktop)
    [
      { img: 1, classes: "col-start-1 col-end-5 row-start-1 row-end-3" },
      { img: 2, classes: "col-start-1 col-end-5 row-start-3 row-end-5" },
      { img: 3, classes: "col-start-5 col-end-13 row-start-1 row-end-3" },
      { img: 4, classes: "col-start-5 col-end-9 row-start-3 row-end-5" },
      { img: 5, classes: "col-start-9 col-end-13 row-start-3 row-end-5" },
    ],
    [
      { img: 1, classes: "col-start-1 col-end-4 row-start-1 row-end-3" },
      { img: 2, classes: "col-start-1 col-end-4 row-start-3 row-end-5" },
      { img: 3, classes: "col-start-4 col-end-13 row-start-1 row-end-3" },
      { img: 4, classes: "col-start-4 col-end-10 row-start-3 row-end-5" },
      { img: 5, classes: "col-start-10 col-end-13 row-start-3 row-end-5" },
    ],
    [
      { img: 1, classes: "col-start-1 col-end-7 row-start-1 row-end-3" },
      { img: 2, classes: "col-start-7 col-end-13 row-start-1 row-end-3" },
      { img: 3, classes: "col-start-1 col-end-4 row-start-3 row-end-5" },
      { img: 4, classes: "col-start-4 col-end-10 row-start-3 row-end-5" },
      { img: 5, classes: "col-start-10 col-end-13 row-start-3 row-end-5" },
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
  }; // Función para obtener la imagen correcta por índice

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
  }; // --- COMPONENTE DE IMAGEN REUTILIZABLE (Mantenido simple) ---

  const ImageBox = ({ src, alt, className = "" }) => (
    <div
      className={`w-full h-full overflow-hidden rounded-2xl shadow-lg ${className}`}
    >
           {" "}
      <img src={src} alt={alt} className="h-full w-full object-cover block" /> 
       {" "}
    </div>
  );

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
           {" "}
      <Splide aria-label="Odontólogos" options={options}>
               {" "}
        {slides.map((slide, idx) => {
          const config = gridConfigs[idx]; // Lógica para SOBREESCRIBIR los índices de imagen en móvil (solo para Slide 1)

          // Usando los índices originales que solicitaste: 2, (3), 4
          const mobileImage1Index = idx === 0 ? 5 : 1;
          const mobileImage2Index = idx === 0 ? 2 : 5;
          const mobileImage3Index = idx === 0 ? 4 : 3;

          return (
            <SplideSlide key={idx}>
             
              <div className="flex flex-col md:flex-row items-center justify-center md:max-w-7xl mx-auto gap-8 px-4">
             
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start z-10">
                  
                  <h2 className="font-semibold text-3xl font-serif text-white mb-2 drop-shadow-lg md:text-5xl">
       {slide.title}
                  </h2>
                
                  <h3 className="text-2xl font-semibold text-white mb-4 italic">
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
             
                <div className="w-full md:w-1/2 flex justify-center items-center relative">
                
              
                  <div className="flex flex-col gap-4 w-full md:hidden max-w-lg">
                  
                 
                  
                    <div className="h-48 w-full p-[2px] rounded-2xl">
                     
                      <ImageBox
                        src={getImage(slide, mobileImage1Index)}
                        alt={`Imagen 1 - ${slide.title}`}
                      />
                     
                    </div>
                  
                    <div className="flex gap-4">
               
                     
                      <div className="h-48 w-1/2 p-[2px] rounded-2xl">
                 
                        <ImageBox
                          src={getImage(slide, mobileImage2Index)}
                          alt={`Imagen 2 - ${slide.title}`}
                        />
                      
                      </div>
                      
                      {/* Foto 3 (50% de ancho): 🔥 CAMBIO DE h-32 A h-48 🔥 */}
                    
                      <div className="h-48 w-1/2 p-[2px] rounded-2xl">
                        
                        <ImageBox
                          src={getImage(slide, mobileImage3Index)}
                          alt={`Imagen 3 - ${slide.title}`}
                        />
                      
                      </div>
                    
                    </div>
                   
                  </div>
                  
                 
                  <div className="hidden md:grid grid-cols-12 grid-rows-4 gap-4 w-full h-full max-h-[550px]">
                  
                    {config.map((item, i) => (
                      <div
                        key={i}
                        className={`${item.classes} p-[2px] rounded-2xl`}
                      >
                      
                        <ImageBox
                          src={getImage(slide, item.img)}
                          alt={`Doctor ${item.img}`}
                        />
                       
                      </div>
                    ))}
                   
                  </div>
                
                </div>
               
              </div>
             
            </SplideSlide>
          );
        })}
             {" "}
      </Splide>
         {" "}
    </div>
  );
};
