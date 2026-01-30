import { workExperiences } from "../data/experiences";
import Button from "./Button";

const AboutParcours = () => {
  return (
    <section
      id="parcours"
      className="py-20 lg:py-40 px-6 bg-linear-to-r from-blue-100 to-purple-100"
    >
      <div className="container mx-auto mb-12 lg:px-6 ">
        <h2>Mon parcours</h2>

        {/* Liste des expériences */}

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {workExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500"
            >
              <div className="text-sm text-gray-500 mb-2">{exp.year}</div>
              <h4>
                {exp.title} – {exp.company}
              </h4>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </div>

        {/* Bouton CV */}
        <div className="text-center mt-12">
          <p className="mb-5">Pour plus d’informations sur mon parcours :</p>
          <Button href="/cv-dounia-huber.pdf" download>
            Télécharger mon CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutParcours;
