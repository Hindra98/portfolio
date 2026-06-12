
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
          <div className="max-w-md text-center">
            <h1 className="text-7xl font-bold text-gradient">404</h1>
            <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Cette page n'existe pas ou a été déplacée.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md bg-sharingan px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-sharingan-glow transition"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default NotFoundComponent;
