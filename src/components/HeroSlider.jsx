import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import heroDes from "../assets/consultorio-1.jpg";
import hero3 from "../assets/consultorio-9.jpg";
import hero4 from "../assets/consultorio-6.jpg";
import whatsapp from "../assets/whatsapp.png";

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
      <SplideSlide className="flex justify-center items-center review ">
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
          <div className="w-[55%] md:w-[240px] absolute top-1/2 -translate-y-1/2 bg-white backdrop-blur-xl py-2  rounded-3xl md:hover:scale-90 duration-300">
            <a
              href="https://wa.me/525565095139"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-2  md:gap-3"
            >
              <h1 className="font-bold text-lg  text-primary md:text-2xl ">
                Agendar cita
              </h1>
              <img src={whatsapp} alt="" className="w-6 h-6 md:w-8 md:h-8 " />
            </a>
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
          <div className="absolute w-[55%] md:w-[240px] top-1/2 -translate-y-1/2 bg-white backdrop-blur-xl py-2 rounded-3xl md:hover:scale-90 duration-300">
            <a
              href="https://wa.me/525565095139"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-2  md:gap-3"
            >
              <h1 className="font-bold text-lg  text-primary md:text-2xl ">
                Agendar cita
              </h1>
              <img src={whatsapp} alt="" className="w-6 h-6 md:w-8 md:h-8 " />
            </a>
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
          <div className="absolute w-[55%] md:w-[240px] top-1/2 -translate-y-1/2 bg-white backdrop-blur-xl py-2 rounded-3xl md:hover:scale-90 duration-300">
            <a
              href="https://wa.me/525565095139"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-2  md:gap-3"
            >
              <h1 className="font-bold text-lg  text-primary md:text-2xl">
                Agendar cita
              </h1>
              <img src={whatsapp} alt="" className="w-6 h-6 md:w-8 md:h-8 " />
            </a>
          </div>
        </section>
      </SplideSlide>
    </Splide>
  );
};
