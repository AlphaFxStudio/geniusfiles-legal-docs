import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Cette page n'a pas pu charger
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une erreur est survenue. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GeniusFiles — Informations légales" },
      { name: "description", content: "Espace officiel des informations légales de GeniusFiles : politique de confidentialité et conditions d'utilisation." },
      { name: "author", content: "GeniusFiles" },
      { property: "og:title", content: "GeniusFiles — Informations légales" },
      { property: "og:description", content: "Espace officiel des informations légales de GeniusFiles." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@GeniusFiles" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const DOC_TITLES: Record<string, string> = {
  "/politique-de-confidentialite": "Politique de confidentialité",
  "/conditions-d-utilisation": "Conditions d'utilisation",
};

function Header() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname.replace(/\/+$/, "") || "/",
  });
  const docTitle = DOC_TITLES[pathname];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3 sm:py-4">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
          <img
            src="/logo.png"
            alt="GeniusFiles"
            width={40}
            height={40}
            decoding="async"
            className="h-9 w-9 rounded-xl sm:h-10 sm:w-10"
          />
          <span className="flex flex-col">
            <span className="text-base font-semibold leading-tight text-foreground">
              GeniusFiles
            </span>
            {!docTitle && (
              <span className="text-xs leading-tight text-muted-foreground">
                Informations légales
              </span>
            )}
          </span>
        </Link>

        {docTitle ? (
          <span className="min-w-0 truncate text-right text-xs font-medium text-muted-foreground sm:text-sm">
            {docTitle}
          </span>
        ) : (
          <nav className="hidden items-center gap-4 text-sm sm:flex">
            <Link
              to="/politique-de-confidentialite"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Confidentialité
            </Link>
            <Link
              to="/conditions-d-utilisation"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Conditions
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background py-8">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GeniusFiles. Tous droits réservés.
        </p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          Espace officiel des documents légaux de l'application mobile GeniusFiles.
        </p>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
