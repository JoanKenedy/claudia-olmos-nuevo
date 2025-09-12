// eslint-disable-next-line react/prop-types
export const CardPromo = ({ imgSrc, alt }) => {
  return (
    <article className="w-full flex justify-center items-center flex-col">
      <a
        href="https://wa.me/525565095139"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={imgSrc}
          alt={alt}
          className="w-full rounded-2xl mb-5"
          width="1080"
          height="1080"
        />
      </a>
      <a
        data-ripple-light="true"
        className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-semibold text-white shadow-md shadow-slate-500 transition-all hover:shadow-lg hover:shadow-slate-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        href="https://wa.me/525565095139"
      >
        Agenda tu cita
      </a>
    </article>
  );
};
