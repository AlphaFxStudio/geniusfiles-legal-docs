import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — GeniusFiles" },
      { name: "description", content: "Politique de confidentialité de l'application mobile GeniusFiles." },
      { property: "og:title", content: "Politique de confidentialité — GeniusFiles" },
      { property: "og:description", content: "Politique de confidentialité de l'application mobile GeniusFiles." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politique-de-confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/politique-de-confidentialite" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
        Politique de confidentialité
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Dernière mise à jour : [date à compléter]
      </p>

      <article className="prose-legal mt-8">
        <p>
          <strong>[Placeholder]</strong> Cette politique de confidentialité décrit comment GeniusFiles collecte, utilise, conserve et protège vos données personnelles lorsque vous utilisez l'application mobile GeniusFiles.
        </p>

        <h2>1. Données collectées</h2>
        <p>
          <strong>[Placeholder]</strong> Indiquez ici la liste des données personnelles collectées par l'application (par exemple : nom, adresse e-mail, fichiers, métadonnées, données d'utilisation, identifiants techniques, etc.).
        </p>

        <h2>2. Finalités du traitement</h2>
        <p>
          <strong>[Placeholder]</strong> Décrivez les raisons pour lesquelles ces données sont traitées : fourniture du service, amélioration de l'application, support client, sécurité, etc.
        </p>

        <h2>3. Partage des données</h2>
        <p>
          <strong>[Placeholder]</strong> Précisez si les données sont partagées avec des tiers (hébergeurs, outils d'analyse, prestataires) et dans quelles conditions.
        </p>

        <h2>4. Conservation des données</h2>
        <p>
          <strong>[Placeholder]</strong> Indiquez la durée de conservation des données et les critères utilisés pour déterminer cette durée.
        </p>

        <h2>5. Vos droits</h2>
        <p>
          <strong>[Placeholder]</strong> Mentionnez les droits des utilisateurs (accès, rectification, suppression, portabilité, opposition) et la manière de les exercer.
        </p>

        <h2>6. Sécurité</h2>
        <p>
          <strong>[Placeholder]</strong> Décrivez les mesures techniques et organisationnelles mises en place pour protéger les données.
        </p>

        <h2>7. Contact</h2>
        <p>
          <strong>[Placeholder]</strong> Ajoutez ici les coordonnées du responsable du traitement ou du délégué à la protection des données.
        </p>
      </article>
    </div>
  );
}
