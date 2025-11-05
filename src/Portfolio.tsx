import * as React from "react";
import { Header } from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import { ContactUs } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { Skill } from "./components/Skill";
import { PersonnalProject } from "./components/PersonnalProject";

export const Portfolio: React.FC = () => {
  return (
    <div className="flex relative flex-col">
      <Header />
      <main className="py-4 px-8">
        <HeroBanner />
        <Experience />
        <Skill />
        <PersonnalProject />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};
