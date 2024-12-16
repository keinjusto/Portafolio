import Tools from "./tools";
const Aboutme = () => {
  return (
    <>
      <section className="bg-blue-600 h-98 text-gray-200">
        <h1 className="text-5xl font-bold text-center relative top-16">
          Soy Brian, Desarrollador Full-Stack
        </h1>
        <div className="text-center justify-center items-center flex ">
        <h2 className="w-100 relative top-24 text-xl">
          {" "}
          con una gran pasión por la tecnología y el aprendizaje constante. Me
          encanta enfrentar nuevos desafíos y mejorar mis habilidades para estar
          siempre al día con lo último en desarrollo web. Mi objetivo es aportar
          soluciones creativas que realmente impacten, mientras crezco y aprendo
          junto a un equipo comprometido. Estoy emocionado por la oportunidad de
          colaborar en proyectos que hagan la diferencia y seguir
          desarrollándome profesionalmente en un entorno dinámico.
        </h2>
        </div>
      </section>
      <Tools />
    </>
  );
};
export default Aboutme;
