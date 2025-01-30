import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-blue-400 rounded-xl p-6 text-white shadow-xl mb-4">
        <h1 className="text-center text-2xl font-medium">
          JTS Solar Configurator
        </h1>
        <p className="my-3 text-base">
          Try out the JTS Solar photovoltaic panel configurator, created to make
          choosing the perfect solar system clear, honest, and easy.
        </p>
        <span className="text-sm inline-flex items-center cursor-pointer hover:text-slate-600 transition-colors">
          <FaArrowRight className="me-1" />
          <p>Click here for more details</p>
        </span>
      </div>
      <img
        src="static/configurator-header.avif"
        alt=""
        className="w-full h-auto rounded-lg"
      />
    </>
  );
};

export default Header;
