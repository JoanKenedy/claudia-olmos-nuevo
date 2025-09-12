// eslint-disable-next-line react/prop-types
export const CardColor = ({ children }) => {
  return (
    <li className="flex justify-center items-center p-3 rounded-2xl text-nowrap  bg-primary w-64 transition-all duration-300 lg:w-full hover:shadow-lg hover:duration-300 hover:shadow-slate-500 hover:transition-all">
      {children}
    </li>
  );
};
