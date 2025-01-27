import * as React from "react";
import { SkillItem } from "../types";

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink p-4 rounded-md border border-solid basis-0 border-black border-opacity-10 min-w-[240px]">
      <div className="text-base text-black text-opacity-50">{skill.name}</div>
      <div className="mt-1 text-3xl font-medium leading-none text-black">
        {skill.level}
      </div>
    </div>
  );
};
