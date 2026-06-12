import * as React from "react";
import { useOutlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
const AppLayout: React.FC = () => {
  const outlet = useOutlet();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{outlet}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
