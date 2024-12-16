import { PiTerminal } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { FiTool } from "react-icons/fi";

const Tools = () => {
    return (
        <section className=" flex justify-center text-principal">
        <div className=" flex  h-55 w-73  rounded-t-xl bg-white relative -top-48 about  ">
          <div className=" grow aboutItem flex items-center flex-col ">
            <PiTerminal className="w-16 h-16 bg-btn p-4 rounded-full m-16 mb-8 text-principal " />
            <h1 className=" text-4xl ">Backend</h1>
            <p className="mb-6 mt-6 w-80  text-center">
              El backend me cautiva, desarrollo sistemas sólidos que potencian
              aplicaciones, combinando eficiencia, innovación y robustez para
              ofrecer experiencias digitales excepcionales.
            </p>
            <p className="text-fondo1 mb-6 text-xl font-medium tracking-wide">
              Lenguajes que uso:
            </p>
            <p className="mb-6 text-lg ">NodeJS</p>
            <p className=" text-fondo1 mb-8 text-lg font-medium tracking-wide">
              Herramientas eligidas:
            </p>
            <ul className="text-center ">
              <li className="text-xl mb-2">ExpressJS</li>
              <li className="text-xl mb-2">NextJS</li>
              <li className="text-xl mb-2">MongoDB</li>
            </ul>
          </div>
          <div className=" grow aboutItem flex items-center flex-col">
            <MdDesignServices className="w-16 h-16 bg-btn p-4 rounded-full m-16 mb-8 text-principal " />
            <h2 className=" text-4xl ">Frontend</h2>
            <p className="mb-6 mt-6 w-80  text-center">
              Fusiono creatividad y código para forjar experiencias digitales
              impactantes. Disfruto de convertir ideas en interfaces
              cautivadoras, dedicando pasión y habilidad para lograr resultados
              memorables.
            </p>
            <p className="text-fondo1 mb-6 text-xl font-medium tracking-wide">
              Lenguajes que uso:
            </p>
            <p className="mb-6 text-lg ">HTML, CSS, React, JS</p>
            <p className=" text-fondo1 mb-8 text-lg font-medium tracking-wide">
              Herramientas eligidas:
            </p>
            <ul className="text-center ">
              <li className="text-xl mb-2">Figma</li>
              <li className="text-xl mb-2">Tailwind</li>
              <li className="text-xl mb-2">Git</li>
              <li className="text-xl mb-2">VScode</li>
              <li className="text-xl mb-2">netlify</li>
            </ul>
          </div>
          <div className=" grow aboutItem flex items-center flex-col">
            <FiTool className="w-16 h-16 bg-btn p-4 rounded-full m-16 mb-8 text-principal " />
            <h3 className=" text-4xl abot">Mantenimiento</h3>
            <p className="mb-6 mt-6 w-80  text-center">
              Actualizo y aseguro aplicaciones en ambas partes, con pruebas,
              optimización y automatización. Monitoreo constante y documentación
              clara garantizan su funcionamiento óptimo.
            </p>
            <p className="text-fondo1 mb-6 text-xl font-medium tracking-wide">
              Lenguajes que uso:
            </p>
            <p className="mb-6 text-lg ">JS</p>
            <p className=" text-fondo1 mb-8 text-lg font-medium tracking-wide">
              Frameworks:
            </p>
            <ul className="text-center ">
              <li className="text-xl mb-2">React</li>
              <li className="text-xl mb-2">ExpressJS</li>
              <li className="text-xl mb-2">NextJS</li>
              <li className="text-xl mb-2">CSS</li>
            </ul>
          </div>
        </div>
      </section>
    )
}

export default Tools