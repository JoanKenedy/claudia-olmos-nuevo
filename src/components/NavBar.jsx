import { useRef, useState } from "react";
import logo from "../assets/logo.png";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { WhatsApp } from "./WhatsApp";
import { Instagram } from "./Instagram";
import { Facebook } from "./Facebook";

// eslint-disable-next-line react/prop-types
export const NavBar = ({ Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);
    const navbarBackground = () => {
      if (window.scrollY > 170) {
        setIsNavbar(true);
      } else {
        setIsNavbar(false);
      }
    };
    window.addEventListener("scroll", navbarBackground);
  const selectEl = useRef(null);
  const handleClickOutsideFn = () => setIsOpen(false);

  useOnClickOutside(selectEl, handleClickOutsideFn);

  return (
    <header
      className={`w-full flex justify-center items-center flex-col top-0 right-0 bg-white fixed z-20 shadow-md 
  transition-all duration-500 ease-in-out
  ${isNavbar ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}`}
    >
      <nav className="w-full relative px-4 flex justify-between items-center max-w-7xl flex-col">
        <div className="w-full flex justify-between items-center my-2">
          <a
            href="#"
            aria-label="Ir a la página principal"
            className=" max-w-40 md:max-w-40 lg:max-w-52"
          >
            <img
              className="w-full"
              src={logo}
              alt="Logo Dra. Claudia Olmos"
              width="350"
              height="123"
            />
          </a>
          <div ref={selectEl}>
            <button
              className="border-none bg-transparent flex justify-between items-center flex-col w-10 h-6 cursor-pointer transition lg:hidden"
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                aria-hidden
                className={`w-10 h-1 rounded-lg bg-primary transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                aria-hidden
                className={`w-10 h-1 rounded-lg bg-primary transition ${isOpen ? "scale-0" : ""}`}
              />
              <span
                aria-hidden
                className={`w-10 h-1 rounded-lg bg-primary transition ${isOpen ? "-rotate-45 -translate-y-3" : ""}`}
              />
            </button>
            <ul
              className={`w-[90%] absolute top-[88px] right-4 flex flex-col origin-top-right lg:items-center p-4 z-20 ${isOpen ? "scale-1" : "scale-0"} lg:p-0 font-medium border border-gray-200 rounded-lg bg-gray-200 transition-all duration-300 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white lg:scale-100 lg:static lg:-translate-x-0 lg:translate-y-0 lg:w-fit`}
            >
              <li>
                <a
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-white bg-primary rounded transition lg:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl lg:text-primary"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 transition text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 transition text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#promotion"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 transition rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl"
                >
                  Promociones
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 transition rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl"
                >
                  Ubicación
                </a>
              </li>
              <li>
                <a
                  href="tel:5565095139"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 transition rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl"
                >
                  Contacto
                </a>
              </li>
              <li className="md:hidden">
                <a
                  
                  href="https://www.instagram.com/dra.claudiaolmos/"
                  className="w-12 py-2 h-12  border-2 flex justify-center items-center transition duration-300 fill-white hover:duration-300 hover:transition hover:bg-white hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </li>
              <li className="md:hidden">
                <a
                 
                  href="https://www.facebook.com/profile.php?id=61562673012415"
                  className="w-12 h-12  border-2 flex justify-center items-center transition duration-300 fill-white hover:duration-300 hover:transition hover:bg-white hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-44 hidden md:flex justify-between items-center">
            <a
              title="Mandar mensaje al WhatsApp de Dra. Claudia Olmos"
              href="https://wa.me/525565095139"
              className="w-12 h-12 rounded-full border-white border-2 flex justify-center items-center transition duration-300 fill-white hover:duration-300 hover:transition hover:bg-white hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp className="w-6 h-6" />
            </a>
            <a
              title="Ir a la página de Instagram de Dra. Claudia Olmos"
              href="https://www.instagram.com/dra.claudiaolmos/"
              className="w-12 h-12 rounded-full border-white border-2 flex justify-center items-center transition duration-300 fill-white hover:duration-300 hover:transition hover:bg-white hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              title="Ir a la página de Facebook de Dra. Claudia Olmos"
              href="https://www.facebook.com/profile.php?id=61562673012415"
              className="w-12 h-12 rounded-full border-white border-2 flex justify-center items-center transition duration-300 fill-white hover:duration-300 hover:transition hover:bg-white hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
