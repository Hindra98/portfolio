import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traductions disponibles
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my portfolio!",
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

      // Experience
      name0: "Mendji",
      ppCompany0: "Université de Yaoundé",
      ppDescription0: "Implemented a travel planner, conducted code reviews, and mentored trainees.",
      ppPeriod0: "February 2024 to February 2025",

      name1: "Front End Developer",
      ppCompany1: "Université de Douala",
      ppDescription1: "Analyzed and designed information systems using micro-service architecture.",
      ppPeriod1: "October 2023 to January 2024",

      name2: "Web Development Trainer",
      ppCompany2: "Université de Douala",
      ppDescription2: "Designed and implemented web platforms using various technologies.",
      ppPeriod2: "October 2022 to May 2023",

      // Experience
      role0: "ReactJS Developer",
      company0: "Nextget Consulting",
      description0: "Implemented a travel planner, conducted code reviews, and mentored trainees.",
      period0: "February 2024 to February 2025",

      role1: "Front End Developer",
      company1: "Klapeers",
      description1: "Analyzed and designed information systems using micro-service architecture.",
      period1: "October 2023 to January 2024",

      role2: "Web Development Trainer",
      company2: "IFPIA (Institut de Formation Professionnelle Internationale Algorithme)",
      description2: "Designed and implemented web platforms using various technologies.",
      period2: "October 2022 to May 2023",

      // Skills
      descriptionSkill: "Proficient in various technologies",
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
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue dans mon portfolio!",
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

      // Experience
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
      descriptionSkill: "Proficient in various technologies",
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

    },
  },
};

// Configuration i18n
i18n
  .use(LanguageDetector) // Détecte la langue de l'utilisateur
  .use(initReactI18next) // Initialise avec React
  .init({
    resources,
    fallbackLng: "en", // Langue par défaut si non détectée
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement
    },
  });

export default i18n;
