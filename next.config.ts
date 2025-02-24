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
    experimental: {
        serverActions: {
            allowedOrigins: [
                "localhost:3000",
                "",
            ]
        }
    }
};

export default nextConfig;