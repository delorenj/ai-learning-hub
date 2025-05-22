/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  // Configure script domains for the chatbot widget
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://avmcqr47sbsqzweusz6e2iji.agents.do-ai.run; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://avmcqr47sbsqzweusz6e2iji.agents.do-ai.run; connect-src 'self' https://avmcqr47sbsqzweusz6e2iji.agents.do-ai.run",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;