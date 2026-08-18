// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: `GITHUB_PAGES=true vite build`
// Produces a fully static, prerendered site served under the repo sub-path.
// Lovable builds are untouched (the flag is only set by the GitHub Actions workflow).
const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const base = process.env["GITHUB_PAGES_BASE"] ?? "/geniusfiles-legal-docs/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGithubPages
      ? {
          prerender: { enabled: true, crawlLinks: true },
          pages: [
            { path: "/", prerender: { enabled: true } },
            { path: "/politique-de-confidentialite", prerender: { enabled: true } },
            { path: "/conditions-d-utilisation", prerender: { enabled: true } },
          ],
        }
      : {}),
  },
  ...(isGithubPages
    ? {
        // No server deploy target: GitHub Pages only serves static files.
        nitro: false as const,
        vite: { base },
      }
    : {}),
});
