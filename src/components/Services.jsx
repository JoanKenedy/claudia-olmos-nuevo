import { useState } from "react";
import { ModalService } from "./ModalService";
import { CardService } from "./CardService";
import { CardDescktop } from "./CardDescktop";
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
    


    const servicesInformation= [
      {
        id: 1,
        title: "Implantes ",
        description: `
        <p>¿Perdiste un diente? Recupera tu sonrisa con un <span class="font-semibold">Implante Dental.</span></p> 
        <p>Recuperar un diente perdido es mucho más que estética: es <span class="font-semibold">volver a sonreír</span> sin miedo, <span class="font-semibold">hablar con seguridad, disfrutar de cada alimento</span> sin limitaciones además de <span class="font-semibold">prevenir la pérdida ósea.</span></p> 
        <p>Te acompañamos con <span class="font-semibold">experiencia, calidez</span> y planes accesibles como <span class="font-semibold">meses sin intereses</span>, porque tu sonrisa merece lo mejor.</p> 
        <p class="text-center font-bold font-serif italic ">¡Agenda tu valoración hoy y da el primer paso hacia una sonrisa completa!</p>
      `,
        img: implante,
        img2: implanteCompu,
        alt: "Tratamiento de implante dental",
        titlePosition: "left",
      },
      {
        id: 2,
        title: "Limpieza Dental Profesional",
        description: `
         <p>La <span class="font-semibold"> Limpieza Dental Profesional con Ultrasonido y Airflow </span> combina dos tecnologías de vanguardia para eliminar eficazmente sarro, placa bacteriana y manchas por café o tabaco.</p>
         <p>Este procedimiento, también conocido como <span class="font-semibold">Profilaxis Dental o Limpieza Profunda</span>, es adaptable a pacientes con ortodoncia, implantes o encías sensibles.</p>
         <p>Sin dolor, no invasivo y con un acabado de pulido superior al de una limpieza tradicional.</p>
         <p class="text-center font-bold font-serif italic ">Nuestro Paquete de Limpieza Dental + Valoración incluye RX digital.</p>
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
        <p>Transforma tu sonrisa con un <span class="font-semibold">Tratamiento de Ortodoncia</span> donde alinea tus dientes y mejora tu mordida. Más que estética, ganarás confianza, salud bucal, prevención de caries o desgaste dental.</p>
        <p>Inicia hoy tu tratamiento de <span class="font-semibold">Brackets Metálicos</span> con seguimiento personalizado.</p>
        <p class="text-center font-bold font-serif italic ">¡Recupera la sonrisa que siempre soñaste!</p>
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
       <p><span class="font-semibold">Ilumina tu sonrisa</span> y recupera la confianza que mereces con nuestro <span class="font-semibold">Blanqueamiento Dental.</span></p>
       <p>Elimina manchas y <span class="font-semibold">aclara el tono de tus dientes</span> de forma segura y <span class="font-semibold">no invasiva</span>, con resultados visibles desde la primera cita.</p>
       <p>Porque cada sonrisa es única, la <span class="font-semibold">transformamos</span> con experiencia, tecnología y un trato humano que marca la diferencia.</p>
       <p class="text-center font-bold font-serif italic ">¡Reserva tu cita hoy y luce una sonrisa más brillante!</p>
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
        <p>El <span class="font-semibold">dolor o la sensibilidad dental</span>  no tiene por qué limitar tu vida.</p>
        <p>Con el <span class="font-semibold">tratamiento de Endodoncia</span>, elimina la infección de la pulpa dental causada por caries y <span class="font-semibold">conserva tu diente natural</span>, previniendo complicaciones mayores.</p>
        <p>Recupera la comodidad al masticar y la tranquilidad de una sonrisa saludable, con la atención cercana y la experiencia de nuestros especialistas.</p>
        <p class="text-center font-bold font-serif italic ">¡Transformamos con experiencia y recuperamos sonrisas!</p>
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
       <p><span class="font-semibold">Ilumina tu sonrisa</span> y recupera la confianza que mereces con nuestro <span class="font-semibold">Blanqueamiento Dental.</span></p>
       <p>Elimina manchas y <span>aclara el tono de tus dientes</span> de forma segura y <span class="font-semibold">no invasiva</span>, con resultados visibles desde la primera cita.</p>
       <p>Porque cada sonrisa es única, la <span class="font-semibold">transformamos</span> con experiencia, tecnología y un trato humano que marca la diferencia.</p>
       <p class="text-center font-bold font-serif italic ">¡Reserva tu cita hoy y luce una sonrisa más brillante!</p>
      `,
        description: `
        <p>Devuélvele vida y armonía a tu sonrisa con nuestras <span class="font-semibold">Coronas Dentales</span> de alta estética.</p>
        <p>Diseñadas en <span class="font-semibold">zirconio y silicato de litio</span>, ofrecen resistencia, naturalidad y una apariencia impecable, ya sea para <span class="font-semibold">proteger un diente frágil, dañado o cubrir un implante.</span></p>
        <p>Recupera la confianza al sonreír y la comodidad al masticar con un tratamiento personalizado y seguro.</p>
        <p class="text-center font-bold font-serif italic ">¡Reserva tu cita hoy y redescubre el placer de sonreír con tranquilidad!</p>
       
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
      <p>Desde la <span class="font-semibold">extracción de muelas de juicio y dientes retenidos</span>, hasta procedimientos avanzados como la <span class="font-semibold">elevación del seno maxilar</span>, cada tratamiento se realiza con precisión, seguridad y un trato cercano.</p>
      <p>Cuida tu salud, evita complicaciones y <span class="font-semibold">prepárate para futuros tratamientos</span> con la tranquilidad de estar en manos expertas.</p>
      <p class="text-center font-bold font-serif italic ">¡Da el primer paso hacia una sonrisa plena y saludable!</p>
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
              isDesktop={isDesktop}
              onImgClick={() => handleOpenModal(item)} // móvil
              onHoverEnter={() => handleOpenModal(item)} // hover escritorio
              onHoverLeave={handleCloseModal} // salir del hover
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
