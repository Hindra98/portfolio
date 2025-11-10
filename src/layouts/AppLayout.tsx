import * as React from "react";
import { useOutlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const AppLayout: React.FC = () => {
  const outlet = useOutlet();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="pt-4 px-2">
        <div className="flex relative flex-col">
          <Header />
          {outlet}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
