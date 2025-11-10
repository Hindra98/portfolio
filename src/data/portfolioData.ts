import {
  ExperienceItem,
  SkillItem,
  ContactItem,
  PersonnalProjectItem,
} from "../types";
import {
  azure,
  bootstrap,
  firebase,
  git,
  github,
  java,
  javascript,
  mysql,
  node,
  office,
  php,
  postgre,
  python,
  react,
  symfony,
  tailwind,
  typescript,
  wordpress,
} from "../assets/img/skills/index";
import hindraAuthLogo from "../assets/img/hindra-auth-logo2.svg";
import hindraAuthUrl from "../assets/img/hindra-auth.jpg";
import hindraExchangeLogo from "../assets/img/hindra-auth-logo2.svg";
import hindraExchangeUrl from "../assets/img/hindra-exchange.jpg";
import mypageLogo from "../assets/img/my-page-logo.jpeg";
import mypageUrl from "../assets/img/my-page.jpg";
import afrochicLogo from "../assets/img/afrochic-logo.jpg";
import afrochicUrl from "../assets/img/afrochic.jpg";
import kguideLogo from "../assets/img/kguide-logo.png";
import kguideUrl from "../assets/img/k-guide.jpg";

export const personnalProject: PersonnalProjectItem[] = [
  {
    name: "Hindra-auth",
    description:
      "Une idée de conception d'application ressemblant à Google",
    picture: hindraAuthUrl,
    logo: hindraAuthLogo,logoName:"Hindra-auth",
    url: "https://hindra-auth.vercel.app/oauth/signin",
    color:"#1e293b",
  },
  {
    name: "Hindra Exchange",
    description:
      "Dans une bataille contre le chômage au Cameroun, les metiers de classes inferieurs à 7 sont souvent lesés pour des metiers de classes superieurs. Ici vous aurez droit à des offres d'emplois dediées uniquement à ceux-ci",
    picture: hindraExchangeUrl,
    logo: hindraExchangeLogo,
    url: "https://hindra-exchange-service.vercel.app/",
    color:"#1e293b",
  },
  {
    name: "My Page",
    description:
      "Réseau social permettant de partager tes moments de la journées avec tes amies, chatter et faire de nouvelles rencontres.",
    picture: mypageUrl,
    logo: mypageLogo,
    url: "https://first-page-hindra.vercel.app/",
    color:"#1e293b",
  },
  {
    name: "Afrochic",
    description:
      "Boutique de vente de vêtements africains 'Afritude' en ligne avec des points de retrait en Europe et en Amerique.",
    picture: afrochicUrl,
    logo: afrochicLogo,
    url: "https://ifpia.xyz",
    color:"#1e293b",
    isArchived:true,
  },
  {
    name: "K-Guide",
    description:
      "Boutique de vente de vêtements africains 'Afritude' en ligne avec des points de retrait en Europe et en Amerique.",
    picture: kguideUrl,
    logo: kguideLogo,
    url: "https://h-guide.vercel.app/",
    color:"#1e293b",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "ReactJS Developer",
    company: "Nextget Consulting",
    description:
      "Implemented a travel planner, conducted code reviews, and mentored trainees.",
    period: "February 2024 to February 2025",
    picture:
      "https://media.licdn.com/dms/image/v2/C560BAQEDNJhTR3S1SA/company-logo_200_200/company-logo_200_200/0/1649600218467/innovative_tech_solutions_sarl_logo?e=2147483647&v=beta&t=AQoAbLIpf3nL35szD9kN1BMlTbiIhSBgECQ_gBQsAYk",
    url: "https://about.me/nextget-consulting",
    skills: [
      "ReactJS",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "Syncfusion",
      "Redux",
      "Axios",
      "Git",
      "Azure DevOps",
    ],
  },
  {
    role: "Front End Developer",
    company: "Klapeers",
    description:
      "Analyzed and designed information systems using micro-service architecture.",
    period: "October 2023 to January 2024",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DnG_2lelPHmsuTIXRmm5VvMfhfOJg81vHcdY3R7_apsXKe0Q-m0SgKIWDTIPcsuTmyY&usqp=CAU",
    url: "https://business.klapeers.com",
    skills: [
      "ReactJS",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "Axios",
    ],
  },
  {
    role: "Web Development Trainer",
    company: "IFPIA",
    description:
      "Designed and implemented web platforms using various technologies.",
    period: "October 2022 to May 2023",
    picture: "https://ifpia.xyz/logo512.png",
    url: "https://ifpia.xyz",
    skills: [
      "ReactJS",
      "JavaScript",
      "NodeJS",
      "PHP",
      "Symfony",
      "Firebase",
      "Axios",
      "Git/Github",
      "Bootstrap",
    ],
  },
];

