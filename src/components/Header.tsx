import * as React from "react";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="flex overflow-hidden absolute inset-x-0 top-0 z-0 flex-wrap gap-5 justify-center items-center p-5 w-full h-20 text-black bg-white min-h-[80px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] max-md:max-w-full">
      <div className="flex shrink-0 self-stretch my-auto w-10 h-10 bg-black bg-opacity-10 rounded-[100px]" />
      <div className="flex-1 shrink self-stretch my-auto text-3xl font-medium leading-none basis-0 max-md:max-w-full">
        {t("fullName")}
      </div>
      <nav className="flex gap-10 justify-center items-center self-stretch my-auto text-base whitespace-nowrap bg-white min-w-[240px]">
        {["Home", "About", "Experience", "Skills", "Contact"].map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase()}`}
            className="self-stretch my-auto hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {t(item.toLowerCase())}
          </a>
        ))}
      </nav>
    </header>
  );
};
