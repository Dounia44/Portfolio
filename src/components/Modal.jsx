const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative overflow-y-auto max-h-[90vh]">
        {/* Bouton de fermeture */}
        <button
          className="absolute top-2 right-2 text-gray-500 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Contenu du modal */}
        <h2>{project.name}</h2>
        <p>{project.description}</p>

        {project.stack && (
          <div>
            <h3 className="mb-2">Stack:</h3>
            <p>{project.stack}</p>
          </div>
        )}
        {project.objectifs && (
          <div>
            <h3 className="mb-2">Objectifs:</h3>
            <p>{project.objectifs}</p>
          </div>
        )}
        {project.competences && (
          <div>
            <h3 className="mb-2">Competences</h3>
            <p>{project.competences}</p>
          </div>
        )}
        {project.resultats && (
          <div>
            <h3 className="mb-2">Resultats:</h3>
            <p>{project.resultats}</p>
          </div>
        )}
        {project.améliorations && (
          <div>
            <h3 className="mb-2">améliorations:</h3>
            <p>{project.améliorations}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
