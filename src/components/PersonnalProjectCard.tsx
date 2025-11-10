import * as React from "react";
import { PersonnalProjectItem } from "../types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PersonnalProjectProps {
  project: PersonnalProjectItem;
  idx?: number;
}

export const PersonnalProjectCard: React.FC<PersonnalProjectProps> = ({
  project,
  idx = 0,
}) => {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col gap-2 min-w-[400px] max-w-[430px] h-72 justify-between my-auto rounded-xl overflow-hidden text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group hover:bg-slate-800">
      <img
        className={`absolute inset-0 object-cover size-full z-0 opacity-50 group-hover:opacity-0 transition-opacity duration-500`}
        src={project?.picture}
        alt={t("pname" + idx?.toString())}
      />
      <span
        className={`flex justify-center items-center absolute inset-0 top-0 left-0 z-10 w-full h-full opacity-20 dark:opacity-30 group-hover:opacity-0 transition-opacity duration-500`}
        style={{ backgroundColor: project?.color }}
      ></span>

      <div className="w-full h-full flex flex-col justify-center items-center gap-2 group-hover:hidden transition-all duration-500 z-20 p-4 text-center">
        <span className="flex items-center gap-2">
          {project.logo && (
            <img
              className={`object-contain w-24 h-16`}
              src={project.logo}
              alt={project.name}
            />
          )}
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        </span>
      </div>
      {project?.isArchived && <span className="flex items-center justify-center absolute w-full h-full text-9xl text-red-500 opacity-50 archive">{t("archive")}</span>}

      <div className="w-full h-full flex-col justify-center items-center gap-4 hidden group-hover:flex transition-opacity duration-500 z-20 py-4 px-8 text-center">
        <p className="text-lg font-medium line-clamp-5">
          {t("pDescription" + idx?.toString())}
        </p>
        {project.url && (
          <Link
            target="_blank"
            to={project.url}
            aria-disabled={project?.isArchived}
            className={`text-base font-medium tracking-tight flex items-center gap-2 rounded-full py-2 px-4 border hover:shadow hover:bg-white/80 hover:text-slate-800 transition-all duration-300 group/link ${project?.isArchived?"pointer-events-none":""}`}
          >
            {project?.labelTitle
              ? t("pLabelTitle" + idx?.toString())
              : t("pLabelTitle")}
              
      {/* External Link */}
      <span className="icon link-exticon- text-sm opacity-0 group-hover/link:opacity-100 transition-all duration-100 transform group-hover/link:translate-x-0 -translate-x-1"></span>
          </Link>
        )}
      </div>
    </div>
  );
};
