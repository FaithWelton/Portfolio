import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/u/8365557",
                search: "?v=4",
            }
        ]
    },
    // REMOVE THIS BEFORE COMMITTING:
    experimental: {
        serverActions: {
            allowedOrigins: [
                "localhost:3000",
                "https://xdnkb781-3000.use.devtunnels.ms/",
            ]
        }
    }
};

export default nextConfig;