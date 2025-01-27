import * as React from "react";
import { useTranslation } from "react-i18next";
import profile from "../assets/img/profile.jpg"
import LanguageToggle from "./LanguageToggle";

export const Header: React.FC = () => {
  const { t } = useTranslation();
    const [theme, setTheme] = React.useState<string>(
      () => localStorage.getItem("theme") || "light"
    );
  
    // Appliquer le thème au `document` et sauvegarder la préférence
    React.useEffect(() => {
      document.documentElement.className = theme; // Ajoute la classe au root
      localStorage.setItem("theme", theme); // Sauvegarde dans le localStorage
    }, [theme]);
  
    // Fonction pour basculer entre les modes
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
  
  return (
    <header className="flex overflow-hidden sticky inset-x-0 ps-5 top-0 z-10 flex-wrap gap-5 justify-center items-center w-full h-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-[80px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] dark:shadow-[0px_0px_6px_rgba(256,256,256,0.12)] max-md:max-w-full">
      <a href={"/"} className="flex items-center justify-center size-16">
        <img src={profile} alt="Mon profil" className="w-full h-full block rounded-full" />
      </a>
      <div className="flex-1 shrink self-stretch my-auto text-3xl font-medium leading-none basis-0 max-md:max-w-full"/>
      <nav className="flex gap-10 justify-center items-center self-stretch my-auto text-base whitespace-nowrap p-5 min-w-[240px]">
        {["Home", "About", "Experience", "Skills", "Contact"].map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase()}`}
            className="self-stretch my-auto hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {t(item.toLowerCase())}
          </a>
        ))}
        <div className="flex gap-4">
          <button
            onClick={toggleTheme}
            className="px-2 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none flex justify-center items-center size-10"
          >
            {theme === "light" ? (
              <span className="icon moon-1icon- text-yellow-500 text-2xl"></span>
            ) : (
              <span className="icon sun-filledicon- text-yellow-500 text-2xl"></span>
            )}
          </button>
          <LanguageToggle/>
        </div>
      </nav>
    </header>
  );
};
