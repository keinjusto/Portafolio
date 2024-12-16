import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-blue-600 h-80 relative top-16 flex justify-center items-center  ">
        <div className="flex relative w-100 ">
          <a href="https://instagram.com/_brianlm_/" className="grow flex justify-center">
            <AiFillInstagram className=" text-5xl text-slate-900 " />
          </a>
          <a
            href="https://linkedin.com/in/brianlm"
            className="grow  flex justify-center"
          >
            <FaLinkedin className="text-5xl text-slate-900" />
          </a>
          <a href="https://github.com/keinjusto" className="grow flex justify-center">
            <FaGithub className=" text-5xl text-slate-900" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
