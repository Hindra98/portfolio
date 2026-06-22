import { personnalProjects } from "../assets";

export const profile = {
  name: "Fotsing Waffeu Vadiny Pherlin",
  shortName: "Vadiny Fotsing",
  alias: "Hindra98",
  role: { fr: "Développeur Web", en: "Web Developer" },
  emails: ["vadinyfotsing@gmail.com"],
  phones: ["+237 655 39 47 65", "+237 676 27 98 16"],
  location: { fr: "Nyalla, Douala — Cameroun", en: "Nyalla, Douala — Cameroon" },
  linkedin: "https://linkedin.com/in/vadinyfotsing",
  github: "https://github.com/hindra98",
};

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Redux", "Syncfusion", "Bootstrap", "HTML5", "CSS3/SCSS"],
  backend: ["PHP", "Symfony", "Node.js", "REST API", "Supabase"],
  db: ["PostgreSQL", "MySQL"],
  devops: ["Git/GitHub", "Azure DevOps", "CI/CD", "VS Code", "Microsoft 365"],
  method: ["Agile/Scrum", "Clean Code", "Design Patterns", "RBAC", "Workflows métier"],
};

export const experiences = [
  {
    company: "NextGet Consulting",
    url: "https://nextget-consulting.vercel.app/",
    role: { fr: "Développeur ReactJS", en: "ReactJS Developer" },
    period: { fr: "Fév. 2024 — Juin 2026", en: "Feb 2024 — June 2026" },
    bullets: {
      fr: [
        "Conçu et développé le progiciel logistique OctopusFX (ERP métier) en React/TypeScript avec Syncfusion.",
        "Mis en place un module RBAC (rôles, permissions, accès).",
        "Workflows logistiques complets : enregistrement, étiquetage, embarquement, suivi, retrait de colis.",
        "Planification des voyages avec calendrier interactif et synchronisation conducteurs/véhicules.",
        "Pipelines CI/CD sur Azure DevOps, revues de code et encadrement de stagiaires.",
      ],
      en: [
        "Designed and built OctopusFX logistics ERP in React/TypeScript with Syncfusion.",
        "Implemented an RBAC module (roles, permissions, access).",
        "Full logistics workflows: registration, labeling, loading, tracking, package pickup.",
        "Trip planning with interactive calendar synced with drivers and vehicles.",
        "CI/CD pipelines on Azure DevOps, code reviews and mentoring interns.",
      ],
    },
    stack: ["React", "TypeScript", "Redux", "Syncfusion", "Tailwind", "Azure DevOps"],
  },
  {
    company: "Klapeers",
    url: "https://business.klapeers.com",
    role: { fr: "Développeur Front-end", en: "Front-end Developer" },
    period: { fr: "Oct. 2023 — Jan. 2024", en: "Oct 2023 — Jan 2024" },
    bullets: {
      fr: [
        "Analysé, modélisé et conçu des systèmes d'informations en architecture micro-services.",
        "Maintenance et revues de code pour garantir qualité et performance.",
      ],
      en: [
        "Analyzed, modeled and designed information systems with micro-services architecture.",
        "Maintenance and code reviews to ensure quality and performance.",
      ],
    },
    stack: ["React", "TypeScript", "Axios", "TailwindCSS"],
  },
  {
    company: "IFPIA",
    url: "https://ifpia.xyz",
    role: { fr: "Formateur développement web", en: "Web Dev Trainer" },
    period: { fr: "Oct. 2022 — Mai 2023", en: "Oct 2022 — May 2023" },
    bullets: {
      fr: [
        "Conçu et implémenté des plateformes web complètes.",
        "Formé sur React, Symfony, WordPress, Git, UML et bases de données.",
      ],
      en: [
        "Designed and implemented complete web platforms.",
        "Trained on React, Symfony, WordPress, Git, UML and databases.",
      ],
    },
    stack: ["React", "Node.js", "PHP", "Symfony", "Firebase", "Bootstrap"],
  },
];

