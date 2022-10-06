const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async redirects() {
    return [
      {
        source: '/join',
        destination: 'https://discord.com/invite/TcmA2kbJeA',
        permanent: true,
      },
    ]
  },
});
