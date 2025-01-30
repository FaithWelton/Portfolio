import type { Metadata } from "next";
import { config } from "@/app/util/config";
import "@/app/globals.css";
import localFont from 'next/font/local'
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";
 
const dystopian = localFont({
  src: "../public/fonts/dystopian.otf",
  display: 'swap',
})

export const metadata: Metadata = {
  title: config.title,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return <html lang="en" className={ dystopian.className }>
    <body style={{ padding: 0 }}>
      <ThemeProvider>
        { children }
      </ThemeProvider>
    </body>
  </html>
};