import { useTranslation } from "react-i18next";
import { experiences } from "../data/portfolioData";
import { ExperienceCard } from "./ExperienceCard";
import { ComponentHeader } from "./ComponentHeader";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      className="xmd:relative xmd:grid xs:flex xs:flex-col xl:grid-cols-5 xmd:grid-cols-12 xl:gap-28 xmd:gap-10 xs:gap-4 justify-between z-0 w-full h-fit py-10"
    >
      <ComponentHeader
        title={t("experience")}
        description={t("descriptionXP")}
        // link="experience"
        // linkname="Voir toutes les experiences"
      />

      <div className="grid xmd:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 xl:col-span-2 xmd:col-span-7 gap-4 items-start justify-start w-full h-full">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} idx={index} />
        ))}
      </div>
    </section>
  );
};
