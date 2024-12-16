import imagen from "../assets/pixar.png";

const Header = () => {
  return (
    <header className=" h-100 ">
      <div className="flex  justify-center items-center  h-100">
        <div className="h-72 w-72 rounded-full bg-blue-600 relative bottom-16">
          <img
            src={imagen}
            alt="pixarimagen"
            className="rounded-full relative bottom-16"
          />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center relative bottom-80">
        Full-Stack Web
      </h1>
    </header>
  );
};
export default Header;
