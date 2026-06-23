import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  },
  images: {
    unoptimized: true,
  },
};

export default withContentlayer(nextConfig);
