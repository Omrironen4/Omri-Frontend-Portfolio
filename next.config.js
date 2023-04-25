module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache",
          },
        ],
      },
    ];
  },

  experimental: {
    // Disables service worker caching in development mode
    disableOptimizedLoading: true,
  },
};
