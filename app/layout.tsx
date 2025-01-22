import type { Metadata } from "next";
import { config } from "@/app/util/config";
import "@/app/globals.css";
import GridBackground from "./components/Animations/GridBackground/gridbg";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const dystopian = localFont({
  src: "../public/fonts/dystopian.otf",
  display: 'swap',
})

export const metadata: Metadata = {
  title: config.title,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return <html lang="en" className={ dystopian.className }>
    <body>
      <GridBackground />
      
      { children }
    </body>
  </html>
};