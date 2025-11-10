import { lazy } from "react";
import { Portfolio } from "./Portfolio";
import "./assets/fontello/css/fontello.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PageNotFound from "./pages/page-not-found";

const AppLayout = lazy(() => import("./layouts/AppLayout"));
const MyComponent = lazy(() => import("./components/my-components/index"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Portfolio />} />
        <Route path="/my-component" element={<MyComponent/>} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
