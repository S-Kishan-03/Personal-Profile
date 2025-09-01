import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: isGithubActions ? '/personal-profile-site/' : undefined,
  basePath: isGithubActions ? '/personal-profile-site' : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
