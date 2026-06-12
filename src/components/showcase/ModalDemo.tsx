import { X } from "lucide-react";
import { useState } from "react";

export function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-md bg-sharingan px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-sharingan-glow transition shadow-lg shadow-sharingan/30"
      >
        Ouvrir la modale
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-md rounded-2xl border border-border/80 bg-card p-6 shadow-2xl ring-sharingan animate-fade-in-up`}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 p-1.5 rounded-md hover:bg-secondary transition"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            {/* <div className="h-1 w-12 rounded-full bg-linear-to-r from-sharingan to-tech mb-4" /> */}
            <span className="font-display font-bold tracking-tight block text-gradient from-sharingan to-tech">
            Vadiny Fotsing
          </span>
            <h3 className="font-display text-xl font-bold">Modale composable</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Overlay flouté, animation d'entrée, fermeture au clic extérieur ou via la croix.
              Accessible et configurable.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setOpen(false)} className="px-3 py-1.5 text-sm rounded-md hover:bg-secondary transition">
                Annuler
              </button>
              <button onClick={() => setOpen(false)} className="px-3 py-1.5 text-sm rounded-md bg-foreground text-background font-medium hover:opacity-90 transition">
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
