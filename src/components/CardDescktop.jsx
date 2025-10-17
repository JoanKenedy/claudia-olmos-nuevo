import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line react/prop-types


export const CardDescktop = ({
  id,
  title,

  img,
  alt,
  className,
  img2,
  img3,
  delay,
  isDesktop,
  onImgClick,
  onHoverEnter,
  onHoverLeave,
  titlePosition,
}) => {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false });

  const titlePositions = {
    medium: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[190px] text-center",
    bottom: "absolute bottom-1 left-0 w-full text-center",
    top: "absolute -top-1 right-3/4 w-[200px] text-center",
    topright: "absolute -top-1 left-3/4 w-[140px] text-center",
    left: "absolute -bottom-1 right-3/4 text-left px-4",
    right: "absolute -bottom-1 left-3/4 w-[140px] text-center ",
  };

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
      className={`card overflow-visible w-full ${className} `}
    >
      <div className="content">
        <div className="back">
          <div className="back-content"></div>
        </div>
        
        <div className="front relative">
          <img
            src={img2}
            className="hidden md:block w-full object-contain"
            onMouseEnter={() => isDesktop && onHoverEnter && onHoverEnter()}
            
          />
          {/* Solo muestra img3 si el id es 3 */}
          {/* <img
            src={img3}
            className={`z-20 hidden md:block h-[50%] absolute left-1/2 top-[25%] -translate-x-1/2 ${visible ? "scale-100" : "scale-0"} transition-transform duration-700 ease-in-out`}
            style={{
              zIndex: 20,
              pointerEvents: "none",
            }}
          /> */}
          <div
            className={`hidden md:block bg-primary py-2 rounded-2xl
              ${visible ? "scale-100" : "scale-0"} 
              transition-transform duration-700 ease-in-out 
              ${titlePositions[titlePosition]}`}
          >
            <h3 className="text-white text-sm">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
