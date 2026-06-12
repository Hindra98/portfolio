import { Globe } from "lucide-react";
import { useI18n } from "../lib/i18n";

const LanguageToggle = () => {
  const { lang, setLang } = useI18n();
  return (
    <button
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-semibold rounded-md hover:bg-secondary transition cursor-pointer uppercase"
      aria-label="Switch language"
    >
      <Globe className="h-3.5 w-3.5" />
      {lang}
    </button>
  );
};

export default LanguageToggle;
