import { createMDX } from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

// MDX Plugin Setup
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // your remarkPlugins, rehypePlugins etc if needed
  },
});

export default withMDX(nextConfig);
