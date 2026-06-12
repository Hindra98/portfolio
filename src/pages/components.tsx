import { Kicker } from ".";
import { useI18n } from "../lib/i18n";
import { ModalDemo } from "../components/showcase/ModalDemo";
import { FileUploadDemo } from "../components/showcase/FileUploadDemo";
import { InputsDemo } from "../components/showcase/InputsDemo";
import { MediaDemo } from "../components/showcase/MediaDemo";
import { LoadersDemo } from "../components/showcase/LoadersDemo";
import { ThemeSwitchDemo } from "../components/showcase/ThemeSwitchDemo";
import { useHead } from "../hooks/use-head";
import { AppWindow, Film, Loader2, SunMoon, Type, Upload } from "lucide-react";

export default function ComponentsPage() {
  const { t } = useI18n();
  const cards = [
    {
      icon: Upload,
      title: t("components.upload"),
      desc: t("components.upload.desc"),
      demo: <FileUploadDemo />,
    },
    {
      icon: AppWindow,
      title: t("components.modal"),
      desc: t("components.modal.desc"),
      demo: (
        <div className="flex items-center justify-center h-full min-h-45">
          <ModalDemo />
        </div>
      ),
    },
    {
      icon: Type,
      title: t("components.inputs"),
      desc: t("components.inputs.desc"),
      demo: <InputsDemo />,
    },
    {
      icon: Film,
      title: t("components.media"),
      desc: t("components.media.desc"),
      demo: <MediaDemo />,
    },
    {
      icon: SunMoon,
      title: t("components.theme"),
      desc: t("components.theme.desc"),
      demo: <ThemeSwitchDemo />,
    },
    {
      icon: Loader2,
      title: t("components.loaders"),
      desc: t("components.loaders.desc"),
      demo: <LoadersDemo />,
    },
  ];

  useHead({
    title: "Composants — Vadiny Fotsing",
    meta: [
      { name: "author", content: "Vadiny Fotsing" },
      {
        name: "description",
        content:
          "Lab interne : upload de fichiers avec validation, modale, inputs (OTP, mot de passe, email), lecteurs audio/vidéo et galerie.",
      },
      { property: "og:title", content: "Composants — Vadiny Fotsing" },
      {
        property: "og:description",
        content: "Quelques composants React conçus pour mes projets.",
      },
    ],
    link: [{ rel: "canonical", href: "/components" }],
  });

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24">
      <div className="max-w-2xl">
        <Kicker>{t("components.kicker")}</Kicker>
        <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold tracking-tight">
          {t("components.title")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("components.subtitle")}
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-sharingan/50 transition"
          >
            <div className="px-6 pt-6 pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-sharingan/10 flex items-center justify-center">
                  <c.icon className="h-4 w-4 text-sharingan" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{c.title}</h3>
                </div>
              </div>
              <p className="mt-2.5 text-sm text-muted-foreground">{c.desc}</p>
            </div>
            <div className="p-6 bg-linear-to-br from-surface/30 to-transparent">
              {c.demo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
