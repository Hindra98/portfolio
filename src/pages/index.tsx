import { useI18n } from "../lib/i18n";
import { education, experiences, profile, skills } from "../lib/data";
import { Link } from "react-router-dom";
import { useHead } from "../hooks/use-head";
import { itachi, portrait } from "../assets";
import { ArrowRight, Download, User } from "lucide-react";

export default function HomePage() {
  const { t, lang } = useI18n();

  useHead({
    title: "Vadiny Fotsing — Développeur Web React/TypeScript",
    meta: [
      {
        name: "description",
        content:
          "Portfolio de Vadiny Fotsing (Hindra98), développeur web React/TypeScript basé à Douala, Cameroun. ERP, plateformes sociales, e-commerce.",
      },
      { name: "author", content: "Vadiny Fotsing" },
      { property: "og:title", content: "Vadiny Fotsing — Développeur Web" },
      {
        property: "og:description",
        content: "Développeur React/TypeScript · ERP, social, e-commerce.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [{ rel: "canonical", href: "/contact" }],
  });
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Itachi background */}
        <div className="absolute inset-0 -z-10">
          <img
            src={itachi}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.12] dark:opacity-[0.18] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/85 to-background" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0 noise-bg" />
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs font-medium">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sharingan opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sharingan" />
                </span>
                {t("hero.tag")}
              </div>

              <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                {t("hero.title")}
                <br />
                <span className="text-gradient">{t("hero.title2")}</span>
              </h1>

              <p className="mt-6 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed">
                {t("hero.subtitle")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-md bg-sharingan px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sharingan-glow transition shadow-lg shadow-sharingan/30"
                >
                  {t("hero.cta.projects")}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 backdrop-blur px-5 py-2.5 text-sm font-semibold hover:border-sharingan/50 transition"
                >
                  {t("hero.cta.contact")}
                </Link>
                <a
                  href="/Vadiny_Fotsing_CV-FR.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-secondary transition"
                >
                  <Download className="h-4 w-4" /> CV
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                <Stat n="3+" label={t("hero.stat1")} />
                <Stat n="10+" label={t("hero.stat2")} />
                <Stat n="20+" label={t("hero.stat3")} />
              </div>
            </div>

            {/* Portrait */}
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="relative mx-auto max-w-sm">
                {/* Sharingan rings */}
                <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-sharingan/30 via-transparent to-tech/30 blur-2xl animate-pulse-glow" />
                <div className="absolute -inset-1 rounded-[1.5rem] bg-linear-to-br from-sharingan via-sharingan/40 to-tech opacity-80" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem] border border-border bg-card">
                  <img
                    src={portrait}
                    alt={profile.name}
                    className="h-full w-full object-cover grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-sharingan/20 via-transparent to-tech/10 mix-blend-overlay" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-5 -left-5 glass border border-border rounded-xl px-4 py-3 shadow-xl animate-float">
                  <div className="flex items-center gap-2 text-xs">
                    {/* <MapPin className="h-3.5 w-3.5 text-sharingan" /> */}
                    <span
                      className={`icon location-2icon- text-[14px] text-sharingan`}
                    />
                    <span className="font-medium">
                      {profile.location[lang]}
                    </span>
                  </div>
                </div>
                <div
                  className="absolute -top-4 -right-4 glass border border-border rounded-xl px-3 py-2 shadow-xl animate-float"
                  style={{ animationDelay: "1.2s" }}
                >
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold">
                    <User className="h-3.5 w-3.5 text-tech" />
                    {profile.alias}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE OF TECHS */}
      <section className="border-y border-border/60 bg-surface/60 overflow-hidden py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div
              key={k}
              className="flex shrink-0 gap-10 px-5 font-mono text-sm text-muted-foreground"
            >
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Symfony",
                "PostgreSQL",
                "TailwindCSS",
                "Redux",
                "Syncfusion",
                "Azure DevOps",
                "Node.js",
                "Supabase",
                "PHP",
              ].map((s) => (
                <span key={s} className="flex items-center gap-10">
                  <span className="hover:text-sharingan transition">{s}</span>
                  <span className="text-border">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <Kicker>{t("about.kicker")}</Kicker>
            <h2 className="mt-2 font-display text-4xl font-bold">
              {t("about.title")}
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("about.body")}
            </p>
            <p className="text-sm font-mono text-foreground/80">
              {t("about.traits")}
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
        <div className="mb-8">
          <Kicker>{t("skills.kicker")}</Kicker>
          <h2 className="mt-2 font-display text-4xl font-bold">
            {t("skills.title")}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCard title={t("skills.frontend")} items={skills.frontend} />
          <SkillCard title={t("skills.backend")} items={skills.backend} />
          <SkillCard title={t("skills.db")} items={skills.db} />
          <SkillCard title={t("skills.devops")} items={skills.devops} />
          <SkillCard title={t("skills.method")} items={skills.method} />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="mb-10">
          <Kicker>{t("exp.kicker")}</Kicker>
          <h2 className="mt-2 font-display text-4xl font-bold">
            {t("exp.title")}
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-linear-to-b from-sharingan via-tech to-transparent" />
          <div className="space-y-8">
            {experiences.map((e) => (
              <div key={e.company} className="relative pl-10">
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-background border-2 border-sharingan flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-sharingan animate-pulse" />
                </div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold">
                    {e.role[lang]}
                  </h3>
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sharingan hover:underline font-medium"
                  >
                    @ {e.company}
                  </a>
                  <span className="text-xs font-mono text-muted-foreground ml-auto">
                    {e.period[lang]}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {e.bullets[lang].map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-sharingan mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
        <div className="mb-8">
          <Kicker>{t("edu.kicker")}</Kicker>
          <h2 className="mt-2 font-display text-4xl font-bold">
            {t("edu.title")}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {education.map((e) => (
            <div
              key={e.year}
              className="rounded-xl border border-border bg-card p-5 hover:border-sharingan/50 transition"
            >
              <div className="text-xs font-mono text-sharingan">{e.year}</div>
              <div className="mt-2 font-display text-lg font-semibold">
                {e.school}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {e.diploma[lang]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 lg:p-14">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sharingan/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-tech/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[2fr_1fr] gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold">
                {t("contact.title")}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {t("contact.subtitle")}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.emails[0]}`}
                  className="inline-flex items-center gap-2 rounded-md bg-sharingan px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sharingan-glow transition"
                >
                  {/* <Mail className="h-4 w-4" /> */}
                  <span className={`icon mail-alticon- text-[16px]`} />
                  {profile.emails[0]}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary transition"
                >
                  {/* <Github className="h-4 w-4" /> */}
                  <span className={`icon github-circledicon- text-[16px]`} />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary transition"
                >
                  {/* <Linkedin className="h-4 w-4" /> */}
                  <span className={`icon linkedinicon- text-[16px]`} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex lg:justify-end gap-2 flex-wrap">
              <a
                href="/Vadiny_Fotsing_CV-FR.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-sharingan/40 bg-sharingan/5 px-4 py-2.5 text-sm font-semibold hover:bg-sharingan/10 transition"
              >
                <Download className="h-4 w-4" />
                {t("cv.download.fr")}
              </a>
              <a
                href="/Vadiny_Fotsing_CV-SI.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-tech/40 bg-tech/5 px-4 py-2.5 text-sm font-semibold hover:bg-tech/10 transition"
              >
                <Download className="h-4 w-4" />
                {t("cv.download.si")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gradient">{n}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sharingan">
      ***{children}
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="group rounded-xl border border-border bg-card p-5 hover:border-sharingan/50 transition">
      <div className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        {title}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((s) => (
          <span
            key={s}
            className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-sharingan/10 hover:text-sharingan transition"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
