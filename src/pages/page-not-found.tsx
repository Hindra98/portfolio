import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import error from "../assets/img/404_1000.png";
import { useTranslation } from "react-i18next";

const PageNotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center w-full h-dvh min-h-[490px] px-8">
      <motion.div
        className="flex flex-col md:flex-row gap-8 justify-center items-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-72 md:max-w-96"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src={error}
            alt={t("pageNotFound")}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex flex-col gap-4 justify-center items- w-full max-w-96">
          <h1 className="page-not-found font-bold text-5xl">
            {t("pageNotFound")}
          </h1>
          <p className="italic">{t("pageNotFoundMsg")}</p>
          <ul className="flex flex-col gap-0">
            <li>
              <Link
                to="/"
                className="hover:underline transition-all duration-200"
              >
                {t("pageNotFoundHomeLink")}
              </Link>
            </li>
            <li>
              <Link
                to="/#projects"
                className="hover:underline transition-all duration-200"
              >
                {t("pageNotFoundProjectLink")}
              </Link>
            </li>
            <li>
              <Link
                to="/my-component"
                className="hover:underline transition-all duration-200"
              >
                {t("pageNotFoundComponentLink")}
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
