/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Adicione outras configurações se necessário
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig