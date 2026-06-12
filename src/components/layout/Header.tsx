import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "../../lib/i18n";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../assets";
import LanguageToggle from "../LanguageToggle";
import ThemeToggle from "../ThemeToggle";

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/components", label: t("nav.components") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="relative">
            <div className="absolute inset-0 rounded-md bg-sharingan/30 blur-md opacity-0 group-hover:opacity-100 transition" />
            <img
              src={logo}
              alt="Hindra98"
              className="relative h-8 w-auto dark:invert-0 invert-0"
            />
          </div>
          <span className="font-display font-bold tracking-tight hidden sm:block text-gradient">
            Vadiny Fotsing
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = loc.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
                {active && (
                  <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 bg-linear-to-r from-sharingan to-tech rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-secondary transition cursor-pointer"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur px-5 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
