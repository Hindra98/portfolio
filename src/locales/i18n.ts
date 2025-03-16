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
      fullName: "Vadiny Pherlin Fotsing",
      
      // Banner
      title: "Web Developer",
      personnality: "Dynamism, adaptability, team spirit",
      cv: "My cv",
      bannerDescription: "Web developer with 3 years of experience, i specialize in creating modern, responsive and high-performance websites. With an expertise in fornt-end and back-end, i am comfortable with technologies such as JavaScript/typeScript, PHP, Python, Java, as well as frameworks such as React, Symfony and WordPress. Passionate about solving technical problems, i make a point of honor to produce intuitive and efficient applications. I am always looking for new challenges to improve my skills and contribute to ambitious projects.",
      desc1:"Web developer",
      desc2:"Interfaces and API creator",
      desc3:"Passionate about Tech and mangas",

      // Experience scolaire
      name0: "Mendji",
      ppCompany0: "University of Yaoundé",
      ppDescription0: "Implemented a travel planner, conducted code reviews, and mentored trainees.",
      ppPeriod0: "February 2024 to February 2025",

      name1: "Front End Developer",
      ppCompany1: "University of Douala",
      ppDescription1: "Analyzed and designed information systems using micro-service architecture.",
      ppPeriod1: "October 2023 to January 2024",

      name2: "Web Development Trainer",
      ppCompany2: "University of Douala",
      ppDescription2: "Designed and implemented web platforms using various technologies.",
      ppPeriod2: "October 2022 to May 2023",

      // Experience
      descriptionXP: "These experiences have allowed me to develop an expertise in the creation of high performance digital solutions, while improving my skills.",
      role0: "ReactJS Developer",
      company0: "Nextget Consulting",
      description0: "Implemented a travel planner, conducted code reviews, and mentored trainees.",
      period0: "February 2024 to February 2025",

      role1: "Front End Developer",
      company1: "Klapeers",
      description1: "Analyzed and designed information systems using micro-service architecture.",
      period1: "October 2023 to January 2024",

      role2: "Web Development Trainer",
      company2: "IFPIA (Institute of International Professional Training Algorithm)",
      description2: "Designed and implemented web platforms using various technologies.",
      period2: "October 2022 to May 2023",

      // Skills
      descriptionSkill: "My expertise covers a wide range of technical skills ranging from front-end development to creation of robust back-end solutions.",
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
      location: "Location",
      github: "Github",
      linkedin: "Linkedin",
      twitter: "Twitter",
      instagram: "Instagram",
      opinion: "Give me your opinion 😊",

      socialTitle: "Connect to me",
      contactTitle: "Leave me a message",
      contactDescription: "Have something to discuss? Send me a message and let's talk.",
      contactName: "Your name",
      contactEmail: "Your email adress",
      contactRequete: "Your request",
      contactMessage: "Leave a message...",
      contactSubmit: "Send",

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
      fullName: "Fotsing Vadiny Pherlin",
      
      // Banner
      title: "Dévélopeur web",
      personnality: "Dynamisme, capacité d’adaptation, esprit d’équipe",
      cv: "Mon cv",
      bannerDescription: "Développeur web avec plus de 03ans d'expérience, je me spécialise dans la création des applications web modernes, réactifs et performants. Fort d'une expertise en fornt-end et back-end, je suis à l'aise avec des technologies comme JavaScript/typeScript, PHP, Python, Java, ainsi que des frameworks comme React, Symfony, WordPress. Passionné par la résolution de problèmes techniques, je mets un point d'honneur à produire des applications intuitives et efficaces. Je suis toujours en quête de nouveaux défis pour améliorer mes compétences et contribuer à des projets ambitieux",
      desc1:"Développeur Web",
      desc2:"Créateur d'interfaces et d'API",
      desc3:"Passionné de Tech et de mangas",

      // Experience scolaire
      name0: "Mendji",
      ppCompany0: "Université de Yaoundé",
      ppDescription0: "Mise en place d'un planificateur de voyage, révision du code et mentorat des stagiaires.",
      ppPeriod0: "Février 2024 à Février 2025",

      name1: "Front End Developer",
      ppCompany1: "Université de Douala",
      ppDescription1: "Analyse et conception de systèmes d'information à l'aide d'une architecture micro-services.",
      ppPeriod1: "Octobre 2023 à Janvier 2024",

      name2: "Web Development Trainer",
      ppCompany2: "Université de Douala",
      ppDescription2: "Conception et mise en œuvre de plateformes Web utilisant diverses technologies.",
      ppPeriod2: "Octobre 2022 à Mai 2023",

      // Experience
      descriptionXP: "Ces expériences m'ont permis de développer une expertise dans la création de solutions digitales performantes, tout en améliorant mes compétences.",
      role0: "Dévélopeur ReactJS",
      company0: "Nextget Consulting",
      description0: "Mise en place d’un planificateur de voyages; maintenance, revue de code et mise en place des bonnes pratiques avec l’utilisation de design pattern; Suivi de stagiaires.",
      period0: "Février 2024 à Février 2025",

      role1: "Dévélopeur Front End",
      company1: "Klapeers",
      description1: "Analyse, modélisation et conception des systèmes d’informations sous architecture micro-service.",
      period1: "Octobre 2023 à Janvier 2024",

      role2: "Formateur développement web",
      company2: "IFPIA (Institut de Formation Professionnelle Internationale Algorithme)",
      description2: "Conception et implémentation des plateformes web avec ReactJS, NodeJS, PHP, Firebase",
      period2: "Octobre 2022 à Mai 2023",

      // Skills
      descriptionSkill: "Mon expertise couvre un large éventail de compétences techniques allant du dévéloppement front-end à la création de solutions back-end robustes",
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
      location: "Adresse",
      github: "Github",
      linkedin: "Linkedin",
      twitter: "Twitter",
      instagram: "Instagram",
      opinion: "Donnez-moi votre avis 😊",


      socialTitle: "Connectez-vous à moi",
      contactTitle: "Laissez-moi un message",
      contactDescription: "Voulez-vous discuter d'un point précis? Envoyez-moi un message et parlons-en.",
      contactName: "Votre nom",
      contactEmail: "Votre adresse e-mail",
      contactRequete: "Votre requete",
      contactMessage: "Laissez un message...",
      contactSubmit: "Envoyer",

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
