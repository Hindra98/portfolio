import * as React from "react";
import { useTranslation } from "react-i18next";
export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col overflow-hidden z-0 justify-center items-center gap-2 py-2 px-8 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
      <hr className="border border-gray-400 dark:border-gray-600 opacity-50 sm:mx-auto text-center w-full" />
      <div className="gap-10 self-stretch">
        &copy; {currentYear} Hindra98 | {t("copyright")}
      </div>
    </footer>
  );
};
