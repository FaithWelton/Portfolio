import type { Metadata } from "next";
import { config } from "@/app/util/config";
import getConfig from "next/config";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: config.title,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const { publicRuntimeConfig } = getConfig();
  const modifiedDate = new Date(publicRuntimeConfig.modifiedDate).toString();
  console.log(`Modified Date: ${ modifiedDate }`);

  return <html lang="en">
    <body>
      { children }
    </body>
  </html>
};