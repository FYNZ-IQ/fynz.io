import type { NextConfig } from "next";

// When building for GitHub Pages we produce a fully static export served from
// a project subpath (https://<owner>.github.io/<repo>/). Local dev/build are
// unaffected because the subpath options are gated behind the GITHUB_PAGES env var.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/fynz.io";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGithubPages
    ? { basePath: repoBasePath, assetPrefix: `${repoBasePath}/` }
    : {}),
};

export default nextConfig;
