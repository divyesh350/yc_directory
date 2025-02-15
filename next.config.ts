/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // Remove or properly configure experimental features
  experimental: {
    // Remove ppr if you're not using the canary version
    // ppr: true 
    
  }
}

export default nextConfig;
