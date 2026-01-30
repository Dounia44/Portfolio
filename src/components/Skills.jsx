const skills = [
  {
    name: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Sass / SCSS",
      "JavaScript",
      "React",
      "React Router",
    ],
  },
  { name: "Outils", items: ["Git / GitHub", "Figma", "Visual Studio Code"] },
  {
    name: "Qualité / Web",
    items: [
      "Accessibilité",
      "SEO",
      "Performance",
      "Performance (CDN, optimisation images)",
      "Audit Lighthouse & Wave",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 lg:py-40 px-6 bg-linear-to-r from-blue-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2>Mes Compétences</h2>
        <p>
          Voici les technologies et outils que j’utilise régulièrement dans mes
          projets.
        </p>
      </div>

      <div className="max-w-4xl text-center md:text-start mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3>{skill.name}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-blue-700 px-3 py-1 mb-2 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
