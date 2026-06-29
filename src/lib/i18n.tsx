import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, string | string[]>;

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.projects": "Projets",
  "nav.components": "Composants",
  "nav.contact": "Contact",
  "nav.cv": "CV",

  "hero.tag": "Analyste Développeur Fullstack · Cameroun",
  "hero.title": "Je conçois des interfaces",
  "hero.title2": "performantes & vivantes.",
  "hero.subtitle": "Développeur ReactJS / TypeScript avec 3+ ans d'expérience sur des applications web complexes et des progiciels métier (ERP logistique, plateformes sociales, e-commerce).",
  "hero.cta.projects": "Voir mes projets",
  "hero.cta.contact": "Me contacter",
  "hero.stat1": "années d'expérience",
  "hero.stat2": "projets livrés",
  "hero.stat3": "technologies maîtrisées",

  "about.title": "À propos",
  "about.kicker": "Profil",
  "about.body": "Développeur web polyvalent passionné par l'architecture logicielle propre, les workflows métier complexes et les interfaces qui respirent. Du backend Symfony aux dashboards React/Syncfusion, j'aime livrer du logiciel utile, robuste et élégant.",
  "about.traits": "Rigueur · Leadership · Adaptabilité · Communication · Autonomie",

  "skills.title": "Compétences",
  "skills.kicker": "Stack technique",
  "skills.frontend": "Frontend",
  "skills.backend": "Backend",
  "skills.db": "Bases de données",
  "skills.devops": "DevOps & Outils",
  "skills.method": "Méthodologies",

  "exp.title": "Parcours professionnel",
  "exp.kicker": "Expérience",
  "exp.present": "Présent",

  "edu.title": "Formation",
  "edu.kicker": "Académique",

  "projects.title": "Projets personnels",
  "projects.kicker": "Réalisations",
  "projects.subtitle": "Une sélection d'expérimentations et de produits déployés.",
  "projects.visit": "Visiter",
  "projects.soon": "Bientôt disponible",
  "projects.all": "Tous mes projets",
  "archive": "Archivé",

  "components.title": "Composants",
  "components.kicker": "Lab interne",
  "components.subtitle": "Quelques composants React que j'ai conçus et que je réutilise sur mes projets.",
  "components.upload": "Upload de fichiers",
  "components.upload.desc": "Drop zone avec illustration des fichiers, validation des types/tailles et suppression des fichiers non conformes.",
  "components.modal": "Modale",
  "components.modal.desc": "Modale composable, animée, accessible — overlay flou et tailles fluides.",
  "components.modal.open": "Ouvrir la modale",
  "components.inputs": "Inputs",
  "components.inputs.desc": "Champs texte, mot de passe, OTP, recherche — états focus / erreur / succès cohérents.",
  "components.media": "Lecteurs média",
  "components.media.desc": "Lecteur audio, vidéo et galerie d'images avec contrôles personnalisés.",
  "components.theme": "Sélecteurs de thème",
  "components.theme.desc": "Deux variantes (bouton & switch) qui basculent uniquement le mode de la carte — étoiles, lune et soleil intégrés.",
  "components.loaders": "Loaders",
  "components.loaders.desc": "Quatre indicateurs linéaires et quatre indicateurs circulaires animés en boucle infinie.",
  "contact.whatsapp": "WhatsApp",

  "contact.title": "Travaillons ensemble",
  "contact.kicker": "Contact",
  "contact.subtitle": "Une idée, un poste, une collaboration ? Écrivez-moi.",
  "contact.email": "E-mail",
  "contact.phone": "Téléphone",
  "contact.location": "Localisation",
  "contact.form.name": "Votre nom",
  "contact.form.email": "Votre e-mail",
  "contact.form.message": "Votre message",
  "contact.form.send": "Envoyer",
  "contact.form.sent": "Message prêt ! Votre client e-mail va s'ouvrir.",

  "footer.rights": "Tous droits réservés.",
  "footer.built": "Conçu et codé avec",

  "cv.download.fr": "Télécharger CV (FR)",
  "cv.download.si": "Télécharger CV (SI/ERP)",
};

const en: Dict = {
  "nav.home": "Home",
  "nav.projects": "Projects",
  "nav.components": "Components",
  "nav.contact": "Contact",
  "nav.cv": "Resume",

  "hero.tag": "Full-Stack Developer Analyst · Cameroon",
  "hero.title": "I build interfaces that are",
  "hero.title2": "fast & alive.",
  "hero.subtitle": "ReactJS / TypeScript developer with 3+ years of experience building complex web apps and business software (logistics ERP, social platforms, e-commerce).",
  "hero.cta.projects": "See my work",
  "hero.cta.contact": "Get in touch",
  "hero.stat1": "years of experience",
  "hero.stat2": "shipped projects",
  "hero.stat3": "technologies mastered",

  "about.title": "About",
  "about.kicker": "Profile",
  "about.body": "Versatile web developer passionate about clean architecture, complex business workflows and interfaces that breathe. From Symfony backends to React/Syncfusion dashboards, I love shipping software that is useful, robust and elegant.",
  "about.traits": "Rigor · Leadership · Adaptability · Communication · Autonomy",

  "skills.title": "Skills",
  "skills.kicker": "Tech stack",
  "skills.frontend": "Frontend",
  "skills.backend": "Backend",
  "skills.db": "Databases",
  "skills.devops": "DevOps & Tools",
  "skills.method": "Methodologies",

  "exp.title": "Career path",
  "exp.kicker": "Experience",
  "exp.present": "Present",

  "edu.title": "Education",
  "edu.kicker": "Academic",

  "projects.title": "Personal projects",
  "projects.kicker": "Selected work",
  "projects.subtitle": "A curated selection of experiments and shipped products.",
  "projects.visit": "Visit",
  "projects.soon": "Coming soon",
  "projects.all": "All my projects",
  "archive": "Archived",

  "components.title": "Components",
  "components.kicker": "Internal lab",
  "components.subtitle": "A few React components I've designed and reuse across projects.",
  "components.upload": "File upload",
  "components.upload.desc": "Drop zone with file illustrations, type/size validation and auto-removal of invalid files.",
  "components.modal": "Modal",
  "components.modal.desc": "Composable, animated, accessible modal — blurred overlay and fluid sizing.",
  "components.modal.open": "Open modal",
  "components.inputs": "Inputs",
  "components.inputs.desc": "Text, password, OTP, search fields — consistent focus / error / success states.",
  "components.media": "Media players",
  "components.media.desc": "Audio, video and image gallery players with custom controls.",
  "components.theme": "Theme switchers",
  "components.theme.desc": "Two variants (button & switch) toggling only the card's mode — stars, moon and sun included.",
  "components.loaders": "Loaders",
  "components.loaders.desc": "Four linear and four circular indeterminate loaders.",
  "contact.whatsapp": "WhatsApp",

  "contact.title": "Let's work together",
  "contact.kicker": "Contact",
  "contact.subtitle": "An idea, a role, a collaboration? Drop me a line.",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.location": "Location",
  "contact.form.name": "Your name",
  "contact.form.email": "Your email",
  "contact.form.message": "Your message",
  "contact.form.send": "Send",
  "contact.form.sent": "Ready! Your mail client is opening.",

  "footer.rights": "All rights reserved.",
  "footer.built": "Designed and coded with",

  "cv.download.fr": "Download Resume (FR)",
  "cv.download.si": "Download Resume (SI/ERP)",
};

const dicts: Record<Lang, Dict> = { fr, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "fr" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) => {
    const v = dicts[lang][key];
    return typeof v === "string" ? v : key;
  };

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
