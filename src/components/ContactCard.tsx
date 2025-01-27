import * as React from "react";
import { ContactItem } from "../types";

interface ContactCardProps {
  contact: ContactItem;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <div className="flex relative flex-1 shrink gap-4 justify-center items-center py-5 basis-0 min-w-[240px] size-full max-md:max-w-full">
      <div className="self-stretch px-3 my-auto text-4xl leading-relaxed text-center text-black bg-black bg-opacity-10 h-[60px] rounded-[30px] w-[60px]">
        {contact.icon}
      </div>
      <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto basis-[22px] min-w-[240px] max-md:max-w-full">
        <div className="text-xl leading-snug text-black max-md:max-w-full">
          {contact.title}
        </div>
        <div className="text-base text-black text-opacity-50 max-md:max-w-full">
          {contact.value}
        </div>
      </div>
    </div>
  );
};
