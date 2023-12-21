/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            pathname: '**',
          },{
            protocol: 'https',
            hostname: 'spie-nitg-git-main-sagar-1103.vercel.app',
            pathname: '**',
          },{
            protocol: 'https',
            hostname: 'spie-nitg-chau7j1zq-sagar-1103.vercel.app',
            pathname: '**',
          },{
            protocol: 'https',
            hostname: 'spie-nitg.vercel.app',
            pathname: '**',
          },{
            protocol: 'https',
            hostname: 'spie-nitg-sagar-1103.vercel.app',
            pathname: '**',
          }
        ],
      },
}

module.exports = nextConfig
