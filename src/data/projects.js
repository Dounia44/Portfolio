import ridingcities from "../assets/images/ridingcities.webp";
import kasa from "../assets/images/kasa.webp";
import booki from "../assets/images/booki.webp";
import argentBank from "../assets/images/argent-bank.webp";

const projects = [
  {
    id: 1,
    name: "Riding Cities",
    description:
      "Un projet qui consiter à mettre à jour la page web de l’association Riding Cities.L'objecti était d'intégrer une nouvelle section à partir d'une maquette Figma",
    image: ridingcities,
    stack: "HTML, CSS, Figma, Visual Studio Code",
    objectifs:
      "Créer et mettre à jour la page web, ajouter la section “Les membres fondateurs” et modifier la section de téléchargement pour enfants et adultes.",
    competences:
      "Intégration HTML, adaptation de code existant, application de classes CSS, gestion de sections avec images et boutons, utilisation de Figma et VS Code.",
    resultats:
      "Page conforme à la maquette, section fondateurs intégrée, deux boutons de téléchargement fonctionnels et stylisés.",
    perspectives: "Optimiser accessibilité et SEO.",
  },

  {
    id: 2,
    name: "Booki",
    description:
      "Dans ce projet, j’ai créer la page d’accueil de l’agence de voyage Booki à partir de maquettes Figma. L'objectif était de transformer le design en une interface web fonctionnelle et responsive, offrant uneexpérience agréable sur tous les types d’écrans, qu’il s’agisse de desktop, de tablette ou de mobile..",
    image: booki,

    stack: "HTML5, CSS3, Flexbox, Figma, Visual Studio Code, Git",

    objectifs:
      "Intégrer fidèlement la page d’accueil en respectant les maquettes desktop, tablette et mobile, mettre en place une structure HTML sémantique et gérer la mise en page avec Flexbox.",

    competences:
      "Découpage et analyse de maquette, intégration HTML sémantique, mise en page avec Flexbox, création de cartes et composants, responsive design, validation du code avec W3C.",

    resultats:
      "Page d’accueil fonctionnelle et responsive, sections hébergements, filtres, activités et footer intégrées, affichage cohérent sur tous les formats d’écran.",

    perspectives:
      "Ajout d’interactions JavaScript (recherche dynamique, filtres), amélioration de l’accessibilité (ARIA, navigation clavier), optimisation des performances et SEO.",
  },

  {
    id: 3,
    name: "Kasa",
    description:
      "Une application web de location immobilière développée en React à partir de maquettes Figma et de données simulées.",
    image: kasa,
    stack: "React, React Router, JavaScript, Vite, Sass (SCSS), Figma, Git",
    objectifs:
      "Développer l’ensemble du front-end avec React, mettre en place le routage avec React Router, créer les composants de l’interface, gérer les états dynamiques (carrousel, menus déroulants) et respecter fidèlement les maquettes.",
    competences:
      "Création d’une application React complète, utilisation de React Router, développement de composants réutilisables, gestion des états et événements, intégration Figma, structuration du CSS avec Sass.",
    resultats:
      "Application fonctionnelle permettant de consulter des annonces, naviguer entre les pages, afficher des galeries dynamiques, gérer des menus animés et afficher une page 404.",
    perspectives:
      "Connexion à une vraie API, ajout de recherche et filtres, optimisation des performances et du SEO, amélioration de l’accessibilité et des animations.",
  },

  {
    id: 4,
    name: "Argent Bank",
    description:
      "Front-end de l’application bancaire ArgentBank développé en React, avec tableau de bord interactif et responsive, intégration des données via API et gestion globale avec Redux.",
    image: argentBank,
    stack: "React, Redux, JavaScript, HTML, CSS, Swagger, Git/GitHub",
    objectifs:
      "Implémenter un tableau de bord bancaire responsive et intuitif, connecter le front-end aux API REST, gérer l’état global avec Redux et assurer une expérience utilisateur cohérente sur tous les appareils.",
    competences:
      "Maîtrise de React pour interfaces interactives, gestion de l’état global avec Redux, consommation d’API REST, structuration et organisation d’une application complexe, bonnes pratiques pour code maintenable et scalable.",
    resultats:
      "Tableau de bord complet et responsive, intégration réussie des données utilisateurs via API, application réactive avec gestion des états et interactions intuitives.",
    perspectives:
      "Ajouter des animations pour améliorer l’expérience utilisateur, mise en place d’authentification sécurisée, optimisation des performances, amélioration de l’accessibilité.",
  },
];

export default projects;
