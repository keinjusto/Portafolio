import ProyectImg from "../assets/nexva.svg";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
const Proyects = () => {
  return (
    <>
      <section className=" ">
        <div className="flex flex-col items-center relative bottom-20 ">
          <h1 className="text-4xl text-principal">Mis ultimos proyectos</h1>
        </div>
        <div className="flex justify-center ">
          <div className="bg-gray-800 w-80 h-40 flex items-center justify-center rounded-lg  z-100 absolute">
            <img
              src={ProyectImg}
              alt="nexva"
              className=" -rotate-30 w-36 h-36 relative left-3 "
            />
          </div>
          <div className="bg-black  w-80 h-40 z-10 rounded-lg opacity-0 nex cursor-pointer">
            <p className="text-white p-4 flex text-center">
              Creador de total de nexva siendo un proyecto de aprendizaje
            </p>
            <div className="flex justify-center">
              <FaReact className="text-white text-4xl w-10" />
              <IoLogoJavascript className="text-white text-4xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyects;
