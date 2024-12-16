"use client";

// import type { Metadata } from "next";
import { config } from "@/app/util/config";
import getConfig from "next/config";
import SocialLinks from "@/app/components/Social/socialLinks";
import GlitchyText from "./components/Animations/Glitch/GlitchyText";
import { format } from "date-fns";
import "@/app/globals.css";
import styles from "./page.module.css";
import Typing from "./components/Animations/Typing/Typing";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: config.title,
// };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  // const { publicRuntimeConfig } = getConfig();
  const modifiedDate = new Date(); //new Date(publicRuntimeConfig.modifiedDate).toString();
  const lastUpdate = `Last Update: ${ format(modifiedDate, "EEEEE MMMMM dd yyyy") }`;
  const today = `${ format(new Date(), "EEEEE MMMMM dd yyyy") }`;
  const version = "1.0.";
  const [load, setLoad] = useState<boolean>(false);

  return <html lang="en">
    <body>
      <GlitchyText style={{ width: "fit-content", position: "absolute" }}>
        <Typing text={[ lastUpdate, today, `V.${ version }` ]} elementId={ "lastUpdate" } onTypingComplete={() => setLoad(true)} />
      </GlitchyText>
      
      { load && <div className={ styles.openScreen } style={{ height: "100%", width: "100%" }}>
        { children }
      </div> }

      <SocialLinks />
    </body>
  </html>
};