import * as React from "react";
import HeroBanner from "./components/HeroBanner";
import { ContactUs } from "./components/Contact";
import { Experience } from "./components/Experience";
import { PersonnalProject } from "./components/PersonnalProject";

export const Portfolio: React.FC = () => {
  return (
      <main className="py-4 px-8" id="home">
        <HeroBanner />
        <Experience />
        <PersonnalProject />
        <ContactUs />
      </main>
  );
};
