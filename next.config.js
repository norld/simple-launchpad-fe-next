const nextConfig = {
  exportTrailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    BASE_URL: "http://localhost:3000",
  },
  images: {
    loader: "akamai",
    path: "/",
    domains: ["localhost"],
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
      net: false,
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
