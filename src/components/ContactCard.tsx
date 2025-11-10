import * as React from "react";
import { ContactItem } from "../types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ContactCardProps {
  contact: ContactItem;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const { t } = useTranslation();
  // return (
  //   <div className="flex relative gap-4 justify-start items-center py-5 w-1/2">
  //     <div className="flex items-center justify-center text-3xl text-center bg-gray-300 dark:bg-gray-600 rounded-full size-[56px]">
  //       {contact.icon || <span className={`icon ${contact?.iconcss}`}></span>}
  //     </div>
  //     <div className="flex flex-col">
  //       <div className="text-xl leading-snug">
  //         {contact.title?.toLowerCase()?.startsWith("email")
  //           ? t("email")
  //           : contact.title?.toLowerCase()?.startsWith("phone")
  //           ? t("phone")
  //           : contact.title?.toLowerCase()?.startsWith("phone2")
  //           ? t("phone2")
  //           : contact.title?.toLowerCase()?.startsWith("location")
  //           ? t("location")
  //           : contact.title?.toLowerCase()?.startsWith("linkedin")
  //           ? t("linkedin")
  //           : contact.title?.toLowerCase()?.startsWith("github")
  //           ? t("github")
  //           : contact.title?.toLowerCase()?.startsWith("twitter")
  //           ? t("twitter")
  //           : contact.title?.toLowerCase()?.startsWith("instagram")
  //           ? t("instagram")
  //           : ""}
  //       </div>
  //       <div className="text-base underline underline-offset-2 italic dark:text-gray-50 text-opacity-50">
  //         {(contact?.url as string).length > 0 ? (
  //           <Link
  //             to={contact?.url || ""}
  //             title={contact.desciption}
  //           >
  //             {contact.value}
  //           </Link>
  //         ) : (
  //           contact.value
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <Link
      to={contact?.url || "#"}
      title={contact.description}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden
             hover:border-black/20 dark:hover:border-white/20`}
    >
      {/* Hover Gradient Background */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r ${contact?.gradient}`}
      ></div>

      {/* Content Container */}
      <div className="relative flex items-center gap-2">
        {/* Icon Container */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
            style={{ backgroundColor: contact?.color }}
          ></div>
          <div className="relative p-0 rounded-md flex items-center justify-center size-10">
            {contact.icon || (
              <span
                className={`icon ${contact?.iconcss} text-[20px] transition-all duration-500 group-hover:scale-125`}
                style={{ color: contact?.color }}
              ></span>
            )}
          </div>
        </div>

        {/* Text Container */}
        <div className="flex flex-col gap-1">
          <span className="text-lg px-2 font-bold pt-[0.2rem] tracking-tight leading-none transition-colors duration-300 dark:text-gray-200 dark:group-hover:text-gray-50">
            {contact.title?.toLowerCase()?.startsWith("email")
              ? t("email")
              : contact.title?.toLowerCase()?.startsWith("phone")
              ? t("phone")
              : contact.title?.toLowerCase()?.startsWith("whatsapp")
              ? t("whatsapp")
              : contact.title?.toLowerCase()?.startsWith("phone2")
              ? t("phone2")
              : contact.title?.toLowerCase()?.startsWith("location")
              ? t("location")
              : contact.title?.toLowerCase()?.startsWith("linkedin")
              ? t("linkedin")
              : contact.title?.toLowerCase()?.startsWith("github")
              ? t("github")
              : contact.title?.toLowerCase()?.startsWith("twitter")
              ? t("twitter")
              : contact.title?.toLowerCase()?.startsWith("instagram")
              ? t("instagram")
              : ""}
          </span>
          <span className="text-sm px-2 truncate underline underline-offset-2 italic text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-200 group-hover:text-gray-900 transition-colors duration-300">
            {contact.value}
          </span>
        </div>
      </div>

      {/* External Link */}
      <span
        className="icon link-exticon- relative block w-5 h-5 text-gray-300 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
      ></span>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/10 dark:via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
        ></div>
      </div>
    </Link>
  );
};
