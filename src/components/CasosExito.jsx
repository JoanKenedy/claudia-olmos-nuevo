import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactCompareImage from "react-compare-image";
import beforeImg1 from "../assets/brenda_limpieza/antes.jpg";
import afterImg1 from "../assets/brenda_limpieza/despues.jpg";
import beforeImg2 from "../assets/eli_regeneracion/antes.jpg";
import afterImg2 from "../assets/eli_regeneracion/despues.jpg";
import beforeImg3 from "../assets/healing_alejandro/antes.jpg";
import afterImg3 from "../assets/healing_alejandro/despues.jpg";
import beforeImg4 from "../assets/gilberto_implante/antes.jpg";
import afterImg4 from "../assets/gilberto_implante/despues.jpg";
import beforeImg5 from "../assets/olivia_implante/antes.jpg";
import afterImg5 from "../assets/olivia_implante/despues.jpg";
import beforeImg6 from "../assets/sofia_resina/antes.jpg";
import afterImg6 from "../assets/sofia_resina/despues.jpg";
import Exito from "../assets/exito.jpg";
import { TitleSection } from "./TitleSection";

export const CasosExito = () => {
  const cases = [
    {
      id: 1,
      title: "Limpieza ",
      beforeImg: beforeImg1,
      afterImg: afterImg1,
    },
    {
      id: 2,
      title: "Regeneración ",
      beforeImg: beforeImg2,
      afterImg: afterImg2,
    },
    {
      id: 3,
      title: "Curación ",
      beforeImg: beforeImg3,
      afterImg: afterImg3,
    },
    {
      id: 4,
      title: "Implante ",
      beforeImg: beforeImg4,
      afterImg: afterImg4,
    },
    {
      id: 5,
      title: "Implante ",
      beforeImg: beforeImg5,
      afterImg: afterImg5,
    },
    {
      id: 6,
      title: "Resina ",
      beforeImg: beforeImg6,
      afterImg: afterImg6,
    },
  ];

  // Array de refs y estados para cada caso

  


  

  return (
    <section className="w-full py-6 px-4 ">
      <TitleSection title="Casos de Éxito" />
      <section className="md:max-w-7xl mx-auto md:grid md:grid-cols-2 gap-4 items-center md:gap-0 md:mt-6 md:mb-12">
        <div className="flex justify-end items-center">
          <img src={Exito} alt="" className="max-w-[90%] " />
        </div>
        <div className="space-y-4 my-6 text-center md:px-20 md:text-left">
          <h2 className="font-semibold text-3xl font-serif text-primary md:text-5xl">
            Orgullosa del éxito en mis trabajos
          </h2>
          <p className="italic font-serif text-lg text-gray-700 md:text-2xl text-justify ">
            “Me motiva transformar sonrisas y acompañar a mis pacientes en su
            bienestar. Cada confianza depositada es un compromiso para
            brindarles excelencia y calidez”
          </p>
          <h6 className="text-primary text-lg  font-serif font-semibold italic mt-10 md:text-xl">
            Dra. Claudia Olmos
          </h6>
        </div>
      </section>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 mt-4 md:max-w-7xl mx-auto md:gap-6">
        {cases.map((caso, i) => (
          <div
            key={caso.id}
            className={`w-full max-w-md mx-auto mb-5 transition-opacity duration-700 ease-in-out rounded-lg  `}
          >
            <h3 className="text-center font-serif text-lg font-bold py-2 text-primary md:text-xl">
              {caso.title}
            </h3>
            <ReactCompareImage
              leftImage={caso.beforeImg}
              rightImage={caso.afterImg}
              sliderLineColor="#fff"
              sliderLineWidth={3}
              handleSize={40}
              vertical={false}
              leftImageLabel="Antes"
              rightImageLabel="Después"
              aspectRatio="16/9"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
