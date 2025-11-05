import { contactInfo } from "../data/portfolioData";
import { ContactCard } from "./ContactCard";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="flex flex-col overflow-hidden relative z-0 gap-10 justify-center items-center py-10 w-full"
    >
      <h2 className="w-full xl:text-7xl xmd:text-5xl xs:text-4xl font-bold py-4">
        {t("contact")}
      </h2>

      <div className="border-t border-white/10 flex flex-col justify-center w-full bg-gradient-to-br from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 rounded-2xl px-6 py-8 backdrop-blur-xl">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="inline-block w-8 h-1 bg-zinc-700 dark:bg-zinc-300 rounded-full"></span>
          {t("socialTitle")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {contactInfo.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
};
