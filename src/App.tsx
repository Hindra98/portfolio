import React from "react";
import { Portfolio } from "./Portfolio";
import "./assets/fontello/css/fontello.css";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="pt-4 px-2">
        <Portfolio />
      </main>
    </div>
  );
};
