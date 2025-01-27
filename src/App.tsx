import React, { useState, useEffect } from "react";
import { Portfolio } from "./Portfolio";
import { useTranslation } from "react-i18next";
import "./assets/fontello/css/fontello.css";
import LanguageToggle from "./components/LanguageToggle";

export const App: React.FC = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );

  // Appliquer le thème au `document` et sauvegarder la préférence
  useEffect(() => {
    document.documentElement.className = theme; // Ajoute la classe au root
    localStorage.setItem("theme", theme); // Sauvegarde dans le localStorage
  }, [theme]);

  // Fonction pour basculer entre les modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-bold">{t("welcome")}</h1>
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
            {/* {theme === 'light' ? '🌙 ' + t('darkTheme') : '☀️ ' + t('lightTheme')} */}
          </button>
          <LanguageToggle/>
        </div>
      </header>
      <main className="p-8">
        <Portfolio />
      </main>
    </div>
  );
};
