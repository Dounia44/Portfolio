const About = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-40 px-6 bg-linear-to-r from-blue-100 to-purple-100"
    >
      <h2>Et si je vous parlais un peu de moi</h2>
      <div className="bg-white p-10 rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto text-center border-l-4 border-purple-500">
        <p className="leading-loose">
          Mon parcours ne vient pas du numérique, et c’est justement ce qui fait
          la différence. Mon expérience passée dans le bâtiment m’a apporté
          rigueur, sens de l’organisation et autonomie. Aujourd’hui, je combine
          une approche terrain (organisation, fiabilité, sens des
          responsabilités) avec des compétences techniques en intégration
          front-end.
        </p>
      </div>
    </section>
  );
};

export default About;
