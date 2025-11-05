import * as React from "react";
import { PersonnalProjectItem } from "../types";
import { Link } from "react-router-dom";

interface PersonnalProjectProps {
  project: PersonnalProjectItem;
}

export const PersonnalProjectCard: React.FC<PersonnalProjectProps> = ({
  project,
}) => {
  return (
    <div className="relative flex flex-col gap-2 w-[430px] h-72 justify-between p-0 my-auto rounded-xl overflow-hidden text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group hover:bg-slate-800">
      <img
        className={`absolute inset-0 object-cover size-full z-0 opacity-50 group-hover:opacity-0 transition-opacity duration-500`}
        src={project?.picture}
        alt={project.name}
      />
      <span
        className={`flex justify-center items-center absolute inset-0 top-0 left-0 z-10 w-full h-full opacity-20 dark:opacity-30 group-hover:opacity-0 transition-opacity duration-500`}
        style={{ backgroundColor: project?.color }}
      ></span>

      <div className="w-full h-full flex flex-col justify-center items-center gap-2 group-hover:hidden transition-all duration-500 z-20 p-4 text-center">
        <span className="flex items-center gap-2">
          {project.logo && (
            <img
              className={`object-contain w-16 h-16`}
              src={project.logo}
              alt={project.name}
            />
          )}
          <h3 className="text-2xl font-bold text-white">
            {project.name}
          </h3>
        </span>
      </div>

      <div className="w-full h-full flex-col justify-center items-center gap-4 hidden group-hover:flex transition-opacity duration-500 z-20 py-4 px-8 text-center">
        <p className="text-lg font-medium tracking-tigh line-clamp-3">
          {project.description}
        </p>
        {project.url && (
          <Link
            target="_blank"
            to={project.url}
            className="text-base font-medium tracking-tight flex rounded-full py-2 px-4 border hover:shadow hover:bg-white/80 hover:text-slate-800 transition-all duration-300"
          >
            {project?.labelTitle || "Visit Website"}
          </Link>
        )}
      </div>
    </div>
  );
};
