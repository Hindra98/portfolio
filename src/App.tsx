import { lazy } from "react";
import "./assets/fontello/css/fontello.css";
import "./styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NotFoundComponent from "./pages/page-not-found";
import { ErrorComponent } from "./pages/error-page";

const AppLayout = lazy(() => import("./components/layout/AppLayout"));
const ContactPage = lazy(() => import("./pages/contact"));
const ComponentsPage = lazy(() => import("./pages/components"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const HomePage = lazy(() => import("./pages/index"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />} errorElement={<ErrorComponent/>}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/components" element={<ComponentsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Route>

      <Route path="*" element={<NotFoundComponent />} />
    </>
  )
);
