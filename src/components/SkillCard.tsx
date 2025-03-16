import * as React from "react";
import { SkillItem } from "../types";
import { useTranslation } from "react-i18next";

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 justify-between p-0 my-auto rounded-md border border-solid border-black dark:border-zinc-700 border-opacity-10 h-full hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="img border-none border-r md:border-b flex items-center justify-center p-0">
        <img
          className={`object-cover rounded-t min-h-24`}
          src={skill?.pic}
          alt={skill.name}
        />
      </div>
      <div className="flex flex-col gap-1 justify-end items-center overflow-hidden h-full py-2 px-4">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
          {skill.name}
        </h1>
        <h2 className="text-base font-medium tracking-tight italic underline text-gray-900 dark:text-gray-300 text-opacity-50">
        {skill.level === 3 ? t("advanced") : skill.level === 2 ? t("intermediate") : t("beginner")}
        </h2>
      </div>
    </div>
  );
};
