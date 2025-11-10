import { lazy } from "react";
const ToggleThemeComponent = lazy(
  () => import("./components/ToggleThemeComponent")
);

const LoaderComponent = lazy(
  () => import("./components/LoaderComponent")
);

const MyComponent = () => {

  return (
    <main className="py-4 px-8">
      <main className="py-4 px-8">
        <ToggleThemeComponent />
        <LoaderComponent />
      </main>
    </main>
  );
};
export default MyComponent;
