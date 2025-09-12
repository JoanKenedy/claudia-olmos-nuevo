import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import heroDes from "../assets/consultorio-1.jpg";
import hero2 from "../assets/consultorio-2.jpg";
import hero3 from "../assets/consultorio-3.jpg";
import hero4 from "../assets/consultorio-6.jpg";

export const HeroSlider = ({ divRef }) => {
  const optionsSliderReviews = {
    type: "fade",
    rewind: true,
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    focus: false,
    easing: "linear",
    speed: 800,
  };

  return (
    <Splide aria-labelledby="Slider Reviews" options={optionsSliderReviews}>
      <SplideSlide className="flex justify-center items-center review">
        <section
          className="w-full h-[calc(100svh-89px)] md:max-h-[900px] flex justify-center items-center flex-col relative"
          id="home"
          ref={divRef}
        >
          <img
            src={heroDes}
            alt="Foto de sonrisa perfecta"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="2000"
            height="1333"
          />
          <div className="w-[60%] md:w-[300px] absolute top-1/2 -translate-y-1/2 bg-white backdrop-blur-xl py-2  rounded-3xl">
            <h1 className="font-bold text-2xl text-center text-primary w-full">
              Agendar cita
            </h1>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center review">
        <section
          className="w-full h-[calc(100svh-89px)] md:max-h-[900px] flex justify-center items-center flex-col relative"
          id="home"
          ref={divRef}
        >
          <img
            src={hero2}
            alt="Foto de sonrisa perfecta"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="2000"
            height="1333"
          />
          <div className="absolute w-[60%] md:w-[300px]  top-1/2 -translate-y-1/2 bg-white backdrop-blur-xl py-2 rounded-3xl">
            <h1 className="font-bold text-2xl text-center text-primary">
              Agendar cita
            </h1>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center review">
        <section
          className="w-full h-[calc(100svh-89px)]  md:max-h-[900px] flex justify-center items-center flex-col relative"
          id="home"
          ref={divRef}
        >
          <img
            src={hero3}
            alt="Foto de sonrisa perfecta"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="2000"
            height="1333"
          />
          <div className="absolute w-[60%] md:w-[300px] top-1/2 -translate-y-1/2 bg-white backdrop-blur-xl py-2 rounded-3xl">
            <h1 className="font-bold text-2xl text-center text-primary">
              Agendar cita
            </h1>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center review">
        <section
          className="w-full h-[calc(100svh-89px)]  md:max-h-[900px] flex justify-center items-center flex-col relative"
          id="home"
          ref={divRef}
        >
          <img
            src={hero4}
            alt="Foto de sonrisa perfecta"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="2000"
            height="1333"
          />
          <div className="absolute w-[60%] md:w-[300px] top-1/2 -translate-y-1/2 bg-white backdrop-blur-xl py-2 rounded-3xl">
            <h1 className="font-bold text-2xl text-center text-primary">
              Agendar cita
            </h1>
          </div>
        </section>
      </SplideSlide>
    </Splide>
  );
};
