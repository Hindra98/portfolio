import { useTranslation } from "react-i18next";
import { experiences } from "../data/portfolioData";
import { ExperienceCard } from "./ExperienceCard";
import { ComponentHeader } from "./ComponentHeader";
import { ExperienceBackground } from "./ExperienceBackground";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      className="xmd:relative flex flex-col xmd:flex-row xmd:gap-10 gap-4 justify-between z-0 w-full h-fit py-10 overflow-hidden"
    >
      <ExperienceBackground />
      <ComponentHeader
        title={t("experience")}
        description={t("descriptionXP")}
        // link="experience"
        // linkname="Voir toutes les experiences"
      />

      <div className="flex flex-col gap-10 items-start justify-start w-full h-full">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} idx={index} />
        ))}
      </div>
    </section>
  );
};
