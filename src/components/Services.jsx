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
import implanteCompu from "../assets/service-compu-2.png";
import endodonciaCompu from "../assets/service-compu-5.png";
import blancoCompu from "../assets/service-compu-4.png";
import cirugiaCompu from "../assets/service-compu-7.png";
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
      description: `
        <p>¿Perdiste un diente? Recupera tu sonrisa con un <strong>Implante Dental.</strong></p>
        <p>Recuperar un diente perdido es mucho más que estética: es <strong>volver a sonreír</strong> sin miedo, <strong>hablar con seguridad, disfrutar de cada alimento</strong> sin limitaciones además de <strong>prevenir la pérdida ósea.</strong></p>
        <p>Te acompañamos con <strong>experiencia, calidez</strong> y planes accesibles como <strong>meses sin intereses</strong>, porque tu sonrisa merece lo mejor.</p>
        <p>¡Agenda tu valoración hoy y da el primer paso hacia una sonrisa completa!</p>
      `,
      img: implante,
      img2: implanteCompu,
      alt: "Tratamiento de implante dental",
      titlePosition: "left",
    },
    {
      id: 2,
      title: "Limpieza dental",
      description: `
         <p>La <strong> Limpieza Dental Profesional con Ultrasonido y Airflow </strong> combina dos tecnologías de vanguardia para eliminar eficazmente sarro, placa bacteriana y manchas por café o tabaco.</p>
         <p>Este procedimiento, también conocido como <strong>Profilaxis Dental o Limpieza Profunda</strong>, es adaptable a pacientes con ortodoncia, implantes o encías sensibles.</p>
         <p>Sin dolor, no invasivo y con un acabado de pulido superior al de una limpieza tradicional.</p>
         <p><strong> Nuestro Paquete de Limpieza Dental + Valoración incluye RX digital.</strong></p>
      `,
      img: limpieza,
      img2: limpieza_compu,
      alt: "Tratamiento de limpieza dental",
      titlePosition: "top",
    },
    {
      id: 3,
      title: "Brackets",
      description: `
        <p>Transforma tu sonrisa con un <strong>Tratamiento de Ortodoncia</strong> donde alinea tus dientes y mejora tu mordida. Más que estética, ganarás confianza, salud bucal, prevención de caries o desgaste dental.</p>
        <p>Inicia hoy tu tratamiento de <strong>Brackets Metálicos</strong> con seguimiento personalizado.</p>
      `,
      img: ortodoncia,
      img2: ortodoncia_compu,
      alt: "Tratamiento de ortodoncia",
      titlePosition: "left",
    },
    {
      id: 4,
      title: "Todos nuestros servicios",
      title2: "Tambien contamos con:",
      description: `
       <p><strong>Ilumina tu sonrisa</strong> y recupera la confianza que mereces con nuestro <strong>Blanqueamiento Dental.</strong></p>
       <p>Elimina manchas y <strong>aclara el tono de tus dientes</strong> de forma segura y <strong>no invasiva</strong>, con resultados visibles desde la primera cita.</p>
       <p>Porque cada sonrisa es única, la <strong>transformamos</strong> con experiencia, tecnología y un trato humano que marca la diferencia.</p>
      `,
      description2: (
        <ul className="list-disc pl-6 space-y-2">
          <li className="font-semibold">Resinas</li>
          <li className="font-semibold">Odontopediatría</li>
          <li className="font-semibold">Periodoncia</li>
          <li className="font-semibold">Alineadores</li>
          <li className="font-semibold">Carillas</li>
          <li className="font-semibold">Coronas dentales</li>
        </ul>
      ),
      img: blanqueamiento,
      img2: service_center,
      img3: doctora,
      alt: "Tratamiento de blanqueamiento dental",
      titlePosition: "medium",
    },
    {
      id: 5,
      title: "Endodoncia",
      description: `
        <p>El <strong>dolor o la sensibilidad dental</strong>  no tiene por qué limitar tu vida.</p>
        <p>Con el <strong>tratamiento de Endodoncia</strong>, elimina la infección de la pulpa dental causada por caries y <strong>conserva tu diente natural</strong>, previniendo complicaciones mayores.</p>
        <p>Recupera la comodidad al masticar y la tranquilidad de una sonrisa saludable, con la atención cercana y la experiencia de nuestros especialistas.</p>
      `,

      img: endodoncia,
      img2: endodonciaCompu,
      alt: "Cirugías",
      titlePosition: "topright",
    },
    {
      id: 6,
      title: "Blanqueamiento",
      description2: `
       <p><strong>Ilumina tu sonrisa</strong> y recupera la confianza que mereces con nuestro <strong>Blanqueamiento Dental.</strong></p>
       <p>Elimina manchas y <strong>aclara el tono de tus dientes</strong> de forma segura y <strong>no invasiva</strong>, con resultados visibles desde la primera cita.</p>
       <p>Porque cada sonrisa es única, la <strong>transformamos</strong> con experiencia, tecnología y un trato humano que marca la diferencia.</p>
      `,
      description: `
        <p>Recupera la funcionalidad y estética de tu sonrisa con nuestras <strong>Coronas Dentales</strong>.</p>
      `,
      img: coronas,
      img2: blancoCompu,
      img4: blanqueamiento,
      alt: "Tratamiento de Coronas Dentales",
      titlePosition: "right",
    },
    {
      id: 7,
      title: "Cirugía Oral",
      description: `
      <p>Devuelve bienestar y confianza a tu sonrisa con nuestras Cirugías Orales.</p>
      <p>Desde la <strong>extracción de muelas de juicio y dientes retenidos</strong>, hasta procedimientos avanzados como la <strong>elevación del seno maxilar</strong>, cada tratamiento se realiza con precisión, seguridad y un trato cercano.</p>
      <p>Cuida tu salud, evita complicaciones y <strong>prepárate para futuros tratamientos</strong> con la tranquilidad de estar en manos expertas.</p>
      <p>¡Da el primer paso hacia una sonrisa plena y saludable!</p>
      `,
      img: cirugia,
      img2: cirugiaCompu,
      alt: "Tratamiento de Cirugía Oral",
      titlePosition: "right",
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
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-4 gap-4 mt-10 md:gap-2 md:max-w-[1150px]">
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
              titlePosition={item.titlePosition}
            />
          ))}
        </section>
        <ModalService
          open={modalOpen}
          onClose={handleCloseModal}
          title2={
            modalData.id === 4 && isDesktop ? modalData.title2 : undefined
          }
          description={
            (modalData.id === 4 || modalData.id === 6) && isDesktop
              ? modalData.description2
              : modalData.description
          }
          img={modalData.id === 6 && isDesktop ? modalData.img4 : modalData.img}
          alt={modalData.alt}
          id={modalData.id}
          isDesktop={isDesktop}
          description2={modalData.description2}
        />
      </div>
    </section>
  );
};
