
export const ModalService = ({
  open,
  onClose,
  title,
  description,
  img,
  alt,
  id,
  title2,
  isDesktop,
  description2
  

}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 md:px-0">
      <div className="bg-white rounded-xl p-6 max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          ×
        </button>
        {id === 4 && isDesktop ? (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-primary text-center">
              {title2}
            </h2>
            <p>{description2}</p>
          </>
        ) : (
          <>
            <img
              src={img}
              alt={alt}
              className="w-full h-auto mb-4 object-contain "
            />
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-justify flex flex-col gap-1"
            />
          </>
        )}

        <a
          title="Mandar mensaje al WhatsApp de Dra. Claudia Olmos"
          href="https://wa.me/525565095139"
          className="block mx-auto  mt-4 font-semibold no-underline bg-primary text-center text-white w-[50%] py-2 rounded-lg md:hover:scale-95 md:transition-all md:duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar tu cita
        </a>
      </div>
    </div>
  );
};
