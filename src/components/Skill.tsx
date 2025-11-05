import { useTranslation } from "react-i18next";
import { skills } from "../data/portfolioData";
import { ComponentHeader } from "./ComponentHeader";
import { SkillCard } from "./SkillCard";

export const Skill = () => {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="xmd:relative flex flex-col xmd:flex-row xmd:gap-10 gap-4 justify-between z-0 w-full h-fit py-10"
    >
      <ComponentHeader
        title={t("skills")}
        description={t("descriptionSkill")}
      />

      <div className="grid xmd:grid-cols-3 grid-cols-1 gap-4 justify-items-stretch w-full h-full">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};
