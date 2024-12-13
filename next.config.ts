import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    publicRuntimeConfig: {
        modifiedDate: new Date().toISOString(),
    }
};

export default nextConfig;
