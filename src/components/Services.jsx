import { useState } from "react";
import { ModalService } from "./ModalService";
import { CardService } from "./CardService";
import { TitleSection } from "./TitleSection";
import ortodoncia from "../assets/service-1.png";
import blanqueamiento from "../assets/service-4.png";
import endodoncia from "../assets/service-5.png";
import implante from "../assets/service-2.png";
import coronas from "../assets/service-6.png";
import limpieza from "../assets/service-3.png";
import cirugia from "../assets/service-7.png";
import limpieza_compu from "../assets/service-compu-3.png";
import ortodoncia_compu from "../assets/service-compu-1.png";
import service_center from "../assets/central.png";
import doctora from "../assets/logo-services.png";

// eslint-disable-next-line react/prop-types
export const Services = ({ divRef }) => {
  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches;
   const [modalOpen, setModalOpen] = useState(false);
   const [modalData, setModalData] = useState({});
   const handleOpenModal = (service) => {
     setModalData(service);
     setModalOpen(true);
   };

   const handleCloseModal = () => setModalOpen(false);
  const servicesInformation = [
    {
      id: 1,
      title: "Implantes",
      description:
        "Los implantes son elementos metálicos que se ubican quirúrgicamente en los huesos maxilares, debajo de las encías. Una vez colocados en el lugar, el dentista puede colocar sobre ellos las coronas o puentes fijos que reemplazarán a las piezas dentarias perdidas.",
      img: implante,
      img2: limpieza_compu,
      alt: "Tratamiento de implante dental",
    },
    {
      id: 2,
      title: "Limpieza dental",
      description:
        "Especialidad de Odontología encargada de prevenir, diagnosticar y tratar aquellos problemas primarios relacionados con los dientes, las encías o la lengua. ",
      img: limpieza,
      img2: limpieza_compu,
      alt: "Tratamiento de limpieza dental",
    },
    {
      id: 3,
      title: "Ortodoncia",
      description:
        "La ortodoncia es una especialidad de la odontología que se encarga del estudio, prevención, y tratamiento de la posición de los dientes para alinearlos correctamente y de todos los problemas relacionados con la mordida.",
      img: ortodoncia,
      img2: ortodoncia_compu,
      alt: "Tratamiento de ortodoncia",
    },
    {
      id: 4,
      title: "Todos nuestros servicios",
      description:
        "El blanqueamiento dental es un tratamiento estético que busca aclarar el color de los dientes y eliminar manchas.",
      img: blanqueamiento,
      img2: service_center,
      img3: doctora,
      alt: "Tratamiento de blanqueamiento dental",
    },
    {
      id: 5,
      title: "Endodoncia",
      description:
        "Especialidad médica y odontológica que se encarga de tratar, diagnosticar y prevenir enfermedades, lesiones o deformidades en la cara, el cráneo, la boca, el cuello y los huesos maxilares",
      img: endodoncia,
      img2: ortodoncia_compu,
      alt: "Cirugías",
    },
    {
      id: 6,
      title: "Coronas Dentales",
      description:
        "Especialidad de la odontología que se encarga de prevenir, diagnosticar y tratar las enfermedades que afectan a los tejidos que soportan los dientes.",
      img: coronas,
      img2: ortodoncia_compu,
      alt: "Tratamiento de Coronas Dentales",
    },
    {
      id: 7,
      title: "Cirugía Oral",
      description:
        "Atención dental de niños, incluyendo revisión, tratamiento de caries y educación en higiene oral.",
      img: cirugia,
      img2: limpieza_compu,
      alt: "Tratamiento de Cirugía Oral",
    },
  ];

const getClasses = (i) => {
  switch (i) {
    case 0:
      return "md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-5"; // Tarjeta grande
    case 1:
      return "md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3";
    case 2:
      return "md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-5";  
    case 3:
      return "md:col-start-5 md:col-end-9 md:row-start-1 md:row-end-5";
    case 4:
      return "md:col-start-9 md:col-end-11 md:row-start-1 md:row-end-3"; 
    case 5:
      return "md:col-start-9 md:col-end-11 md:row-start-3 md:row-end-5";   
    case 6:
      return "md:col-start-11 md:col-end-13 md:row-start-2 md:row-end-4";  
    
  }
};

  return (
    <section
      className="w-full flex justify-center items-center mt-6"
      id="services"
      ref={divRef}
    >
      <div className="w-full flex justify-center px-4 items-center flex-col md:px-36">
        <TitleSection title="Servicios" />
        <small className="text-primary">
          Da click en la imagen para saber más
        </small>
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-4 gap-4 mt-10 md:gap-2 md:max-w-[1280px]">
          {servicesInformation.map((item, i) => (
            <CardService
              key={item.id}
              className={getClasses(i)}
              title={item.title}
              img={item.img}
              img2={item.img2}
              img3={item.img3}
              alt={item.alt}
              delay={i * 300}
              onImgClick={() => handleOpenModal(item)}
            />
          ))}
        </section>
        <ModalService
          open={modalData.id === 4 && isDesktop ? undefined : modalOpen}
          onClose={handleCloseModal}
          title={modalData.title}
          description={modalData.description}
          img={modalData.img}
          alt={modalData.alt}
        />
      </div>
    </section>
  );
};
