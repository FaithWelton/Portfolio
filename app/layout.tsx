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
import GridBackground from "./components/Animations/GridBackground/gridbg";
import BlinkyText from "./components/Animations/Blink/BlinkyText";
import Warn from "./components/Animations/Warn/Warn";

// export const metadata: Metadata = {
//   title: config.title,
// };

//https://codepen.io/hugo/pen/bGVaOGE

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  // const { publicRuntimeConfig } = getConfig();
  const modifiedDate = new Date(); //new Date(publicRuntimeConfig.modifiedDate).toString();
  const lastUpdate = `> Last Update: ${ format(modifiedDate, "EEEEE MMMMM dd yyyy") }`;
  const today = `> ${ format(new Date(), "EEEEE MMMMM dd yyyy") }`;
  const version = "1.0.";
  const [typingComplete, setTypingComplete] = useState<boolean>(false);

  return <html lang="en">
    <body>
      <GridBackground />
      <Warn />

      <GlitchyText style={{ width: "fit-content", position: "absolute", paddingTop: "5px", paddingLeft: "5px" }}>
        <Typing text={[ lastUpdate, today, `> V.${ version }` ]} elementId={ "lastUpdate" } onTypingComplete={() => setTypingComplete(true)} />
      </GlitchyText>
      
      { typingComplete && <div className={ styles.openScreen } style={{ height: "100%", width: "100%", padding: "10px" }}>
        { children }
      </div> }

      <SocialLinks />

      <div className={ styles.decor2 }> </div>

      <div id="TOP_RIGHT" className={ styles.decor1 }>
          <BlinkyText>
            <div className={ styles.decor1Arrow1 } />
          </BlinkyText>

          <BlinkyText>
            <div className={ styles.decor1Arrow2 } />
          </BlinkyText>

          <BlinkyText>
            <div className={ styles.decor1Arrow3 } />
          </BlinkyText>
      </div>

      <div id="BOTTOM_RIGHT" className={ styles.decor3 }></div>
    </body>
  </html>
};