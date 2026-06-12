
import { useRouteError } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { ErrorBoundary } from "react-error-boundary";

export function ErrorPage() {
  return (
    <div className={"error-page"}>
      <div className={"oops"}>Oops!</div>
      <div className={"message"}>Something went wrong...</div>
    </div>
  );
}

export default function HErrorBoundary(props: React.PropsWithChildren) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, errorInfo) => {
        <div>
          <p>{error?.message}</p> <p>{errorInfo?.componentStack}</p>
        </div>;
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
}

export function ErrorComponent() {
  const error = useRouteError() as Error;
  console.error(error);
  return (
      <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Cette page n'a pas chargé</h1>
        <p className="mt-2 text-sm text-muted-foreground">Une erreur est survenue.</p>
        <div className="flex flex-col gap-4">
          <p className="name flex gap-2 items-center">Nom : <span className="font-medium italic">{error.name}</span></p>
          <p className="name flex gap-2 items-center">Message : <span className="font-medium italic">{error.message}</span></p>
          <p className="name flex gap-2 items-center">Détails : <span className="font-medium italic">{error.stack}</span></p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { window.location.reload(); }}
            className="rounded-md bg-sharingan px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Réessayer
          </button>
          <a href="/" className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary">
            Accueil
          </a>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}