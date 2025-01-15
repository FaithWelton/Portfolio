"use client";

import { useState } from "react";
import View from "./components/View/View";
import SocialLinks from "./components/Social/socialLinks";
import VersionUpdate from "./components/VersionUpdate/VersionUpdate";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import styles from "./page.module.css";
import Warn from "./components/Animations/Warn/Warn";
import GridBackground from "./components/Animations/GridBackground/gridbg";

export default function Home() {
  const [selection, setSelection] = useState<any>("home");
  const percents = ["05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95"];
  const messages = [
    "initializing system...",
    "connecting...",
    "error: connection lost...",
    "re-establishing connection...",
    "system update complete...",
    "verifying credentials...",
    "CPU performance: 100%...",
    "memory allocation: optimal...",
    "all systems online.",
    "",
    "",
    "decrypting signal...",
    "code: 01101000 01100101 01101100 01110000",
    "checksum validation passed.",
    "",
    "connection to external network established",
    "running diagnostics...",
    "error code: 418 - i am a teapot",
    "system recovery in progress...",
    "system recovery complete.",
    "",
    "",
    "warning: unknown entity detected...",
    "signal source: unknown",
    "origin: deep space - 3500 light years away...",
    "processing anomaly...",
    "message received from unknown source: ",
    "you are not alone.",
    "",
    "",
  ];

  return <div className={ styles.home }>
    <div className={ styles.sidelinesContainer }>
      <div className={ styles.sideline }>
        { percents.map(percent => <div key={ percent } className={ percent[1] === "5" ? styles.halftick : styles.fulltick } style={{ top: `${ percent }%` }}> </div> )}
      </div>
    </div>

    <div className={ styles.sidebar }>
      <div style={{ height: "100%", width: "2px" }}> <div className={ styles.bouncingLine } style={{ background: "#ff00ae" }} /> </div>
      <div style={{ height: "100%", width: "2px" }}> <div className={ styles.bouncingLine } style={{ background: "#f6ff00", animationDelay: "3s" }} /> </div>
      
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div className={ styles.versionContainer }>
          <VersionUpdate />
        </div>
        
        <div className={styles.scrollContainer}>
          <div className={styles.scrollText} id="scrollingText">
            { messages.map((msg, index) => (
              <p key={ index }> { msg } <br /> </p>
            ))}

            { messages.map((msg, index) => (
              // Extra copy for smooth transition for looping
              <p key={ index + messages.length }> { msg } <br /> </p>
            ))}
          </div>
        </div>
      </div>
    </div>

    <Menu selection={ selection } setSelection={ setSelection } />

    <View>
      { selection }
    </View>

    <SocialLinks />
    
    <Warn />
  </div>

// return <div className={ styles.openScreen }>
//     <View>
//       <VersionUpdate />

//       <div className={ styles.mainContainer }>
//           <Menu selection={ selection } setSelection={ setSelection } />

//           { selection === "PROJECTS" && <Projects /> }
//           { selection === "ABOUT" && <About /> }
//       </div>

//       

//       {/* DECORATIONS: */}
//       <Warn /> 

//       <div id="TOP_RIGHT" className={ styles.decor1 }>
//         <div className={ styles.decor1Arrow1 } />
//         <div className={ styles.decor1Arrow2 } />
//         <div className={ styles.decor1Arrow3 } />
//       </div>

//       <div id="BOTTOM_RIGHT" className={ styles.decor2 }></div>
//     </View>
//   </div>
};