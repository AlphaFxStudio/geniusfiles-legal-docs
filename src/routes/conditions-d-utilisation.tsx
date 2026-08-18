import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/conditions-d-utilisation")({
  head: () => ({
    meta: [
      { title: "Conditions d'utilisation — GeniusFiles" },
      { name: "description", content: "Conditions d'utilisation de l'application mobile GeniusFiles." },
      { property: "og:title", content: "Conditions d'utilisation — GeniusFiles" },
      { property: "og:description", content: "Conditions d'utilisation de l'application mobile GeniusFiles." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/conditions-d-utilisation" },
    ],
    links: [{ rel: "canonical", href: "/conditions-d-utilisation" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">←</span>
        Retour à l'accueil
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Conditions d'utilisation
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Dernière mise à jour : [date à compléter]
      </p>

      <article className="prose-legal mt-8">
        <p>
          <strong>[Placeholder]</strong> Les présentes conditions d'utilisation régissent l'accès et l'utilisation de l'application mobile GeniusFiles. En utilisant l'application, vous acceptez ces conditions dans leur intégralité.
        </p>

        <h2>1. Objet du service</h2>
        <p>
          <strong>[Placeholder]</strong> Décrivez ici ce que fait l'application GeniusFiles et les services proposés aux utilisateurs.
        </p>

        <h2>2. Acceptation des conditions</h2>
        <p>
          <strong>[Placeholder]</strong> Expliquez que le téléchargement ou l'utilisation de l'application implique l'acceptation des présentes conditions.
        </p>

        <h2>3. Compte utilisateur</h2>
        <p>
          <strong>[Placeholder]</strong> Si applicable, décrivez les règles relatives à la création, à la sécurité et à la responsabilité du compte utilisateur.
        </p>

        <h2>4. Propriété intellectuelle</h2>
        <p>
          <strong>[Placeholder]</strong> Précisez qui détient les droits sur l'application, le logo, les marques et les contenus générés.
        </p>

        <h2>5. Utilisation acceptable</h2>
        <p>
          <strong>[Placeholder]</strong> Listez les comportements interdits et les restrictions d'utilisation du service.
        </p>

        <h2>6. Responsabilité</h2>
        <p>
          <strong>[Placeholder]</strong> Définissez les limites de responsabilité de GeniusFiles concernant l'utilisation de l'application.
        </p>

        <h2>7. Modification des conditions</h2>
        <p>
          <strong>[Placeholder]</strong> Indiquez que les conditions peuvent être modifiées et précisez comment les utilisateurs en seront informés.
        </p>

        <h2>8. Résiliation</h2>
        <p>
          <strong>[Placeholder]</strong> Décrivez les conditions de résiliation de l'accès au service.
        </p>

        <h2>9. Droit applicable</h2>
        <p>
          <strong>[Placeholder]</strong> Précisez le droit applicable et la juridiction compétente en cas de litige.
        </p>

        <h2>10. Contact</h2>
        <p>
          <strong>[Placeholder]</strong> Ajoutez ici les coordonnées pour toute question relative aux conditions d'utilisation.
        </p>
      </article>
    </div>
  );
}
