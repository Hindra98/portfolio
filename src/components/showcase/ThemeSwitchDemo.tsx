import { Moon, Sun } from "lucide-react";
import { useState } from "react";

/**
 * Two card-level theme switchers — they don't change the global theme,
 * only the card preview, to demo isolated UI states.
 */
export function ThemeSwitchDemo() {
  const [modeA, setModeA] = useState<"light" | "dark">("dark");
  const [modeB, setModeB] = useState<"light" | "dark">("dark");

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {/* Variant A — Icon button toggle */}
      <ThemedCard mode={modeA} label="Bouton">
        <button
          onClick={() => setModeA(modeA === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className={`relative h-11 w-11 rounded-xl border flex items-center justify-center transition-all ${modeA === "dark"
              ? "bg-slate-800 border-slate-700 text-amber-300 shadow-inner"
              : "bg-amber-100 border-amber-300 text-amber-600 shadow-md"}`}
        >
          {modeA === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
      </ThemedCard>

      {/* Variant B — Switch toggle with stars + corner sun/moon */}
      <ThemedCard mode={modeB} label="Switch" cornerIcon>
        <button
          role="switch"
          aria-checked={modeB === "dark"}
          onClick={() => setModeB(modeB === "dark" ? "light" : "dark")}
          className={`relative h-7 w-14 rounded-full transition-colors duration-500 overflow-hidden border ${modeB === "dark"
              ? "bg-linear-to-r from-indigo-900 to-slate-900 border-indigo-700"
              : "bg-linear-to-r from-sky-300 to-amber-200 border-sky-300"}`}
        >
          {/* Stars (visible in dark) */}
          <span
            className={`absolute inset-0 transition-opacity duration-500 ${modeB === "dark" ? "opacity-100" : "opacity-0"}`}
          >
            {/* <Star className="absolute top-1 left-2 h-1.5 w-1.5 text-white fill-white" />
            <Star className="absolute top-3 left-5 h-1 w-1 text-white fill-white" />
            <Star className="absolute top-1.5 left-7 h-1 w-1 text-white fill-white" /> */}
            <span className={`icon star-emptyicon- absolute top-1 left-2 text-[6px] text-white fill-white`} />
            <span className={`icon star-emptyicon- absolute top-3 left-5 text-[4px] text-white fill-white`} />
            <span className={`icon star-emptyicon- absolute top-1.5 left-7 text-[4px] text-white fill-white`} />
          </span>
          {/* Thumb */}
          <span
            className={`absolute top-0.5 h-6 w-6 rounded-full transition-all duration-500 flex items-center justify-center shadow-md ${modeB === "dark"
                ? "left-7.5 bg-slate-200 text-indigo-900"
                : "left-0.5 bg-amber-400 text-amber-900"}`}
          >
            {modeB === "dark" ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
          </span>
        </button>
      </ThemedCard>
    </div>
  );
}

function ThemedCard({
  mode,
  label,
  cornerIcon,
  children,
}: {
  mode: "light" | "dark";
  label: string;
  cornerIcon?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border p-5 min-h-[170px] transition-colors duration-500 ${mode === "dark"
          ? "bg-slate-900 border-slate-800 text-slate-100"
          : "bg-white border-slate-200 text-slate-900"}`}
    >
      {cornerIcon && (
        <div className="absolute top-2 right-2 opacity-80">
          {mode === "dark" ? (
            <Moon className="h-5 w-5 text-amber-300 fill-amber-300/40" />
          ) : (
            <Sun className="h-5 w-5 text-amber-500" />
          )}
        </div>
      )}
      <div className="text-[10px] font-mono uppercase tracking-widest opacity-60">{label}</div>
      <div className="mt-1 font-display text-base font-semibold">
        {mode === "dark" ? "Mode sombre" : "Mode clair"}
      </div>
      <p className={`mt-1 text-xs ${mode === "dark" ? "text-slate-400" : "text-slate-500"}`}>
        Aperçu local de la carte uniquement.
      </p>
      <div className="mt-4 flex items-center gap-3">{children}</div>
    </div>
  );
}
