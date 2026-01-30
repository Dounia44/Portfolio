import Button from "./Button";
import webdev from "../assets/images/webdev.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center mt-10 items-center text-center px-6 bg-linear-to-r from-blue-100 to-purple-100"
    >
      {/* Cercles + image */}
      <div className="mb-6 flex justify-center items-center">
        <div className="absolute w-64 h-64 md:w-105 md:h-105 rounded-full border-4 border-purple-300"></div>

        <img
          src={webdev}
          alt="illustration Femme développeur"
          width={1024}
          height={1024}
          className="w-64 h-64 lg:w-100 lg:h-100 rounded-full object-cover border-4 border-blue-300"
        />
      </div>
      <h1 className="mb-5">Dounia Huber</h1>
      <p className="mb-5">Intégratrice web junior</p>
      <p className="mb-5">
        je conçois des interfaces web accessibles, performantes et orientées
        utilisateur.
      </p>
      <div className="flex flex-col gap-4 md:gap-10 sm:flex-row">
        <Button href="#projects">Voir mes projets</Button>
        <Button href="#contact" variant="secondary">
          Me contacter
        </Button>
      </div>
    </section>
  );
};

export default Hero;
