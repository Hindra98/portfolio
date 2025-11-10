import * as React from "react";
import { ExperienceItem } from "../types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
    <Link
      to={experience?.url as string}
      target="_blank"
      className="flex md:flex-row flex-col md:gap-10 gap-3 items-stretch w-full px-4 py-2 rounded-sm max-w-[850px] hover:bg-gray-200 hover:dark:bg-gray-800 hover:shadow-lg shadow dark:shadow-white/10"
    >
      <div className="flex md:flex-col flex-row items-center gap-3 md:w-1/2 w-full justify-between">
        <time className="p-1">{t("period" + idx?.toString())}</time>
        <img
          className={`object-contain w-full h-full max-h-32 hidden md:block`}
          src={experience?.picture}
          alt={t("company" + idx?.toString()).split("(")[0].trim()}
        />
        <h5 className="text-lg font-medium tracking-tight italic text-gray-900 dark:text-gray-300 text-opacity-50">
          {t("company" + idx?.toString())}
        </h5>
      </div>
      <div className="flex flex-col gap-3 w-full justify-between">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
          {t("role" + idx?.toString())}
        </h1>
        <p className="font-medium text-justify text-base leading-normal text-gray-700 dark:text-gray-200 line-clamp-5">
          {t("description" + idx?.toString())}
        </p>
        <ul className="flex items-center justify-center flex-wrap gap-2">
          {experience?.skills?.map((skill, idx) => (
            <li
              key={idx}
              className="py-1 px-2 dark:bg-gray-700 bg-gray-300 text-sm rounded-xl"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export const ExperienceCard2: React.FC<ExperienceCardProps> = ({
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
