import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../locales/i18n"; // Import du fichier de configuration
import { PortfolioConstants } from "./constants";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const [langage, setLangage] = useState<string>(
    () => localStorage.getItem(PortfolioConstants.USER_LANGUAGE) || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(langage);
    localStorage.setItem(PortfolioConstants.USER_LANGUAGE, langage);
  }, [langage, i18n]);

  return (
    <select
      onChange={(e) => setLangage(e.target.value)}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded focus:outline-none cursor-pointer"
    >
      <option value="en" selected={langage === "en"}>
        {t("english")}
      </option>
      <option value="fr" selected={langage === "fr"}>
        {t("french")}
      </option>
    </select>
  );
};

export default LanguageToggle;
