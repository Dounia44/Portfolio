import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import projects from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 lg:py-40 px-6 bg-linear-to-r from-blue-50 to-purple-50"
    >
      <div className="container mx-auto mb-12 px-6">
        <h2>Mes Projets</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="flex gap-3">
                  {project.live && (
                    <Button href={project.live} size="small">
                      Voir le site
                    </Button>
                  )}
                  {project.code && (
                    <Button
                      href={project.code}
                      variant="secondary"
                      size="small"
                    >
                      Voir le code
                    </Button>
                  )}
                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="primary"
                    size="small"
                  >
                    + info
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
