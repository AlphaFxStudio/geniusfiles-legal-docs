/**
 * Résolution des chemins publics et des URLs absolues.
 * `import.meta.env.BASE_URL` vaut "/" sur Lovable et
 * "/geniusfiles-legal-docs/" pour la publication GitHub Pages.
 */
export const BASE_URL = import.meta.env.BASE_URL;

/** Chemin d'un fichier de `public/` compatible avec le sous-dossier de publication. */
export function asset(path: string): string {
  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}

/** Origine publique du site (sans slash final). */
export const SITE_ORIGIN =
  import.meta.env["VITE_SITE_ORIGIN"] ?? "https://alphafxstudio.github.io";

/** URL absolue d'une route de l'application. */
export function canonicalUrl(path: string): string {
  const base = BASE_URL.replace(/\/+$/, "");
  const suffix = path === "/" ? "" : path;
  return `${SITE_ORIGIN}${base}${suffix}` || `${SITE_ORIGIN}/`;
}
