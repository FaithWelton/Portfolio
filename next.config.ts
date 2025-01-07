import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    publicRuntimeConfig: {
        modifiedDate: new Date().toISOString(),
    },
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
    }
};

export default nextConfig;
