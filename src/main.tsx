import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./lib/theme";
import { I18nProvider } from "./lib/i18n";
import HErrorBoundary from "./pages/error-page";

createRoot(document.getElementById("root")!).render(
  <HErrorBoundary>
  <Suspense>
    <ThemeProvider>
      <I18nProvider>
        <RouterProvider router={router} />
      </I18nProvider>
    </ThemeProvider>
  </Suspense>
  </HErrorBoundary>
);
