import { workExperiences, myStory } from "../data/experiences";
import Button from "./Button";

const AboutParcours = () => {
  return (
    <section
      id="parcours"
      className="py-20 lg:py-40 px-6 bg-linear-to-r from-blue-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2>Mon parcours</h2>
      </div>

      {/* Colonne gauche : My story */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="mb-8">Et si je vous parlais de moi</h3>
          {myStory.map((text) => (
            <p key={text.id} className="mt-4 leading-relaxed">
              {text.content}
            </p>
          ))}

          {/* Bouton CV avec texte explicatif */}
          <div className="text-center md:text-start mt-9">
            <p className="mb-2">Pour plus d’informations sur mon parcours :</p>
            <Button href="">Télécharger mon CV</Button>
          </div>
        </div>

        {/* Colonne droite : My experiences */}
        <div className="space-y-6">
          {workExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500"
            >
              <div className="text-sm text-gray-500 mb-2">{exp.year}</div>
              <h4>
                {exp.title} – {exp.company}
              </h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutParcours;
