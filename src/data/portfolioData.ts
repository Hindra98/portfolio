import { ExperienceItem, SkillItem, ContactItem, PersonnalProjectItem } from "../types";

export const personnalProject: PersonnalProjectItem[] = [
  {
    name: "Mendji",
    company: "Université de Yaoundé",
    description:
      "Implemented a travel planner, conducted code reviews, and mentored trainees.",
    period: "February 2024 to February 2025",
    picture: "",
    url: "https://about.me/nextget-consulting",
  },
  {
    name: "Front End Developer",
    company: "Université de Douala",
    description:
      "Analyzed and designed information systems using micro-service architecture.",
    period: "October 2023 to January 2024",
    picture: "",
    url: "https://business.klapeers.com",
  },
  {
    name: "Web Development Trainer",
    company: "Université de Douala",
    description:
      "Designed and implemented web platforms using various technologies.",
    period: "October 2022 to May 2023",
    picture: "",
    url: "https://ifpia.xyz",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "ReactJS Developer",
    company: "Nextget Consulting",
    description:
      "Implemented a travel planner, conducted code reviews, and mentored trainees.",
    period: "February 2024 to February 2025",
    picture: "",
    url: "https://about.me/nextget-consulting",
  },
  {
    role: "Front End Developer",
    company: "Klapeers",
    description:
      "Analyzed and designed information systems using micro-service architecture.",
    period: "October 2023 to January 2024",
    picture: "",
    url: "https://business.klapeers.com",
  },
  {
    role: "Web Development Trainer",
    company: "IFPIA",
    description:
      "Designed and implemented web platforms using various technologies.",
    period: "October 2022 to May 2023",
    picture: "",
    url: "https://ifpia.xyz",
  },
];

export const skills: SkillItem[] = [
  {
    name: "ReactJS",
    level: "Advanced",
    picture: "",
  },
  {
    name: "NodeJS",
    level: "Intermediate",
    picture: "",
  },
  {
    name: "PHP",
    level: "Advanced",
    picture: "",
  },
  {
    name: "Python",
    level: "Intermediate",
    picture: "",
  },
  {
    name: "Java",
    level: "Intermediate",
    picture: "",
  },
];

export const contactInfo: ContactItem[] = [
  { icon: "📧", title: "Email", value: "vadinyfotsing@gmail.com", url: "mailto:vadinyfotsing@gmail.com", },
  { icon: "📞", title: "Phone", value: "+237 655 39 47 65", url: "tel:+237655394765", },
  { icon: "📍", title: "Location", value: "Japoma Nyalla, Douala", url: "https://maps.google.com/", },
];