export const skills: SkillItem[] = [
  {
    name: "ReactJS",
    level: 3,
    picture: "https://wallpapercave.com/wp/wp4924054.jpg",
    pic: react,
  },
  {
    name: "NodeJS",
    level: 2,
    picture: "https://wallpapercave.com/wp/wp6606911.jpg",
    pic: node,
  },
  {
    name: "PHP",
    level: 3,
    picture: "https://wallpapercave.com/wp/wp1958117.jpg",
    pic: php,
  },
  {
    name: "Python",
    level: 2,
    picture: "https://wallpapercave.com/wp/wp7685751.jpg",
    pic: python,
  },
  {
    name: "Java",
    level: 2,
    picture: "https://wallpapercave.com/wp/wp12454867.png",
    pic: java,
  },
  {
    name: "Symfony",
    level: 2,
    picture: "https://wallpapercave.com/wp/wp9574784.jpg",
    pic: symfony,
  },
  {
    name: "Javascript",
    level: 3,
    picture: "https://wallpapercave.com/wp/wp14423533.jpg",
    pic: javascript,
  },
  {
    name: "MySQL",
    level: 3,
    picture: "https://wallpapercave.com/wp/wp7551846.png",
    pic: mysql,
  },
  {
    name: "PostgreSql",
    level: 2,
    picture: "https://wallpapercave.com/wp/wp13366592.png",
    pic: postgre,
  },
  {
    name: "TailwindCSS",
    level: 3,
    picture: "https://wallpapercave.com/wp/wp13639444.png",
    pic: tailwind,
  },
  {
    name: "WordPress",
    level: 1,
    picture: "https://wallpapercave.com/wp/wp6905445.png",
    pic: wordpress,
  },
  {
    name: "TypeScript",
    level: 3,
    picture: "https://wallpapercave.com/wp/wp8882779.png",
    pic: typescript,
  },
  {
    name: "GitHub",
    level: 2,
    picture: "https://wallpapercave.com/wp/wp3082259.png",
    pic: github,
  },
  {
    name: "Git",
    level: 2,
    picture: "https://wallpapercave.com/wp/wp3082278.jpg",
    pic: git,
  },
  {
    name: "Microsoft Azure",
    level: 2,
    picture: "https://wallpapercave.com/wp/wp3734345.png",
    pic: azure,
  },
  {
    name: "Microsoft 365",
    level: 3,
    picture: "https://wallpapercave.com/wp/wp9804863.jpg",
    pic: office,
  },
  {
    name: "Bootstrap",
    level: 3,
    picture: "https://wallpapercave.com/wp/wp5162470.jpg",
    pic: bootstrap,
  },
  {
    name: "Firebase",
    level: 2,
    picture: "https://wallpapercave.com/wp/wp2684265.jpg",
    pic: firebase,
  },
  // {
  //   name: "Delphi",
  //   level: 2,
  //   picture: "https://wallpapercave.com/wp/wp13366592.png",
  // },
  // {
  //   name: "SCSS",
  //   level: 3,
  //   picture: "https://wallpapercave.com/wp/wp13366592.png",
  // },
  // {
  //   name: "Syncfusion",
  //   level: 2,
  //   picture: "https://wallpapercave.com/wp/wp13366592.png",
  // },
  // {
  //   name: "Sqlite",
  //   level: 2,
  //   picture: "https://wallpapercave.com/wp/wp13366592.png",
  // },
];

export const contactInfo: ContactItem[] = [
  {
    icon: "",
    isPrimary: true,
    iconcss: "location-6icon-",
    title: "Location",
    value: "Douala, Cameroun",
    url: "https://www.google.com/maps/?q=Douala,%20Cameroun",
    description: "Me retrouver directement devant ma machine",
  },
  {
    icon: "",
    isPrimary: true,
    iconcss: "mail-alticon-",
    title: "Email",
    value: "vadinyfotsing@gmail.com",
    url: "mailto:vadinyfotsing@gmail.com",
    description: "Laisser moi un mail et je vous repondrai dans de brefs delais",
  },
  {
    icon: "",
    isPrimary: true,
    iconcss: "phone-3icon-",
    title: "Phone",
    value: "+237 655 39 47 65",
    url: "tel:+237655394765",
    description: "Contacter moi directement par appel",
  },
  {
    icon: "",
    isPrimary: true,
    iconcss: "whatsappicon-",
    title: "Whatsapp",
    color: "#0AC266",
    gradient: "from-[#0AC266] to-[#00B577]",
    value: "+237 655 39 47 65",
    url: "https://wa.me/+237655394765",
    description: "Laissez moi un message whatsapp",
  },
  {
    icon: "",
    iconcss: "linkedin-6icon-",
    title: "Linkedin",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    value: "@VadinyFotsing",
    url: "https://linkedin.com/in/vadinyfotsing",
    description: "Mon profil linkedin",
  },
  {
    icon: "",
    iconcss: "github-circled-4icon-",
    title: "Github",
    color: "#999",
    gradient: "from-[#333] to-[#24292e]",
    value: "@hindra98",
    url: "https://github.com/hindra98/",
    description: "Ma page Github",
  },
  // {
  //   icon: "",
  //   iconcss: "twitter-5icon-",
  //   title: "Twitter",
  //   color: "#0A66C2",
  //   gradient: "from-[#0A66C2] to-[#0077B5]",
  //   value: "@VadinyFotsing",
  //   url: "https://x.com/vadinyfotsing",
  //   description: "Ma page twitter",
  // },
  // {
  //   icon: "",
  //   iconcss: "instagramicon-",
  //   title: "Instagram",
  //   color: "#E4405F",
  //   gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  //   value: "@VadinyFotsing",
  //   url: "https://instagram.com/vadinyfotsing",
  //   description: "Mon insta",
  // },
];
