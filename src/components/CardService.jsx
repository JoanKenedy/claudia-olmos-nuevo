import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
export const CardService = ({
  id,
  title,
  description,
  img,
  alt,
  className,
  img2,
  img3,
  delay,
  onImgClick,
}) => {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false });
 

 

  useEffect(() => {
    let timer;
    if (inView) {
      timer = setTimeout(() => setVisible(true), delay);
    } else {
      setVisible(false);
    }
    return () => clearTimeout(timer);
  }, [inView, delay]);

 

  return (
    <div
      ref={ref}
      className={`card overflow-visible w-full ${className} ${
        id === 4 && isDesktop ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <div className="content">
        <div className="back">
          <div className="back-content"></div>
        </div>
        <div className="front relative">
          <img
            src={img}
            alt={alt}
            className={`md:hidden ${visible ? "scale-100" : "scale-0"} transition-transform duration-700 ease-in-out`}
            onClick={onImgClick}
          />
          <img
            src={img2}
            className="hidden md:block w-full object-contain"
            onClick={onImgClick}
          />
          {/* Solo muestra img3 si el id es 3 */}
          <img
            src={img3}
            className={`z-20 hidden md:block h-1/3 absolute left-1/2 top-[30%] -translate-x-1/2 ${visible ? "scale-100" : "scale-0"} transition-transform duration-700 ease-in-out`}
            style={{
              zIndex: 20,
              pointerEvents: "none",
            }}
          />
          <div
            className={`hidden md:block absolute bottom-1 left-0 w-full bg-primary text-center py-2 rounded-lg ${visible ? "scale-100" : "scale-0"} transition-transform duration-700 ease-in-out`}
          >
            <h3 className="text-white ">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
