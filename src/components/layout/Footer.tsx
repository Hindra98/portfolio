import { profile } from "../../lib/data";
import { useI18n } from "../../lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative border-t border-border/60 mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sharingan/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-bold">
            {profile.shortName}
            <span className="text-sharingan">.</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {profile.alias} · {t("hero.tag")}
          </p>
        </div>
        <div className="flex md:justify-center items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-secondary transition hover:scale-110"
            aria-label="GitHub"
          >
            {/* <Github className="h-6 w-6" /> */}
            <span className={`icon github-circledicon- text-[24px]`} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-secondary transition hover:scale-110"
            aria-label="LinkedIn"
          >
            {/* <Linkedin className="h-6 w-6" /> */}
            <span className={`icon linkedinicon- text-[24px]`} />
          </a>
          <a
            href={`mailto:${profile.emails[0]}`}
            className="p-2 rounded-md hover:bg-secondary transition hover:scale-110"
            aria-label="Email"
          >
            {/* <Mail className="h-6 w-6" /> */}
            <span className={`icon mail-alticon- text-[24px]`} />
          </a>
        </div>
        <div className="md:text-right text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.shortName}.{" "}
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
