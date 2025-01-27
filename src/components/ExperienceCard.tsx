import * as React from "react";
import { ExperienceItem } from "../types";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  return (
    <div className="flex flex-wrap flex-1 shrink gap-4 justify-center items-start self-stretch p-4 my-auto rounded-md border border-solid basis-0 border-black border-opacity-10 min-w-[240px] max-md:max-w-full">
      <div className="flex overflow-hidden min-h-[100px] w-[100px]">
        <div className="flex flex-1 shrink basis-0 bg-zinc-300 bg-opacity-50 h-[100px] min-h-[100px] w-[100px]" />
      </div>
      <div className="flex flex-col flex-1 shrink text-black basis-0 min-w-[240px]">
        <h3 className="text-xl font-medium leading-snug">{experience.role}</h3>
        <div className="mt-2 text-sm leading-none text-black text-opacity-50">
          {experience.company}
        </div>
        <p className="mt-2 text-base leading-6">{experience.description}</p>
        <div className="flex overflow-hidden gap-1.5 items-center py-1 mt-2 w-full text-xs leading-none">
          <time className="overflow-hidden gap-0.5 self-stretch px-1 py-0.5 my-auto rounded-sm border border-solid bg-zinc-300 bg-opacity-50 border-black border-opacity-10">
            {experience.period}
          </time>
        </div>
      </div>
    </div>
  );
};
