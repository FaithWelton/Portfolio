import type { Metadata } from "next";
import NavBar from "./components/Nav/navbar";
import { config } from "@/config";
import "./globals.css";
import SocialLinks from "./components/Social/socialLinks";

export const metadata: Metadata = {
  title: config.title,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return <html lang="en">
    <body style={{ padding: "10px" }}>
      <NavBar />

      { children }

      <SocialLinks />
    </body>
  </html>
};