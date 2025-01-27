import * as React from "react";
import { Header } from "./components/Header";
import { ExperienceCard } from "./components/ExperienceCard";
import { SkillCard } from "./components/SkillCard";
import { ContactCard } from "./components/ContactCard";
import { experiences, skills, contactInfo } from "./data/portfolioData";

export const Portfolio: React.FC = () => {
  return (
    <div className="flex relative flex-col pt-20 ">
      <Header />

      <main>
        <section
          id="home"
          className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full"
        >
          <div className="flex z-0 shrink-0 self-stretch my-auto bg-zinc-300 bg-opacity-50 h-[100px] rounded-[50px] w-[100px]" />
          <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto text-black basis-0 min-w-[240px] max-md:max-w-full">
            <h1 className="text-lg font-bold leading-none max-md:max-w-full">
              Vadiny Pherlin Fotsing
            </h1>
            <div className="flex overflow-hidden gap-1.5 items-center mt-3 w-full text-xs leading-none max-md:max-w-full">
              <div className="overflow-hidden gap-0.5 self-stretch px-1 py-0.5 my-auto rounded-sm border border-solid bg-zinc-300 bg-opacity-50 border-black border-opacity-10">
                ReactJS Developer
              </div>
            </div>
            <p className="mt-3 text-base max-md:max-w-full">
              Dynamism, adaptability, team spirit
            </p>
          </div>
          <div className="flex overflow-hidden z-0 flex-col self-stretch my-auto w-40 text-base font-medium">
            <a
              href="#contact"
              className="p-3 w-40 max-w-full text-black whitespace-nowrap rounded-lg border border-black border-solid hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Contact
            </a>
            <button className="p-3 mt-3 w-40 max-w-full text-white bg-black rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Mon cv
            </button>
          </div>
        </section>

        <section
          id="experience"
          className="flex overflow-hidden relative z-0 flex-col justify-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full"
        >
          <h2 className="w-full text-4xl font-bold leading-tight text-center text-black whitespace-nowrap max-md:max-w-full">
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
          <div className="flex z-0 gap-10 justify-center items-center w-full text-center text-black max-md:max-w-full">
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
          <h2 className="flex-1 shrink self-stretch my-auto text-4xl font-bold leading-tight text-black whitespace-nowrap min-w-[240px] max-md:max-w-full">
            Contact
          </h2>
          <div className="flex z-0 flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            {contactInfo.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
        </section>
      </main>

      <footer className="flex overflow-hidden z-0 gap-10 justify-center items-center p-16 w-full text-xl leading-7 text-center text-black max-md:px-5 max-md:max-w-full">
        <div className="gap-10 self-stretch my-auto min-h-[100px] min-w-[240px] w-[455px] max-md:max-w-full">
          © 2023 Vadiny Pherlin Fotsing | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};
