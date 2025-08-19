import React from "react";
import myCv from "../assets/pdf/Vadiny-Fotsing CV-FR.pdf";
import imageBack from "../assets/img/image6.png";
import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
import bg from "../assets/img/compressed/dark-hero-banner.jpg";
import bg2 from "../assets/img/compressed/light-hero-banner.jpg";

const HeroBanner: React.FC = () => {
  const { t } = useTranslation();
  const downloadCv = () => {
    const pdfUrl = myCv;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "cv-hindra.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative flex gap-10 items-center justify-between w-full overflow-hidden h-[calc(100vh-100px)]">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <img src={bg} className="w-full h-full hidden dark:block opacity-50" />
        <img src={bg2} className="w-full h-full dark:hidden" />
      </div>
      <div className="xs:text-center xmd:text-left py-16 flex flex-col justify-between gap-5 xmd:items-start xs:items-center w-full z-10 h-full">
        <h1 className="text-4xl md:text-6xl font-extrabold animate-fadeIn">
        {t("welcome")}
        </h1>
        <div className="flex overflow-hidden items-center">
          <div className="text-xl md:text-3xl font-semibold text-accent overflow-hidden self-stretch p-1 my-auto rounded-sm border border-solid bg-zinc-300  dark:bg-zinc-700 bg-opacity-50 border-black dark:border-zinc-500 border-opacity-10">
            <ReactTyped
              strings={[
                t("desc1"),
                t("desc2"),
                t("desc3"),
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
        </div>
        <p className="text-lg xmd:mx-0 xs:mx-auto w-2/3 opacity-75 text-justify">
          {t("bannerDescription")}
        </p>

        <div className="flex items-center mt-aut gap-6 transition-all duration-300 text-lg font-medium rounded-lg">
          <a
            href="#contact"
            className="p-3 w-40 max-w-full text-black dark:text-white whitespace-nowrap rounded-lg border border-black dark:border-white border-solid hover:bg-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-lg"
          >
            {t("contact")}
          </a>
          <button
            onClick={downloadCv}
            className="p-3 w-40 max-w-full text-white dark:text-black bg-black dark:bg-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-lg"
          >
            {t("cv")}
          </button>
        </div>
      </div>
      <div className="xmd:w-full h-full flex justify-end xs:w-0 absolute top-0 -right-28">
        <img
          src={imageBack}
          alt="Hindra"
          className="xmd:w-[400px] lg:w-[500px] object-contain drop-shadow-2xl animate-fadeInUp grayscale"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
