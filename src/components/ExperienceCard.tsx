import * as React from "react";
import { ExperienceItem } from "../types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import Image from "next/image";

interface ExperienceCardProps {
  experience: ExperienceItem;
  idx?: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  idx = 0,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-0 justify-between items-start my-auto rounded-md border border-solid border-black dark:border-zinc-700 border-opacity-10 !min-w-[240px] h-full">
      <div className="flex flex-row md:flex-col gap-0 justify-between items-start">
        <div className="img xs:border-r md:border-r-0 border-b border-solid border-black dark:border-zinc-700 border-opacity-10 text-center flex items-center justify-center w-full h-full">
          <img
            className={`object-cover w-full rounded-t min-h-24 min-w-24`}
            src={experience?.picture}
            alt={t("company" + idx?.toString())}
          />
        </div>
        <div className="flex flex-col gap-4 justify-between items-start overflow-hidden w-full h-full py-2 px-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("role" + idx?.toString())}
          </h1>
          <h5 className="text-lg font-medium tracking-tight italic underline text-gray-900 dark:text-gray-300 text-opacity-50">
            {t("company" + idx?.toString())}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-200 line-clamp-2">
            {t("description" + idx?.toString())}
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden items-center justify-between gap-4 py-2 px-4 w-full">
        <time className="overflow-hidden self-stretch p-1 my-auto rounded-sm bg-zinc-200  dark:bg-zinc-700 bg-opacity-50">
          {t("period" + idx?.toString())}
        </time>
        <Link
          to={experience?.url as string}
          target="_blank"
          className="px-4 py-1 rounded-md flex gap-2 items-center hover:font-bold text-zinc-700 hover:text-zinc-100 bg-zinc-200 hover:bg-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-300 transition-all"
        >
          Visiter <span className="icon right-diricon-"></span>
        </Link>
      </div>
    </div>
  );
};
