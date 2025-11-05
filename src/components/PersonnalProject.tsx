import { personnalProject } from "../data/portfolioData";
import { PersonnalProjectCard } from "./PersonnalProjectCard";
import { useTranslation } from "react-i18next";

export const PersonnalProject = () => {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="flex flex-col overflow-hidden relative z-0 gap-10 justify-center items-center py-10 w-full"
    >
      <h2 className="w-full xl:text-7xl xmd:text-5xl xs:text-4xl font-bold py-4">
        {t("contact")}
      </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {personnalProject.map((project, index) => (
            <PersonnalProjectCard key={index} project={project} />
          ))}
        </div>
    </section>
  );
};
