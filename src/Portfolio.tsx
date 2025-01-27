import * as React from "react";
import { Header } from "./components/Header";
import { ExperienceCard } from "./components/ExperienceCard";
import { SkillCard } from "./components/SkillCard";
import { ContactCard } from "./components/ContactCard";
import { experiences, skills, contactInfo } from "./data/portfolioData";
import { useTranslation } from "react-i18next";
import profile from "./assets/img/profile.jpg";
import myCv from "./assets/pdf/Vadiny-Fotsing CV-FR.pdf";

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const downloadCv = () => {
    const pdfUrl = myCv;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "cv-hindra.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex relative flex-col">
      <Header />

      <main>
        <section
          id="home"
          className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full"
        >
          <div className="flex z-0 shrink-0 self-stretch my-auto bg-zinc-300 bg-opacity-50 h-[100px] rounded-[50px] w-[100px]">
            <img
              src={profile}
              alt="Profil de Hindra"
              className="size-full block rounded-full"
            />
          </div>
          <div className="flex z-0 flex-col gap-2 flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <h1 className="text-xl font-bold max-md:max-w-full">
              {t("fullName")}
            </h1>
            <div className="flex overflow-hidden items-center w-full max-md:max-w-full">
              <div className="overflow-hidden self-stretch p-1 my-auto rounded-sm text-sm border border-solid bg-zinc-300  dark:bg-zinc-700 bg-opacity-50 border-black dark:border-zinc-500 border-opacity-10">
                {t("title")}
              </div>
            </div>
            <p className="max-md:max-w-full">
              {t("personnality")}
            </p>
          </div>
          <div className="flex overflow-hidden z-0 flex-col gap-3 self-stretch my-auto w-40 text-base font-medium">
            <a
              href="#contact"
              className="p-3 w-40 max-w-full text-black dark:text-white whitespace-nowrap rounded-lg border border-black dark:border-white border-solid hover:bg-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              {t("contact")}
            </a>
            <button
              onClick={downloadCv}
              className="p-3 w-40 max-w-full text-white dark:text-black bg-black dark:bg-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              {t("cv")}
            </button>
          </div>
        </section>

        <section
          id="experience"
          className="flex overflow-hidden relative z-0 flex-col justify-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full"
        >
          <h2 className="w-full text-4xl font-bold leading-tight text-center whitespace-nowrap max-md:max-w-full">
            Experience
          </h2>
          <div className="flex z-0 flex-col justify-center py-5 mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="flex overflow-hidden relative z-0 flex-col justify-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full"
        >
          <div className="flex z-0 gap-10 justify-center items-center w-full text-center max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
              <h2 className="text-4xl font-bold leading-tight max-md:max-w-full">
                Skills
              </h2>
              <p className="mt-6 text-base max-md:max-w-full">
                Proficient in various technologies
              </p>
            </div>
          </div>
          <div className="flex z-0 flex-col justify-center mt-16 w-full whitespace-nowrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full"
        >
          <h2 className="flex-1 shrink self-stretch my-auto text-4xl font-bold leading-tight whitespace-nowrap min-w-[240px] max-md:max-w-full">
            Contact
          </h2>
          <div className="flex z-0 flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            {contactInfo.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
        </section>
      </main>

      <footer className="flex overflow-hidden z-0 gap-10 justify-center items-center p-16 w-full text-xl leading-7 text-center max-md:px-5 max-md:max-w-full">
        <div className="gap-10 self-stretch my-auto min-h-[100px] min-w-[240px] w-[455px] max-md:max-w-full">
          © 2023 Vadiny Pherlin Fotsing | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};
