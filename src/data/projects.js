import nina from "../assets/images/nina.webp";
import booki from "../assets/images/booki.webp";
import kasa from "../assets/images/kasa.webp";
import argentBank from "../assets/images/argent-bank.webp";

const projects = [
  {
    id: 1,
    name: "Nina Carducci – Optimisation SEO",
    description:
      "Un projet d’optimisation du référencement, des performances et de l’accessibilité d’un site de photographe.",

    image: nina,

    stack: "HTML5, CSS3, JavaScript, Lighthouse, Wave, Schema.org, OpenGraph",

    objectifs:
      "Analyser les performances et le SEO du site existant, identifier les problèmes via des audits, proposer puis appliquer des optimisations techniques.",

    competences:
      "Audit Lighthouse et Wave, optimisation des images, amélioration de la sémantique HTML, référencement local avec Schema.org, ajout de metas SEO et réseaux sociaux, rédaction d’un rapport d’optimisation.",

    resultats:
      "Scores Lighthouse supérieurs à 90 % en performances, SEO et accessibilité. Site plus rapide, mieux structuré et plus visible sur les moteurs de recherche.",

    perspectives:
      "Mise en place d’un suivi SEO dans le temps, optimisation du contenu éditorial.",

    live: "https://dounia44.github.io/Nina-Carducci/",
    code: "https://github.com/Dounia44/Nina-Carducci",
  },

  {
    id: 2,
    name: "Booki",
    description:
      "Dans ce projet, on a crée la page d’accueil de l’agence de voyage Booki à partir de maquettes Figma. L'objectif était de transformer le design en une interface web fonctionnelle et responsive",
    image: booki,

    stack: "HTML, CSS, Flexbox, Figma, Visual Studio Code, Git",

    objectifs:
      "Intégrer fidèlement la page d’accueil en respectant les maquettes desktop, tablette et mobile, mettre en place une structure HTML sémantique et gérer la mise en page avec Flexbox.",

    competences:
      "Découpage et analyse de maquette, intégration HTML sémantique, mise en page avec Flexbox, création de cartes et composants, responsive design, validation du code avec W3C.",

    resultats:
      "Page d’accueil fonctionnelle et responsive, sections hébergements, filtres, activités et footer intégrées, affichage cohérent sur tous les formats d’écran.",

    perspectives:
      "Améliorer l'aspect graphique et visuel du site pour créer une expérience utilisateur plus agréable, tout en conservant un site performant et accessible.",
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
      "Ajouter un formulaire ou un système de contact pour permettre aux utilisateurs de demander plus d’informations, tout en améliorant l’expérience utilisateur et la réactivité du site.",
    code: "https://github.com/Dounia44/Kasa",
  },

  {
    id: 4,
    name: "Argent Bank",
    description:
      "Le front-end de l’application bancaire ArgentBank développé en React, avec tableau de bord interactif et responsive, intégration des données via API et gestion globale avec Redux.",
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
    code: "https://github.com/Dounia44/ArgentBank-Backend",
  },
];

export default projects;