export const education = [
  { year: "2021-2022", school: "Université de Yaoundé I", diploma: { fr: "Master I Informatique — Science des données", en: "Master I in Computer Science — Data Science" } },
  { year: "2020-2021", school: "Université de Douala", diploma: { fr: "Licence Informatique — Systèmes embarqués", en: "Bachelor in Computer Science — Embedded Systems" } },
  { year: "2014-2015", school: "Lycée de Japoma", diploma: { fr: "Baccalauréat C", en: "Baccalaureate C" } },
];

export const projects = [
  {
    name: "Hindra Auth",
    url: "https://hindra-auth.vercel.app/oauth/signin",
    tag: { fr: "Auth · OAuth", en: "Auth · OAuth" },
    desc: { fr: "Concept d'application d'authentification inspirée de Google.", en: "Authentication app concept inspired by Google." },
    accent: "tech",
    logo: personnalProjects.hindra_auth_logo,
    illustration: personnalProjects.hindra_auth_bg,
  },
  {
    name: "Hindra Exchange Service",
    url: "https://hindra-exchange-service.vercel.app/",
    tag: { fr: "Emploi · Cameroun", en: "Jobs · Cameroon" },
    desc: { fr: "Offres d'emploi dédiées aux métiers de classes inférieures à 7, souvent lésés au Cameroun.", en: "Job board dedicated to workers from class 1–6, often overlooked in Cameroon." },
    accent: "sharingan",
    logo: personnalProjects.hindra_exchange_logo,
    illustration: personnalProjects.hindra_exchange_bg,
  },
  {
    name: "First Page",
    url: "https://first-page-hindra.vercel.app/",
    tag: { fr: "Réseau social", en: "Social network" },
    desc: { fr: "Partage tes moments, chatte avec tes amis, fais de nouvelles rencontres.", en: "Share your moments, chat with friends, meet new people." },
    accent: "tech",
    logo: personnalProjects.mypage_logo,
    illustration: personnalProjects.mypage_bg,
  },
  {
    name: "Laila & Randy Wedding",
    url: "https://laila-randy-wedding.vadinyfotsing.workers.dev",
    tag: { fr: "Mariage · Évènement", en: "Wedding · Event" },
    desc: { fr: "Plateforme de gestion de mariage pour digitaliser l'union de deux personnes.", en: "Wedding management platform to digitize the union of two people." },
    accent: "sharingan",
    logo: personnalProjects.wedding_logo,
    illustration: personnalProjects.wedding_bg,
  },
  {
    name: "H-Guide",
    url: "https://h-guide.vercel.app/",
    tag: { fr: "Annuaire entreprises", en: "Company directory" },
    desc: { fr: "Informations d'entreprises de par le monde avec filtrage.", en: "Worldwide company information with basic filtering." },
    accent: "tech",
    logo: personnalProjects.kguide_logo,
    illustration: personnalProjects.kguide_bg,
  },
  {
    name: "Afrochic — Afritude",
    url: null,
    tag: { fr: "E-commerce", en: "E-commerce" },
    desc: { fr: "Boutique de vêtements africains avec retrait en Europe et Amérique.", en: "African clothing shop with pickup points in Europe and America." },
    accent: "sharingan",
    logo: personnalProjects.afrochic_logo,
    illustration: personnalProjects.afrochic_bg,
  },
];

export const packageLoader = 
{
  "name": "portfolio",
  "description": "Portfolio de Hindra98, Description numérique des expériences, formations, compétences et savoir-faires de Hindra98",
  "author": "Hindra98 - vadinyfotsing@gmail.com",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "test": "vitest",
    "dev-host": "vite --host",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "framer-motion": "^12.23.24",
    "i18next": "^24.2.1",
    "i18next-browser-languagedetector": "^8.0.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-i18next": "^15.4.0",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.3",
    "react-typed": "^2.0.12"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@tailwindcss/vite": "^4.3.0",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/react": "^16.2.0",
    "@types/node": "^22.13.10",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "js-file-download": "^0.4.12",
    "postcss": "^8.5.15",
    "tailwindcss": "^4.3.0",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.18.2",
    "vite": "^6.0.5",
    "vitest": "^3.0.3"
  }
}
