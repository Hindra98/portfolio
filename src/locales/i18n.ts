import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traductions disponibles
const resources = {
  en: {
    translation: {
      welcome: "Hi! I'm Vadiny Fotsing 👋",
      toggleTheme: "Toggle Theme",
      darkTheme: "Dark Theme",
      lightTheme: "Light Theme",

      // Toggles language
      toggleLanguage: "Change Language",
      english: "English",
      french: "French",

      // Header
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      projects: "Projects",
      fullName: "Vadiny Pherlin Fotsing",

      // Banner
      title: "Web Developer",
      personnality: "Dynamism, adaptability, team spirit",
      cv: "My cv",
      bannerDescription:
        "Web developer with 3 years of experience, i specialize in creating modern, responsive and high-performance websites. With an expertise in fornt-end and back-end, i am comfortable with technologies such as JavaScript/typeScript, PHP, Python, Java, as well as frameworks such as React, Symfony and WordPress. Passionate about solving technical problems, i make a point of honor to produce intuitive and efficient applications. I am always looking for new challenges to improve my skills and contribute to ambitious projects.",
      desc1: "Web developer",
      desc2: "Interfaces and API creator",
      desc3: "Passionate about Tech and mangas",

      // Experience scolaire
      name0: "Mendji",
      ppCompany0: "University of Yaoundé",
      ppDescription0:
        "Implemented a travel planner, conducted code reviews, and mentored trainees.",
      ppPeriod0: "February 2024 to February 2025",

      name1: "Front End Developer",
      ppCompany1: "University of Douala",
      ppDescription1:
        "Analyzed and designed information systems using micro-service architecture.",
      ppPeriod1: "October 2023 to January 2024",

      name2: "Web Development Trainer",
      ppCompany2: "University of Douala",
      ppDescription2:
        "Designed and implemented web platforms using various technologies.",
      ppPeriod2: "October 2022 to May 2023",

      // Experience
      descriptionXP:
        "These experiences have allowed me to develop an expertise in the creation of high performance digital solutions, while improving my skills.",
      role0: "ReactJS Developer",
      company0: "Nextget Consulting",
      description0:
        "Implemented a travel planner, conducted code reviews, and mentored trainees.",
      period0: "February 2024 to February 2025",

      role1: "Front End Developer",
      company1: "Klapeers",
      description1:
        "Analyzed and designed information systems using micro-service architecture.",
      period1: "October 2023 to January 2024",

      role2: "Web Development Trainer",
      company2:
        "IFPIA (Institute of International Professional Training Algorithm)",
      description2:
        "Designed and implemented web platforms using various technologies.",
      period2: "October 2022 to May 2023",

      // Projets personnels
      pname0: "Hindra-auth",
      pDescription0: "An idea for a Google-like app design",
      pLabelTitle0: "Visit the website",
      pname1: "Hindra Exchange",
      pDescription1:
        "In a battle against unemployment in Cameroon, workers from lower classes to 7 are often replaced by workers from higher classes. Here you will be entitled to job offers dedicated only to these",
      pLabelTitle1: "Visit the website",
      pname2: "My Page",
      pDescription2:
        "Social network to share your moments of the day with your friends, chat and meet new people.",
      pLabelTitle2: "Visit the website",
      pname3: "Afrochic",
      pDescription3:
        " Shop selling African clothing 'Afritude' online with pick-up points in Europe and America.",
      pLabelTitle3: "Visit the website",
      pLabelTitle: "Visit the website",

      // Skills
      descriptionSkill:
        "My expertise covers a wide range of technical skills ranging from front-end development to creation of robust back-end solutions.",
      skill0: "ReactJS",
      skill1: "NodeJS",
      skill2: "Python",
      skill3: "PHP",
      skill4: "Java",

      // Levels
      advanced: "Advanced",
      intermediate: "Intermediate",
      beginner: "Beginner",

      // Copyright
      copyright: "All Rights Reserved",

      // Contact
      email: "Email",
      phone: "Phone",
      whatsapp: "Whatsapp",
      location: "Location",
      github: "Github",
      linkedin: "Linkedin",
      twitter: "Twitter",
      instagram: "Instagram",
      opinion: "Give me your opinion 😊",

      socialTitle: "Connect to me",
      contactTitle: "Leave me a message",
      contactDescription:
        "Have something to discuss? Send me a message and let's talk.",
      contactName: "Your name",
      contactEmail: "Your email adress",
      contactRequete: "Your request",
      contactMessage: "Leave a message...",
      contactSubmit: "Send",

      // Page Non trouvée
      pageNotFound: "Page not found",
      pageNotFoundMsg:
        "Sorry we can't find your page, it may have been moved or deleted!",
      pageNotFoundHomeLink: " Back to the homepage",
      pageNotFoundProjectLink: "See my projects",
      pageNotFoundComponentLink: "See my created components",
    },
  },
  fr: {
    translation: {
      welcome: "Salut! Je suis Vadiny Fotsing 👋",
      toggleTheme: "Changer de thème",
      darkTheme: "Mode sombre",
      lightTheme: "Mode clair",

      // Toggles language
      toggleLanguage: "Changer de langue",
      english: "Anglais",
      french: "Français",

      // Header
      home: "Accueil",
      about: "A propos",
      experience: "Expériences",
      skills: "Compétences",
      contact: "Contact",
      projects: "Projets",
      fullName: "Fotsing Vadiny Pherlin",

      // Banner
      title: "Dévélopeur web",
      personnality: "Dynamisme, capacité d’adaptation, esprit d’équipe",
      cv: "Mon cv",
      bannerDescription:
        "Développeur web avec plus de 03ans d'expérience, je me spécialise dans la création des applications web modernes, réactifs et performants. Fort d'une expertise en fornt-end et back-end, je suis à l'aise avec des technologies comme JavaScript/typeScript, PHP, Python, Java, ainsi que des frameworks comme React, Symfony, WordPress. Passionné par la résolution de problèmes techniques, je mets un point d'honneur à produire des applications intuitives et efficaces. Je suis toujours en quête de nouveaux défis pour améliorer mes compétences et contribuer à des projets ambitieux",
      desc1: "Développeur Web",
      desc2: "Créateur d'interfaces et d'API",
      desc3: "Passionné de Tech et de mangas",

      // Experience scolaire
      name0: "Mendji",
      ppCompany0: "Université de Yaoundé",
      ppDescription0:
        "Mise en place d'un planificateur de voyage, révision du code et mentorat des stagiaires.",
      ppPeriod0: "Février 2024 à Février 2025",

      name1: "Front End Developer",
      ppCompany1: "Université de Douala",
      ppDescription1:
        "Analyse et conception de systèmes d'information à l'aide d'une architecture micro-services.",
      ppPeriod1: "Octobre 2023 à Janvier 2024",

      name2: "Web Development Trainer",
      ppCompany2: "Université de Douala",
      ppDescription2:
        "Conception et mise en œuvre de plateformes Web utilisant diverses technologies.",
      ppPeriod2: "Octobre 2022 à Mai 2023",

      // Experience
      descriptionXP:
        "Ces expériences m'ont permis de développer une expertise dans la création de solutions digitales performantes, tout en améliorant mes compétences.",
      role0: "Dévélopeur ReactJS",
      company0: "Nextget Consulting",
      // description0: "Mise en place d’un planificateur de voyages; maintenance, revue de code et mise en place des bonnes pratiques avec l’utilisation de design pattern; Suivi de stagiaires.",
      description0:
        "*Architecture Front-end Complexe : Conception et modélisation complètes de l'application OctopusFX, notamment un planificateur de voyages sophistiqué, en utilisant TypeScript pour la robustesse et Redux pour une gestion d'état prédictive. * Qualité du Code et Maintenabilité : Mise en place des meilleures pratiques (clean code et design patterns) à travers des revues de code systématiques, améliorant significativement la qualité et la performance du Front-end. * Intégration et Déploiement Continu : Contribution active à la gestion des branches et à l'optimisation des pipelines CI/CD sur Azure DevOps, assurant des cycles de déploiement rapides et fiables. * Leadership Technique : Encadrement et mentorat technique de stagiaires, contribuant à l'amélioration de l'efficacité globale de l'équipe de développement",
      period0: "Février 2024 à Février 2025",

      role1: "Dévélopeur Front End",
      company1: "Klapeers",
      description1:
        "Analyse, modélisation et conception des systèmes d’informations sous architecture micro-service.",
      period1: "Octobre 2023 à Janvier 2024",

      role2: "Formateur développement web",
      company2:
        "IFPIA (Institut de Formation Professionnelle Internationale Algorithme)",
      // description2: "Conception et implémentation des plateformes web avec ReactJS, NodeJS, PHP, Firebase",
      description2:
        "Conception Full-Stack : Implémentation de plateformes web complètes depuis le cahier des charges jusqu'au déploiement, utilisant Symfony et NodeJS pour structurer des API RESTful performantes. * Gestion de Bases de Données : Expertise dans l'administration et l'optimisation des systèmes de gestion de bases de données relationnelles (PostgreSQL et MySQL) pour garantir la sécurité et la rapidité des transactions Back-end. * Modélisation et Standardisation : Réalisation de diagrammes UML pour la modélisation précise des systèmes et application de la gestion avancée des dépendances avec npm. * Maîtrise de l'Outillage : Gestion complète des projets et des flux de travail collaboratifs grâce à la maîtrise avancée des branches et des outils Git/GitHub",
      period2: "Octobre 2022 à Mai 2023",

      // Projets personnels
      pname0: "Hindra-auth",
      pDescription0:
        "Une idée de conception d'application ressemblant à Google",
      pLabelTitle0: "Visiter le site",
      pname1: "Hindra Exchange",
      pDescription1:
        "Dans une bataille contre le chômage au Cameroun, les metiers de classes inferieurs à 7 sont souvent lesés pour des metiers de classes superieurs. Ici vous aurez droit à des offres d'emplois dediées uniquement à ceux-ci",
      pLabelTitle1: "Visiter le site",
      pname2: "My Page",
      pDescription2:
        "Réseau social permettant de partager tes moments de la journées avec tes amies, chatter et faire de nouvelles rencontres.",
      pLabelTitle2: "Visiter le site",
      pname3: "Afrochic",
      pDescription3:
        "Boutique de vente de vêtements africains 'Afritude' en ligne avec des points de retrait en Europe et en Amerique.",
      pLabelTitle3: "Visiter le site",
      pLabelTitle: "Visiter le site",

      // Skills
      descriptionSkill:
        "Mon expertise couvre un large éventail de compétences techniques allant du dévéloppement front-end à la création de solutions back-end robustes",
      skill0: "ReactJS",
      skill1: "NodeJS",
      skill2: "Python",
      skill3: "PHP",
      skill4: "Java",

      // Levels
      advanced: "Avancé",
      intermediate: "Intermédiaire",
      beginner: "Débutant",

      // Copyright
      copyright: "Tous droits réservés",

      // Contact
      email: "E-mail",
      phone: "Téléphone",
      whatsapp: "Whatsapp",
      location: "Adresse",
      github: "Github",
      linkedin: "Linkedin",
      twitter: "Twitter",
      instagram: "Instagram",
      opinion: "Donnez-moi votre avis 😊",

      socialTitle: "Connectez-vous à moi",
      contactTitle: "Laissez-moi un message",
      contactDescription:
        "Voulez-vous discuter d'un point précis? Envoyez-moi un message et parlons-en.",
      contactName: "Votre nom",
      contactEmail: "Votre adresse e-mail",
      contactRequete: "Votre requete",
      contactMessage: "Laissez un message...",
      contactSubmit: "Envoyer",

      // Page Non trouvée
      pageNotFound: "Page introuvable",
      pageNotFoundMsg:
        "Désolé nous n'arrivons pas à trouver votre page, celle-ci a peut-être été déplacé ou supprimé!",
      pageNotFoundHomeLink: "Retour à l'accueil",
      pageNotFoundProjectLink: "Voir mes projets",
      pageNotFoundComponentLink: "Voir mes composants crées",
    },
  },
};

// Configuration i18n
i18n
  .use(LanguageDetector) // Détecte la langue de l'utilisateur
  .use(initReactI18next) // Initialise avec React
  .init({
    resources,
    fallbackLng: "fr", // Langue par défaut si non détectée
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement
    },
  });

export default i18n;
