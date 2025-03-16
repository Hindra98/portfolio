import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextInput, Textarea } from "flowbite-react";
import { HiMail, HiUser } from "react-icons/hi";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../constants";
import { contactInfo } from "../data/portfolioData";
import { ContactCard } from "./ContactCard";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const { t } = useTranslation();
  const form =
    useRef<HTMLFormElement>() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form?.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (err) => {
          console.log("SUCCESS!", err);
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log("Error", error);
        }
      );
    // e.target.reset();
  };

  return (
    <section
      id="contact"
      className="flex flex-col overflow-hidden relative z-0 gap-10 justify-center items-center py-10 w-full"
    >
      <h2 className="w-full xl:text-7xl xmd:text-5xl xs:text-4xl font-bold py-4">
        {t("contact")}
      </h2>

      <div className="flex flex-col xmd:flex-row items-start justify-between gap-4 w-full">
        <div className="border-t border-white/10 flex flex-col justify-center w-full bg-gradient-to-br from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 rounded-2xl px-6 py-8 backdrop-blur-xl">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="inline-block w-8 h-1 bg-zinc-700 dark:bg-zinc-300 rounded-full"></span>
            {t("socialTitle")}
          </h3>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-2">
            {contactInfo.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="border-t border-white/10 flex flex-col gap-7 justify-center w-full bg-gradient-to-br from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 rounded-2xl px-6 py-8 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="inline-block w-8 h-1 bg-zinc-700 dark:bg-zinc-300 rounded-full"></span>
              {t("contactTitle")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            {t("contactDescription")}
            </p>
          </div>
          <TextInput
            id="name"
            type="text"
            icon={HiUser}
            name="user_name"
            placeholder={t("contactName")}
            required
          />
          <TextInput
            id="email"
            type="email"
            icon={HiMail}
            name="user_email"
            placeholder={t("contactEmail")}
            required
          />
          <TextInput
            id="subject"
            type="text"
            name="subject"
            placeholder={t("contactRequete")}
            required
          />
          <Textarea
            id="message"
            name="message"
            placeholder={t("contactMessage")}
            required
            rows={4}
          />

          <button
            type="submit"
            className="p-3 text-center max-w-full text-black dark:text-white whitespace-nowrap rounded-lg border border-black dark:border-white border-solid hover:bg-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-lg"
          >
            <div className="flex justify-center items-center gap-2">
              <span className="icon paper-plane-emptyicon- block"></span>
              <span>{t("contactSubmit")}</span>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};
