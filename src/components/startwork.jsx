import { FaWhatsapp } from "react-icons/fa";
const StartWork = () => {
  return (
    <>
      <section className="flex justify-center ">
        <div
          className="flex justify-center items-center text-center w-101 text-2xl
           bg-slate-900  text-white rounded-2xl  h-16 relative top-24 z-10"
        >
          <div className=" grow">
            <h1>Empezamos?</h1>
          </div>
          <div className="grow">
            <h2>Junto a su equipo quedo genial</h2>
          </div>
          <a
          href="https://wa.me/+541168846011"
            className="grow flex justify-center items-center cursor-pointer border-2 w-20 mr-4 rounded-lg
          border-blue-700 "
          >
            <h3>contacto</h3>
            <FaWhatsapp className="ml-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default StartWork;
