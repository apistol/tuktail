/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.facebook.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};
export default nextConfig;
