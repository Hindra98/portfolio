import { useTranslation } from "react-i18next";
import { skills } from "../data/portfolioData";
import { ComponentHeader } from "./ComponentHeader";
import { SkillCard } from "./SkillCard";

export const Skill = () => {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="xmd:relative xmd:grid xs:flex xs:flex-col xl:grid-cols-5 xmd:grid-cols-12 xl:gap-28 xmd:gap-10 xs:gap-4 justify-between z-0 w-full h-fit py-10"
    >
      <ComponentHeader
        title={t("skills")}
        description={t("descriptionSkill")}
      />

      <div className="grid xmd:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 xl:col-span-2 xmd:col-span-7 gap-4 justify-items-stretch w-full h-full">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};
