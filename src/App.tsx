import React from "react";
import { Portfolio } from "./Portfolio";
import "./assets/fontello/css/fontello.css";
import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PageNotFound from "./pages/page-not-found";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="pt-4 px-2">
        <Portfolio />
      </main>
    </div>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<App />} />
        <Route path="*" element={<PageNotFound />} />
    </>
  )
);
