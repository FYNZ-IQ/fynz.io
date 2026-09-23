import type { NextConfig } from "next";

// Static export served from the root of the custom domain (https://fynz.io/).
// public/CNAME is what tells GitHub Pages to serve the site there; because the
// site is no longer on the <owner>.github.io/<repo>/ project subpath, no
// basePath or assetPrefix is needed and asset URLs stay root-relative.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
