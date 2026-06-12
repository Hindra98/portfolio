import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { Kicker } from ".";
import { useHead } from "../hooks/use-head";
import { projects } from "../lib/data";
import { useI18n } from "../lib/i18n";

export default function ProjectsPage() {
  const { t, lang } = useI18n();

  useHead({
    title: "Projets — Vadiny Fotsing",
    meta: [
      {
        name: "description",
        content:
          "Projets personnels : Hindra Auth, Exchange Service, First Page, H-Guide, Wedding platform, Afrochic.",
      },
      { property: "og:title", content: "Projets — Vadiny Fotsing" },
      {
        property: "og:description",
        content: "Une sélection d'expérimentations et de produits déployés.",
      },
    ],
    link: [{ rel: "canonical", href: "/projects" }],
  });
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24">
      <div className="max-w-2xl">
        <Kicker>{t("projects.kicker")}</Kicker>
        <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold tracking-tight">
          {t("projects.title")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("projects.subtitle")}
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {projects.map((p) => {
          const isAccentRed = p.accent === "sharingan";
          const Wrap = p.url ? "a" : "div";
          const wrapProps = p.url
            ? { href: p.url, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Wrap
              key={p.name}
              {...(wrapProps as object)}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 min-h-65 transition-all hover:border-sharingan/60 hover:-translate-y-1 hover:shadow-2xl ${p.url ? "cursor-pointer" : "opacity-95"}`}
            >
              {!p.url && (
                <span className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-15 text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-sharingan text-center -rotate-30 font-bold">
                  {t("archive")}
                </span>
              )}
              {/* Illustration backside, revealed on hover */}
              {/* <div
                className="absolute inset-0 bg-cover bg-center opacity-100 group-hover:opacity-0 scale-110 group-hover:scale-100 transition-all duration-700"
                style={{ backgroundImage: `url(${p.illustration})` }}
                aria-hidden
              /> */}

              {/* Frontside */}

              <div className="opacity-100 group-hover:opacity-0 transition-all duration-500">
                <img
                  src={p.illustration}
                  alt={p.name}
                  className={`absolute inset-0 object-cover size-full z-0 opacity-50 group-hover:opacity-0 transition-opacity duration-500`}
                />
                <div className="flex justify-center items-center gap-2 absolute top-0 left-0 w-full h-full transition-all duration-500 z-20 p-4 text-center">
                  <span className="flex items-center gap-2">
                    {p.logo && (
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        className="h-10 object-contain"
                        aria-hidden
                      />
                    )}
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-sm text-whie">
                      {p.name}
                    </h3>
                  </span>
                </div>
                {/* Logo watermark */}
                <img
                  src={p.logo}
                  alt=""
                  aria-hidden
                  className="absolute -right-6 -bottom-6 h-32 w-32 object-contain opacity-10 group-hover:opacity-0 transition-opacity duration-500"
                />
              </div>

              {/* Backside */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none ${
                    isAccentRed
                      ? "bg-linear-to-br from-sharingan/10 via-transparent to-transparent"
                      : "bg-linear-to-br from-tech/10 via-transparent to-transparent"
                  }`}
                />

                <div className="relative flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-background/80 backdrop-blur-sm border border-border/60 overflow-hidden flex items-center justify-center shrink-0">
                        <img
                          src={p.logo}
                          alt={`${p.name} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider
                        ${isAccentRed ? "bg-sharingan/10 text-sharingan" : "bg-tech/10 text-tech"}
                      `}
                      >
                        {p.tag[lang]}
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold drop-shadow-sm">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                      {p.desc[lang]}
                    </p>
                  </div>
                  <div
                    className={`ml-3 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition group-hover:scale-110 ${
                      p.url
                        ? isAccentRed
                          ? "bg-sharingan text-primary-foreground"
                          : "bg-tech text-accent-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {p.url ? (
                      <ArrowUpRight className="h-5 w-5" />
                    ) : (
                      <Lock className="h-4 w-4" />
                    )}
                  </div>
                </div>

                <div className="relative mt-6 flex items-center justify-between text-xs">
                  <span className="font-mono text-muted-foreground truncate">
                    {p.url
                      ? p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
                      : t("projects.soon")}
                  </span>
                  {p.url && (
                    <span
                      className={`font-semibold flex items-center gap-1 ${isAccentRed ? "text-sharingan" : "text-tech"}`}
                    >
                      {t("projects.visit")}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </Wrap>
          );
        })}
      </div>
    </div>
  );
}
