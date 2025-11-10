import { useTranslation } from "react-i18next";
import { ComponentCard } from "../ComponentCard";
import { ComponentItem } from "../../../types";
import { useState } from "react";

const ToggleThemeComponent = () => {
  const { t } = useTranslation();
  const components: ComponentItem[] = [
    {
      name: t("toggleOne"),
      children: <ToggleThemeOne />,
    },
    {
      name: t("toggleTwo"),
      children: <ToggleThemeTwo />,
    },
  ];
  return (
    <section
      id="theme"
      className="flex flex-col overflow-hidden relative z-0 gap-10 justify-center items-center py-10 w-full"
    >
      <h2 className="w-full xmd:text-4xl xs:text-xl font-bold py-4">
        {t("theme")}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {components.map((component, index) => (
          <ComponentCard key={index} component={component} idx={index} />
        ))}
      </div>
    </section>
  );
};

const ToggleThemeOne = () => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div
      className={`flex w-full h-full justify-center items-center ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`px-2 rounded-full focus:outline-none flex justify-center items-center size-10 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        {theme === "light" ? (
          <span className="icon moon-1icon- text-yellow-500 text-2xl"></span>
        ) : (
          <span className="icon sun-filledicon- text-yellow-500 text-2xl"></span>
        )}
      </button>
    </div>
  );
};

const ToggleThemeTwo = () => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );
  const handleToggle = () => {
    setTheme((prevTheme) =>
      prevTheme === "light"
        ? "dark"
        : "light"
    );

  };
  return (
    <div
      className={`flex w-full h-full justify-center items-center ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <label
        htmlFor="theme-toggle"
        className="relative inline-block w-14 h-8 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-200 dark:bg-gray-700"
      >
        {/* L'input checkbox caché */}
        <input
          id="theme-toggle"
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggle}
          className="sr-only peer" // sr-only cache visuellement l'input, mais le rend accessible
        />

        {/* L'indicateur (la pastille) 
          Il bascule entre les icônes et se déplace avec la propriété 'translate-x'
        */}
        <span
          className={`absolute left-0 top-0 h-8 w-14 rounded-full transition-all duration-300 pointer-events-none overflow-hidden
          ${theme === "dark" ? "bg-indigo-600" : "bg-yellow-400"}`}
        >
          {/* Etoile pour la nuit */}
          {theme === "dark" && (
            <span className="relative w-full h-full flex">
              <i className="absolute flex rounded-full bg-white/30 shadow size-1.5 top-1 left-7/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow size-0.5 top-2/12 left-1/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow size-1.5 top-2/12 left-4/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow size-1 top-6/12 left-1"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow size-1.5 top-8/12 left-4/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow size-0.5 top-9/12 left-1/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow size-1.5 top-10/12 left-10/12"></i>
            </span>
          )}
          {/* Icône de soleil/lune pour l'indicateur */}
          <div
            className={`absolute w-6 h-6 rounded-full top-1 transition-transform duration-300 flex items-center justify-center 
              ${
                theme === "dark"
                  ? "translate-x-full left-1 bg-gray-800"
                  : "translate-x-0 left-1 bg-white"
              }`}
          >
            {/* Icône: Lune 🌙 (Mode Dark/Sombre) || Soleil ☀️ (Mode Light/Clair) */}
            {theme === "dark" ? (
              <span role="img" aria-label="moon" className="text-xl">
                🌙
              </span>
            ) : (
              <span role="img" aria-label="sun" className="text-xl">
                ☀️
              </span>
            )}
          </div>
        </span>

        {/* L'ombre de la piste pour le thème sombre (déplacée à gauche) */}
        <span
          className={`absolute left-1 top-1 h-6 w-6 rounded-full transition-transform duration-300 
            ${theme === "dark" ? "translate-x-full" : "translate-x-0"}`}
        ></span>
      </label>
    </div>
  );
};

export default ToggleThemeComponent;
