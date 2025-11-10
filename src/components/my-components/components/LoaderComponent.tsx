import { useTranslation } from "react-i18next";
import { ComponentCard } from "../ComponentCard";
import { ComponentItem } from "../../../types";

const LoaderComponent = () => {
  const { t } = useTranslation();
  const components: ComponentItem[] = [
    {
      name: t("loaderOne"),
      children: <UISpinnerOne />,
    },
    {
      name: t("loaderTwo"),
      children: <UISpinnerTwo />,
    },
    {
      name: t("loaderThree"),
      children: <UISpinnerThree />,
    },
    {
      name: t("loaderFour"),
      children: <UISpinnerFour />,
    },
  ];
  return (
    <section
      id="loader"
      className="flex flex-col overflow-hidden relative z-0 gap-10 justify-center items-center py-10 w-full"
    >
      <h2 className="w-full xmd:text-4xl xs:text-xl font-bold py-4">
        {t("theme")} Loader
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {components.map((component, index) => (
          <ComponentCard key={index} component={component} idx={index} />
        ))}
      </div>
    </section>
  );
};

const UISpinnerOne = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const UISpinnerTwo = () => {
  return (
    <div className="w-full h-full bg-black bg-opacity-0 flex justify-center items-center z-10">
      <span className="icon spinnericon- text-5xl animate-spin block"></span>
    </div>
  );
};

const UISpinnerThree = () => {
  return (
    <div className="w-full h-full bg-black bg-opacity-0 flex justify-center items-center z-10">
      <div className="chargementFx"></div>
    </div>
  );
};

const UISpinnerFour = () => {
  return (
    <div
      className={`border-t-gray-800 dark:border-t-gray-100 border-t-2 size-20 animate-spin rounded-full border-6`}
    ></div>
  );
};

export default LoaderComponent;
