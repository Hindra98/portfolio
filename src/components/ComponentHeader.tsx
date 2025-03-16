import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description?: string;
  link?: string;
  linkname?: string;
};

export const ComponentHeader = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="xmd:sticky xs:relative xmd:top-1/3 xs:top-0 left-0 xl:col-span-3 xmd:col-span-5 h-fit flex flex-col items-start justify-start gap-4 xmd:pt-36 xs:pt-0 xmd:px-0 w-full">
      <h2 className="w-full xl:text-7xl xmd:text-5xl xs:text-4xl font-bold py-4">{props?.title}</h2>
      <div className="flex flex-col gap-5 items-start justify-start">
        {props?.description && (
          <p className="xl:text-2xl xmd:text-lg xs:text-base line-clamp-2">{props?.description}</p>
        )}
        {props?.link && (
          <Link
            to={`/${props?.link}`}
            className="xl:text-xl xmd:text-base text-lg py-2 px-5 text-center uppercase border border-slate-800 rounded-md dark:border-slate-200 text-slate-800 dark:text-slate-200 hover:text-opacity-60 font-bold"
          >
            {props?.linkname || t("more")}
          </Link>
        )}
      </div>
    </div>
  );
};
