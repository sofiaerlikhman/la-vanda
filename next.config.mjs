/** @type {import('next').NextConfig} */

// Served from https://<user>.github.io/la-vanda, so every asset and route
// lives under this sub-path. basePath is applied automatically to next/link
// and to the framework's own /_next assets; raw asset URLs (fonts in CSS,
// raw <a href="/…">) are prefixed manually with this same value.
const basePath = "/la-vanda";

const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site into `out/` — no Node server needed, so it can be
  // hosted for free on GitHub Pages.
  output: "export",
  basePath,
  // Each route becomes a folder with its own index.html (…/sortiment/index.html),
  // which static hosts like GitHub Pages resolve without extra rewrite rules.
  trailingSlash: true,
  images: {
    // GitHub Pages can't run the next/image optimizer, so images are served as-is.
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
