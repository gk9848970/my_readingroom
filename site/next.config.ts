import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // native browser cross-fade between pages (View Transitions API)
    viewTransition: true,
  },
};

export default nextConfig;
