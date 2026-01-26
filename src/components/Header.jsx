import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-1">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + nom */}
        <div>
          <Logo />
        </div>
        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-600">
            Accueil
          </a>
          <a href="#projects" className="hover:text-blue-600">
            Projets
          </a>
          <a href="#skills" className="hover:text-blue-600">
            Compétences
          </a>
          <a href="#parcours" className="hover:text-blue-600">
            Parcours
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Bouton mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center gap-2 text-blue-600 font-medium "
        >
          {isOpen ? "FERMER" : "☰ MENU"}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
          <a onClick={() => setIsOpen(false)} href="#hero">
            Accueil
          </a>
          <a onClick={() => setIsOpen(false)} href="#projects">
            Projets
          </a>
          <a onClick={() => setIsOpen(false)} href="#skills">
            Compétences
          </a>
          <a onClick={() => setIsOpen(false)} href="#parcours">
            Parcours
          </a>
          <a onClick={() => setIsOpen(false)} href="#contact">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
