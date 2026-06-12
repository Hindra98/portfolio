import { useState } from "react";
import { Kicker } from ".";
import { useHead } from "../hooks/use-head";
import { useI18n } from "../lib/i18n";
import { profile } from "../lib/data";
import { Download, Send } from "lucide-react";

export default function ContactPage() {
  const { t, lang } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio — Message de ${name || "anonyme"}`,
    );
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.emails[0]}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const infos = [
    {
      // Icon: Mail,
      Icon: <span className={`icon mail-alticon- text-xl text-sharingan`} />,
      label: t("contact.email"),
      value: profile.emails[0],
      href: `mailto:${profile.emails[0]}`,
    },
    {
      // Icon: Phone,
      Icon: <span className={`icon phoneicon- text-xl text-sharingan`} />,
      label: t("contact.phone"),
      value: profile.phones.join(" / "),
      href: profile.phones[0],
      href2: profile.phones[1],
    },
    {
      // Icon: MessageCircle,
      Icon: <span className={`icon whatsappicon- text-xl text-sharingan`} />,
      label: t("contact.whatsapp"),
      value: "+237 655 39 47 65",
      href: "https://wa.me/237655394765?text=Bonjour j'ai besoin de vos services",
    },
    {
      // Icon: MapPin,
      Icon: <span className={`icon location-2icon- text-xl text-sharingan`} />,
      label: t("contact.location"),
      value: profile.location[lang],
      href: null,
    },
  ];

  useHead({
    title: "Contact — Vadiny Fotsing",
    meta: [
      {
        name: "description",
        content:
          "Travaillons ensemble. Contactez Vadiny Fotsing par e-mail, téléphone, LinkedIn ou GitHub.",
      },
      { property: "og:title", content: "Contact — Vadiny Fotsing" },
      {
        property: "og:description",
        content: "Une idée, un poste, une collaboration ? Écrivez-moi.",
      },
    ],
    link: [{ rel: "canonical", href: "/contact" }],
  });

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24">
      <div className="max-w-2xl">
        <Kicker>{t("contact.kicker")}</Kicker>
        <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold tracking-tight">
          {t("contact.title")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("contact.subtitle")}
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-3">
          {infos.map(({ Icon, label, value, href, href2 }) => {
            const C: any = href && !href2 ? "a" : "div";
            return (
              <C
                key={label}
                href={href && !href2 ? href : undefined}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-sharingan/50 transition"
              >
                <div className="h-10 w-10 rounded-lg bg-sharingan/10 flex items-center justify-center shrink-0">
                  {Icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="font-medium truncate flex items-center gap-2">
                    {href2 ? (
                      <>
                        <a href={`tel:${href.replace(/\s/g, "")}`}>{href}</a> /{" "}
                        <a href={`tel:${href2.replace(/\s/g, "")}`}>{href2}</a>
                      </>
                    ) : (
                      value
                    )}
                  </div>
                </div>
              </C>
            );
          })}

          <div className="flex gap-2 pt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-sharingan/50 transition"
            >
              {/* <Github className="h-4 w-4" /> GitHub */}
              <span className={`icon github-circledicon- text-[16px]`} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-sharingan/50 transition"
            >
              {/* <Linkedin className="h-4 w-4" /> LinkedIn */}
              <span className={`icon linkedinicon- text-[16px]`} /> LinkedIn
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href="/Vadiny_Fotsing_CV-FR.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-sharingan/40 bg-sharingan/5 px-4 py-3 text-sm font-semibold hover:bg-sharingan/10 transition"
            >
              <Download className="h-4 w-4" /> {t("cv.download.fr")}
            </a>
            <a
              href="/Vadiny_Fotsing_CV-SI.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-tech/40 bg-tech/5 px-4 py-3 text-sm font-semibold hover:bg-tech/10 transition"
            >
              <Download className="h-4 w-4" /> {t("cv.download.si")}
            </a>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-border bg-card p-6 lg:p-8 space-y-4"
        >
          <div>
            <label className="text-xs font-medium text-muted-foreground">
              {t("contact.form.name")}
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-sharingan focus:ring-2 focus:ring-sharingan/20 transition"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">
              {t("contact.form.email")}
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-sharingan focus:ring-2 focus:ring-sharingan/20 transition"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">
              {t("contact.form.message")}
            </label>
            <textarea
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-sharingan focus:ring-2 focus:ring-sharingan/20 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-sharingan px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-sharingan-glow transition shadow-lg shadow-sharingan/30"
          >
            <Send className="h-4 w-4" /> {t("contact.form.send")}
          </button>
          {sent && (
            <p className="text-xs text-tech text-center">
              {t("contact.form.sent")}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
