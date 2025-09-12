
export const ModalService = ({
  open,
  onClose,
  title,
  description,
  img,
  alt,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 md:px-0">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          ×
        </button>
        <img src={img} alt={alt} className="w-full h-auto mb-4 object-contain " />

        <p className="text-gray-700">{description}</p>
        <a
                   title="Mandar mensaje al WhatsApp de Dra. Claudia Olmos"
                   href="https://wa.me/525565095139"
                   className="inline-block mt-4 font-semibold no-underline bg-primary text-center text-white w-full py-2 rounded-lg "
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   Contacto
                 </a>
      </div>
    </div>
  );
};
