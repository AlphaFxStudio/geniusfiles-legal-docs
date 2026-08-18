import { createFileRoute, Link } from "@tanstack/react-router";
import { asset, canonicalUrl } from "../lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GeniusFiles — Informations légales" },
      { name: "description", content: "Espace officiel des informations légales de GeniusFiles." },
      { property: "og:title", content: "GeniusFiles — Informations légales" },
      { property: "og:description", content: "Espace officiel des informations légales de GeniusFiles." },
      { property: "og:url", content: canonicalUrl("/") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-16 sm:py-24">
      <div className="flex max-w-md flex-col items-center text-center">
        <img
          src={asset("logo.png")}
          alt="GeniusFiles"
          className="h-24 w-24 rounded-3xl shadow-lg shadow-primary/10"
        />
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          GeniusFiles
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Espace officiel des informations légales de l'application mobile GeniusFiles.
        </p>
        <p className="mt-2 text-sm text-muted-foreground/80">
          Retrouvez ici nos documents légaux : politique de confidentialité et conditions d'utilisation.
        </p>

        <nav className="mt-10 flex w-full flex-col gap-3">
          <Link
            to="/politique-de-confidentialite"
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-base font-medium text-primary-foreground shadow-md shadow-primary/15 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
          >
            Politique de confidentialité
          </Link>
          <Link
            to="/conditions-d-utilisation"
            className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-card px-5 py-3.5 text-base font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
          >
            Conditions d'utilisation
          </Link>
        </nav>
      </div>
    </div>
  );
}
