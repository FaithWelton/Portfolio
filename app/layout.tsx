import type { Metadata } from "next";
import { config } from "@/app/util/config";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: config.title,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return <html lang="en">
    <body>
      { children }
    </body>
  </html>
};