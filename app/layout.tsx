import type { Metadata } from "next";
import { config } from "@/app/util/config";
import "@/app/globals.css";
import localFont from 'next/font/local'
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";
import { Orbitron, Roboto, Charm } from "next/font/google";

const dystopian = localFont({
  src: "../public/fonts/dystopian.otf",
  variable: "--font-dystopian",
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

const charm = Charm({
  subsets: ["latin"],
  variable: "--font-charm",
  weight: "400",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: "400",
});

export const metadata: Metadata = {
  title: config.title,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return <html lang="en">
    <body style={{ padding: 0 }} className={ `${ dystopian.variable } ${ orbitron.variable } ${ roboto.variable } ${ charm.variable }` }>
      <ThemeProvider>
        { children }
      </ThemeProvider>
    </body>
  </html>
};