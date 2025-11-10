import * as React from "react";
import { useTranslation } from "react-i18next";
import profile from "../assets/img/profile.jpg";
import LanguageToggle from "./LanguageToggle";
import { Navbar } from "flowbite-react";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = React.useState<string>(
    () => localStorage.getItem("theme") || "light"
  );

  // Appliquer le thème au `document` et sauvegarder la préférence
  React.useEffect(() => {
    document.documentElement.className = theme; // Ajoute la classe au root
    localStorage.setItem("theme", theme);
    localStorage.setItem("flowbite-theme-mode", theme);
  }, [theme]);

  // Fonction pour basculer entre les modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Navbar
      fluid
      rounded
      className="sticky inset-x-0 ps-5 top-0 z-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 shadow-[0px_0px_6px_rgba(0,0,0,0.12)] dark:shadow-[0px_0px_6px_rgba(256,256,256,0.12)]"
    >
      <Navbar.Brand>
        <img
          src={profile}
          alt="Mon profil"
          className="w-12 h-12 rounded-full mr-3"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Hindra
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <div className="flex gap-3 items-center">
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
          <LanguageToggle />
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {[
          "#Home",
          "#About",
          "#Experience",
          "#Projects",
          "#Contact",
          "my-component",
        ].map((item, idx) => (
          <Navbar.Link
            href={`/${item.toLowerCase()}`}
            key={idx}
            className="self-stretch my-auto hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {t(
              item.replace("#","")
                .toLowerCase()
                .split("-")
                .map((it, idx) =>
                  idx === 0
                    ? it
                    : it
                        .split("")
                        .map((i, id) => (id > 0 ? i : i.toUpperCase()))
                        .join("")
                )
                .join("")
            )}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
