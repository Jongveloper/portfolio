import bundleAnalyzer from '@next/bundle-analyzer';
import process from 'node:process';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  serverExternalPackages: [],
  experimental: {
    turbo: {
      resolveAlias: {
        '@': './src',
        '@shared': './src/shared',
        '@app': './src/app',
        '@pages': './src/pages',
        '@widgets': './src/widgets',
        '@features': './src/features',
        '@entities': './src/entities',
        '@styles': './src/styles',
      }
    },
    optimizePackageImports: ['@emotion/react', '@emotion/styled']
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            shared: {
              name: 'shared',
              minChunks: 2,
              chunks: 'async',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },
};

export default withBundleAnalyzer(nextConfig); 